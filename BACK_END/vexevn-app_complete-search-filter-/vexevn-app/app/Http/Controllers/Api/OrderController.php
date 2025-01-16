<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CarTrip;
use App\Models\Order;
use App\Models\OrderHistory;
use Illuminate\Support\Facades\DB;
use App\Models\SeatCarTrip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

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
        'car_trip_pickup_point_id' => 'nullable|exists:car_trip_pickup_points,id',
        'car_trip_dropoff_point_id' => 'nullable|exists:car_trip_dropoff_points,id',
        'name' => 'nullable|string|max:255',
        'phone' => 'nullable|string|max:15',
        'email' => 'nullable|email|max:255',
    ]);

    $user = \App\Models\User::find($validated['user_id']);
    if (!$user) {
        return $this->sendResponse(400, 'Người dùng không tồn tại.');
    }

    $name = $validated['name'] ?? $user->name ?? 'Default Name';
    $phone = $validated['phone'] ?? $user->phone ?? '0000000000';
    $email = $validated['email'] ?? $user->email ?? 'default@example.com';

    $seats = SeatCarTrip::whereIn('id', $validated['seat_ids'])
        ->where('car_trip_id', $validated['car_trip_id'])
        ->where('is_available', true)
        ->with('seat')
        ->get();

    if ($seats->isEmpty() || $seats->count() !== count($validated['seat_ids'])) {
        return $this->sendResponse(400, 'Một hoặc nhiều ghế không khả dụng.');
    }

    $carTripPickupPointId = $validated['car_trip_pickup_point_id'] ??
        \App\Models\CarTripPickupPoint::where('car_trip_id', $validated['car_trip_id'])->first()->id ?? null;

    if (!$carTripPickupPointId) {
        return $this->sendResponse(400, 'Không tìm thấy điểm đón mặc định.');
    }

    $carTripDropoffPointId = $validated['car_trip_dropoff_point_id'] ??
        \App\Models\CarTripDropoffPoint::where('car_trip_id', $validated['car_trip_id'])->first()->id ?? null;

    if (!$carTripDropoffPointId) {
        return $this->sendResponse(400, 'Không tìm thấy điểm trả mặc định.');
    }

    $carTripPickupPoint = \App\Models\CarTripPickupPoint::with('pickupPoint')->find($carTripPickupPointId);
    $carTripDropoffPoint = \App\Models\CarTripDropoffPoint::with('dropoffPoint')->find($carTripDropoffPointId);

    if (!$carTripPickupPoint || !$carTripPickupPoint->pickupPoint) {
        return $this->sendResponse(400, 'Điểm đón không hợp lệ.');
    }

    if (!$carTripDropoffPoint || !$carTripDropoffPoint->dropoffPoint) {
        return $this->sendResponse(400, 'Điểm trả không hợp lệ.');
    }

    $pickupPoint = $carTripPickupPoint->pickupPoint;
    $dropoffPoint = $carTripDropoffPoint->dropoffPoint;

    $totalPrice = $seats->sum(function ($seatCarTrip) {
        return $seatCarTrip->seat->price ?? 0;
    });

    $carTrip = \App\Models\CarTrip::find($validated['car_trip_id']);
    if (!$carTrip) {
        return $this->sendResponse(400, 'Không tìm thấy thông tin chuyến xe.');
    }

    $departureDate = $carTrip->departure_date; 
    $arrivalDate = $carTrip->arrival_date;     
    $returnDate = $carTrip->return_date;      

    try {
        $order = Order::create([
            'user_id' => $validated['user_id'],
            'car_trip_id' => $validated['car_trip_id'],
            'seat_ids' => json_encode($validated['seat_ids']),
            'total_price' => $totalPrice,
            'status' => 'pending',
            'name' => $name,
            'phone' => $phone,
            'email' => $email,
            'car_trip_pickup_point_id' => $carTripPickupPointId,
            'car_trip_dropoff_point_id' => $carTripDropoffPointId,
            'departure_date' => $departureDate, 
            'arrival_date' => $arrivalDate,     
            'return_date' => $returnDate,       
        ]);

        SeatCarTrip::whereIn('id', $validated['seat_ids'])->update(['is_available' => false]);

        return $this->sendResponse(201, 'Đặt vé thành công!', [
            'order' => $order,
            'pickup_point' => $pickupPoint ? $pickupPoint->toArray() : null,
            'dropoff_point' => $dropoffPoint ? $dropoffPoint->toArray() : null,
            'name' => $name,
            'phone' => $phone,
            'email' => $email,
        ]);
    } catch (\Throwable $th) {
        \Log::error('Error creating order: ' . $th->getMessage(), [
            'validated_data' => $validated,
        ]);

        return $this->sendResponse(500, 'Đã xảy ra lỗi khi xử lý đơn hàng.');
    }
    }



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
            $order->status = 'cancelled';
            $order->save();

            $seatIds = json_decode($order->seat_ids, true);

            DB::table('seat_car_trips')
                ->whereIn('seat_id', $seatIds)
                ->where('car_trip_id', $order->car_trip_id)
                ->update(['is_available' => true]);

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

    public function updateOrderStatus(Request $request, $id)
    {
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

    public function getOrdersByUserId($userId)
    {
        $orders = Order::with(['carTrip', 'carTrip.pickupPoints', 'carTrip.dropoffPoints'])
            ->where('user_id', $userId)
            ->paginate(10);

        if ($orders->isEmpty()) {
            return $this->sendResponse(404, 'Không tìm thấy đơn hàng nào cho người dùng này.');
        }

        return $this->sendResponse(200, 'Danh sách đơn hàng của người dùng.', $orders);
    }
}
