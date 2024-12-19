<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderHistory;
use Illuminate\Support\Facades\DB;
use App\Models\SeatCarTrip;
use App\Models\CarTrip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    protected function sendResponse($statusCode, $message, $data = null)
    {
        return response()->json([
            'status' => $statusCode,
            'message' => $message,
            'data' => $data,
        ], $statusCode);
    }

    public function createOrder(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'car_trip_id' => 'required|exists:car_trips,id',
            'seat_ids' => 'required|array|min:1',
            'seat_ids.*' => 'exists:seat_car_trips,id',
        ]);

        
        $seats = SeatCarTrip::whereIn('id', $validated['seat_ids'])
            ->where('car_trip_id', $validated['car_trip_id'])
            ->where('is_available', true)
            ->with('seat') 
            ->get();

        
        if ($seats->isEmpty() || $seats->count() !== count($validated['seat_ids'])) {
            return $this->sendResponse(400, 'Một hoặc nhiều ghế không khả dụng.');
        }

        
        $totalPrice = $seats->sum(function ($seatCarTrip) {
            return $seatCarTrip->seat->price ?? 0;
        });

        try {
            
            $order = Order::create([
                'user_id' => $validated['user_id'],
                'car_trip_id' => $validated['car_trip_id'],
                'seat_ids' => json_encode($validated['seat_ids']),
                'total_price' => $totalPrice,
                'status' => 'pending',
            ]);

            
            SeatCarTrip::whereIn('id', $validated['seat_ids'])->update(['is_available' => false]);

            return $this->sendResponse(201, 'Đặt vé thành công!', $order);
        } catch (\Throwable $th) {
            return $this->sendResponse(500, $th->getMessage());
        }
    }

    // public function handleOrder($orderId)
    // {
    //     // Lấy đơn hàng từ DB
    //     $order = Order::find($orderId);

    //     // Kiểm tra nếu đơn hàng không tồn tại
    //     if (!$order) {
    //         return $this->sendResponse(404, 'Đơn hàng không tồn tại.');
    //     }

    //     // Lấy seat_ids, Laravel tự động chuyển từ JSON thành mảng
    //     $seatIds = $order->seat_ids;

    //     // Kiểm tra nếu seat_ids không phải là mảng hợp lệ
    //     if (!is_array($seatIds)) {
    //         return $this->sendResponse(400, 'Dữ liệu ghế không hợp lệ.');
    //     }

    //     // Tính tổng tiền từ seat_ids
    //     $totalAmount = $this->calculateOrderTotalAmount($seatIds);

    //     // Trả kết quả
    //     return $this->sendResponse(200, 'Tính toán thành công.', ['totalAmount' => $totalAmount]);
    // }

    public function showOrder($id)
    {
        $order = Order::with(['user', 'carTrip'])->find($id);

        if (!$order) {
            return $this->sendResponse(404, 'Không tìm thấy đơn hàng.');
        }

        return $this->sendResponse(200, 'Lấy thông tin đơn hàng thành công!', $order);
    }

    public function listOrders()
    {
        $orders = Order::with(['user', 'carTrip'])->paginate(10); 

        return $this->sendResponse(200, 'Hiển thị danh sách đơn hàng thành công.', $orders);
    }

    
    public function cancelOrder($orderId)
    {
        $order = Order::find($orderId);

        if (!$order) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy đơn hàng.',
            ], 404);
        }

        if ($order->status === 'cancelled') {
            return response()->json([
                'status' => 400,
                'message' => 'Đơn hàng đã được hủy trước đó.',
            ], 400);
        }

        try {
            // Cập nhật trạng thái đơn hàng thành "cancelled"
            $order->status = 'cancelled';
            $order->save();

            // Lấy danh sách ghế từ đơn hàng
            $seatIds = json_decode($order->seat_ids, true);

            // Cập nhật trạng thái `is_available` trong bảng `seat_car_trips`
            DB::table('seat_car_trips')
                ->whereIn('seat_id', $seatIds)
                ->where('car_trip_id', $order->car_trip_id) // Điều kiện theo chuyến đi
                ->update(['is_available' => true]); // Giải phóng ghế

            // Ghi lịch sử đơn hàng
            OrderHistory::create([
                'order_id' => $order->id,
                'user_id' => $order->user_id,
                'status' => 'cancelled',
                'description' => 'Đơn hàng bị hủy và ghế đã được giải phóng.',
            ]);

            return response()->json([
                'status' => 200,
                'message' => 'Đơn hàng đã được hủy thành công và ghế đã được giải phóng.',
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => 'Lỗi khi hủy đơn hàng: ' . $th->getMessage(),
            ], 500);
        }
    }



    public function updateOrderStatus(Request $request, $id){
        $order = Order::find($id);

        if (!$order) {
            return $this->sendResponse(404, 'Không tìm thấy đơn hàng.');
        }

        $validated = Validator::make($request->all(), [
            'status' => 'required|string|in:pending,paid,cancelled',
        ]);

        if ($validated->fails()) {
            return $this->sendResponse(422, 'Lỗi xác thực form.', $validated->errors());
        }

        try {
            $order->update(['status' => $request->status]);

            return $this->sendResponse(200, 'Cập nhật trạng thái đơn hàng thành công.', $order);
        } catch (\Throwable $th) {
            return $this->sendResponse(500, $th->getMessage());
        }
    }

}
