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
use Illuminate\Support\Facades\Log;

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
            'payment_method' => 'required|string|in:credit_card,bank_transfer,paypal,cash', 
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

            if ($discountCode->usage_limit <= 0 || !$discountCode->isValid()) {
                return $this->sendResponse(400, 'Mã giảm giá không hợp lệ hoặc đã hết lượt sử dụng.');
            }
        }

        $seatIds = json_decode($order->seat_ids, true);
        $calculatedAmount = $this->calculateOrderTotalAmount($seatIds);

        if ($discountCode) {
            $calculatedAmount = $discountCode->applyDiscount($calculatedAmount);
        }

        if ($validated['amount'] != $calculatedAmount) {
            return $this->sendResponse(400, 'Số tiền thanh toán không đúng với tổng tiền của các ghế.');
        }

        try {
            if ($validated['payment_method'] === 'cash') {
                $payment = Payment::create([
                    'order_id' => $validated['order_id'],
                    'user_id' => $validated['user_id'],
                    'amount' => $validated['amount'],
                    'payment_method' => 'cash',
                    'status' => 'completed', 
                    'transaction_id' => Str::uuid(), 
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

                return $this->sendResponse(201, 'Thanh toán bằng tiền mặt và tạo vé thành công.', $payment);
            }

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

                return $this->sendResponse(201, 'Thanh toán và tạo vé đã được xử lý thành công.', $payment);
            }

            return $this->sendResponse(400, 'Thanh toán thất bại.');
        } catch (\Exception $e) {
            return $this->sendResponse(500, $e->getMessage());
        }
    }

    public function createVNPayPayment(Request $request)
    {
    $validated = $request->validate([
        'order_id' => 'required|exists:orders,id',
        'user_id' => 'required|exists:users,id',
        'amount' => 'required|numeric|min:0',
    ]);

    $vnp_TmnCode = config('vnpay.vnp_TmnCode'); 
    $vnp_HashSecret = config('vnpay.vnp_HashSecret'); 
    $vnp_Url = config('vnpay.vnp_Url'); 
    $vnp_ReturnUrl = config('vnpay.vnp_ReturnUrl'); 

    $vnp_OrderInfo = $validated['order_id']; 
    $vnp_Amount = $validated['amount'] * 100; 

    $vnp_UrlParams = [
        "vnp_Version" => "2.1.0",
        "vnp_TmnCode" => $vnp_TmnCode,
        "vnp_Amount" => $vnp_Amount,
        "vnp_Command" => "pay",
        "vnp_CreateDate" => now()->format('YmdHis'),
        "vnp_CurrCode" => "VND",
        "vnp_IpAddr" => $request->ip(),
        "vnp_Locale" => "vn",
        "vnp_OrderInfo" => $vnp_OrderInfo, 
        "vnp_OrderType" => "billpayment",
        "vnp_ReturnUrl" => $vnp_ReturnUrl,
        "vnp_TxnRef" => time(), 
    ];

    ksort($vnp_UrlParams);

    $query = http_build_query($vnp_UrlParams);

    $vnpSecureHash = hash_hmac('sha512', $query, $vnp_HashSecret);

    $vnp_Url = $vnp_Url . "?" . $query . "&vnp_SecureHash=" . $vnpSecureHash;

    Log::info('VNPay Payment Query String:', ['query' => $query]);
    Log::info('VNPay SecureHash:', ['secure_hash' => $vnpSecureHash]);
    Log::info('Full VNPay URL:', ['url' => $vnp_Url]);

    return response()->json([
        'status' => 200,
        'message' => 'Tạo thanh toán thành công.',
        'data' => [
            'payment_url' => $vnp_Url
        ]
    ]);
    }


    public function vnpayCallback(Request $request)
    {
    $vnp_HashSecret = config('vnpay.vnp_HashSecret'); 
    $inputData = $request->all(); 

    $vnp_SecureHash = $inputData['vnp_SecureHash'] ?? '';

    unset($inputData['vnp_SecureHash'], $inputData['vnp_SecureHashType']);
    ksort($inputData); 
    $query = http_build_query($inputData);
    $secureHash = hash_hmac('sha512', $query, $vnp_HashSecret);

    if ($secureHash !== $vnp_SecureHash) {
        Log::error('VNPay Callback: Invalid SecureHash.', ['input' => $inputData, 'generated' => $secureHash]);
        return $this->sendResponse(400, 'Chữ ký không hợp lệ.');
    }

    if ($inputData['vnp_ResponseCode'] == '00') {
        $order = Order::find($inputData['vnp_OrderInfo']); 

        if (!$order) {
            Log::error('VNPay Callback: Order Not Found.', ['vnp_OrderInfo' => $inputData['vnp_OrderInfo']]);
            return $this->sendResponse(404, 'Không tìm thấy đơn hàng.');
        }

        $payment = Payment::create([
            'order_id' => $order->id,
            'user_id' => $order->user_id,
            'amount' => $inputData['vnp_Amount'] / 100, 
            'payment_method' => 'vnpay',
            'status' => 'completed',
            'transaction_id' => $inputData['vnp_TransactionNo'],
            'payment_gateway' => 'vnpay',
        ]);

        $order->update(['status' => 'paid']);

        Log::info('VNPay Callback: Payment Success.', ['order_id' => $order->id]);
        return $this->sendResponse(200, 'Thanh toán VNPay thành công.', $payment);
    }

    Log::error('VNPay Callback: Transaction Failed.', ['input' => $inputData]);
    return $this->sendResponse(400, 'Thanh toán VNPay thất bại.');
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

    private function calculateOrderTotalAmount($seatIds)
    {
        if (empty($seatIds) || !is_array($seatIds)) {
            return 0; 
        }

        return \DB::table('seats')->whereIn('id', $seatIds)->sum('price');
    }

    private function processPayment($data)
    {
        return [
            'status' => 'failed', 
            'transaction_id' => null,
        ];
    }
}