<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\Order;
use App\Models\Seat;
use App\Models\Ticket;
use App\Models\DiscountCode;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PaymentController extends Controller
{
    protected function sendResponse($statusCode, $message, $data = null)
    {
        return response()->json([
            'status' => $statusCode,
            'message' => $message,
            'data' => $data,
        ], $statusCode);
    }

    public function createPayment(Request $request)
    {
        $validated = $request->validate([
            'order_id' => 'required|exists:orders,id',
            'user_id' => 'required|exists:users,id',
            'amount' => 'required|numeric|min:0',
            'payment_method' => 'required|string|in:credit_card,bank_transfer,paypal',
            'discount_code' => 'nullable|string', 
        ]);
        
        $order = Order::find($validated['order_id']);
        if ($order->status !== 'pending') {
            return $this->sendResponse(400, 'Đơn hàng không ở trạng thái chờ thanh toán.');
        }
    
        $discountCode = null;
        if ($validated['discount_code']) {
            $discountCode = DiscountCode::where('code', $validated['discount_code'])->first();
    
            if (!$discountCode) {
                return $this->sendResponse(400, 'Mã giảm giá không tồn tại.');
            }
    
            if ($discountCode->usage_limit <= 0) {
                return $this->sendResponse(400, 'Mã giảm giá đã hết lượt sử dụng.');
            }
    
            if (!$discountCode->isValid()) {
                return $this->sendResponse(400, 'Mã giảm giá không hợp lệ.');
            }
        }
    
        $seatIds = json_decode($order->seat_ids);
        $calculatedAmount = $this->calculateOrderTotalAmount($seatIds);
    
        if ($discountCode) {
            $calculatedAmount = $discountCode->applyDiscount($calculatedAmount);
        }
    
        if ($validated['amount'] != $calculatedAmount) {
            return $this->sendResponse(400, 'Số tiền thanh toán không đúng với tổng tiền của các ghế.');
        }
    
        try {
            $paymentResult = $this->processPayment($validated);
    
            if ($paymentResult['status'] === 'completed') {
                $payment = Payment::create([
                    'order_id' => $validated['order_id'],
                    'user_id' => $validated['user_id'],
                    'amount' => $validated['amount'],
                    'payment_method' => $validated['payment_method'],
                    'status' => 'completed',
                    'transaction_id' => $paymentResult['transaction_id'],
                    'discount_code_id' => $discountCode ? $discountCode->id : null, 
                ]);

                if ($discountCode) {
                    $discountCode->decrement('usage_limit');
                    $discountCode->increment('used_count'); 
                }

                $order->update(['status' => 'paid']);

                $carTrip = $order->carTrip;
                $seats = Seat::whereIn('id', $seatIds)->get(); 

                $pickupPoints = $carTrip->pickupPoints;
                $dropoffPoints = $carTrip->dropoffPoints;

                foreach ($seats as $seat) {
                    Ticket::create([
                        'name' => Str::random(10),
                        'orders_id' => $validated['order_id'],
                        'car_trip_id' => $carTrip->id,
                        'car_id' => $carTrip->car_id,
                        'car_route_id' => $carTrip->car_route_id,
                        'seats_id' => $seat->id,
                        'pickup_points_id' => $pickupPoints->first()->id, 
                        'dropoff_points_id' => $dropoffPoints->first()->id, 
                    ]);
                }

                return $this->sendResponse(201, 'Thanh toán và tạo vé đã được xử lý thành công.', $payment);
            } else {
                return $this->sendResponse(400, 'Thanh toán thất bại. Vui lòng thử lại.');
            }
        } catch (\Throwable $th) {
            return $this->sendResponse(500, $th->getMessage());
        }
    }

    private function calculateOrderTotalAmount($seatIds)
    {
        if (empty($seatIds) || !is_array($seatIds)) {

            return 0;
        }

        $totalAmount = \DB::table('seats')
            ->whereIn('id', $seatIds) 
            ->sum('price'); 
    
        return $totalAmount;
    }
    
    private function processPayment($data)
    {
        if ($data['payment_method'] === 'credit_card') {
            return [
                'status' => 'completed',
                'transaction_id' => 'TXN_' . uniqid(),
            ];
        }

        if ($data['payment_method'] === 'bank_transfer') {
            return [
                'status' => 'pending',
                'transaction_id' => 'TXN_' . uniqid(),
            ];
        }

        return [
            'status' => 'failed',
            'transaction_id' => null,
        ];
    }

    public function showPayment($id)
    {
        $payment = Payment::find($id);

        if (!$payment) {
            return $this->sendResponse(404, 'Không tìm thấy thanh toán.');
        }

        return $this->sendResponse(200, 'Lấy thông tin thanh toán thành công.', $payment);
    }

    public function userPayments($userId)
    {
        $payments = Payment::where('user_id', $userId)->get();

        if ($payments->isEmpty()) {
            return $this->sendResponse(404, 'Không có thanh toán nào cho người dùng này.');
        }

        return $this->sendResponse(200, 'Hiển thị danh sách thanh toán thành công.', $payments);
    }

    public function listPayments()
    {
        $payments = Payment::all();

        if ($payments->isEmpty()) {
            return $this->sendResponse(404, 'Không có thanh toán nào trong hệ thống.');
        }

        return $this->sendResponse(200, 'Lấy danh sách tất cả thanh toán thành công.', $payments);
    }

    public function deletePayment($id)
    {
        $payment = Payment::find($id);

        if (!$payment) {
            return $this->sendResponse(404, 'Không tìm thấy thanh toán.');
        }

        try {
            $payment->delete();

            return $this->sendResponse(200, 'Xoá thanh toán thành công.');
        } catch (\Throwable $th) {
            return $this->sendResponse(500, $th->getMessage());
        }
    }
}
