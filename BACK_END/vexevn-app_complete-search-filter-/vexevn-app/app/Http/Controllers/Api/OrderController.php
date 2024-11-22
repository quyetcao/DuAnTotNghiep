<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
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
            'trip_id' => 'required|exists:car_trips,id',
            'seat_ids' => 'required|array|min:1',
            'seat_ids.*' => 'exists:seat_car_trips,id',
        ]);

        // Truy vấn các ghế và thông tin giá từ bảng seats
        $seats = SeatCarTrip::whereIn('id', $validated['seat_ids'])
            ->where('trip_id', $validated['trip_id'])
            ->where('is_available', true)
            ->with('seat') // Kết nối với bảng seats
            ->get();

        // Kiểm tra ghế có tồn tại và khả dụng
        if ($seats->isEmpty() || $seats->count() !== count($validated['seat_ids'])) {
            return $this->sendResponse(400, 'Một hoặc nhiều ghế không khả dụng.');
        }

        // Tính tổng giá từ cột price trong bảng seats
        $totalPrice = $seats->sum(function ($seatCarTrip) {
            return $seatCarTrip->seat->price ?? 0;
        });

        try {
            // Tạo đơn hàng
            $order = Order::create([
                'user_id' => $validated['user_id'],
                'trip_id' => $validated['trip_id'],
                'seat_ids' => json_encode($validated['seat_ids']),
                'total_price' => $totalPrice,
                'status' => 'pending',
            ]);

            // Cập nhật trạng thái ghế
            SeatCarTrip::whereIn('id', $validated['seat_ids'])->update(['is_available' => false]);

            return $this->sendResponse(201, 'Đặt vé thành công!', $order);
        } catch (\Throwable $th) {
            return $this->sendResponse(500, $th->getMessage());
        }
    }


    public function showOrder($id){
        $order = Order::find($id);

        if (!$order) {
            return $this->sendResponse(404, 'Không tìm thấy đơn hàng.');
        }

        return $this->sendResponse(200, 'Lấy thông tin đơn hàng thành công!', $order);
    }

    public function listOrders()
    {
        $orders = Order::all();
        return $this->sendResponse(200, 'Hiển thị danh sách đơn hàng thành công.', $orders);
    }

    
    public function cancelOrder($id){
        $order = Order::find($id);

        if (!$order) {
            return $this->sendResponse(404, 'Không tìm thấy đơn hàng.');
        }

        if ($order->status === 'cancelled') {
            return $this->sendResponse(400, 'Đơn hàng đã bị hủy trước đó.');
        }

        try {
            // Khôi phục trạng thái ghế
            $seatIds = json_decode($order->seat_ids);
            SeatCarTrip::whereIn('id', $seatIds)->update(['is_available' => true]);

            // Cập nhật trạng thái đơn hàng
            $order->update(['status' => 'cancelled']);

            return $this->sendResponse(200, 'Hủy đơn hàng thành công.', $order);
        } catch (\Throwable $th) {
            return $this->sendResponse(500, $th->getMessage());
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
