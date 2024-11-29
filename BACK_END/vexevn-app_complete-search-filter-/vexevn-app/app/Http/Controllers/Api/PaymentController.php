<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\Order;
use Illuminate\Http\Request;

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
        ]);

        $order = Order::find($validated['order_id']);
        if ($order->status !== 'pending') {
            return $this->sendResponse(400, 'Đơn hàng không ở trạng thái chờ thanh toán.');
        }

        // Lấy danh sách các seat_ids từ đơn hàng (giả sử là mảng hoặc chuỗi)
        $seatIds = json_decode($order->seat_ids);  // Giả sử seat_ids là chuỗi JSON hoặc mảng

        // Tính tổng tiền của đơn hàng từ bảng seats
        $calculatedAmount = $this->calculateOrderTotalAmount($seatIds);

        // Kiểm tra nếu số tiền thanh toán nhập vào đúng với tổng tiền tính từ ghế
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
                ]);

                // Cập nhật trạng thái đơn hàng
                $order->update(['status' => 'paid']);

                return $this->sendResponse(201, 'Thanh toán đã được xử lý thành công.', $payment);
            } else {
                return $this->sendResponse(400, 'Thanh toán thất bại. Vui lòng thử lại.');
            }
        } catch (\Throwable $th) {
            return $this->sendResponse(500, $th->getMessage());
        }
    }

private function calculateOrderTotalAmount($seatIds)
    {
        // Tính tổng tiền từ các ghế trong đơn hàng
        $totalAmount = \DB::table('seats')
            ->whereIn('id', $seatIds) // Lọc các ghế theo seat_ids
            ->sum('price'); // Tính tổng giá trị của cột price trong bảng seats

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
