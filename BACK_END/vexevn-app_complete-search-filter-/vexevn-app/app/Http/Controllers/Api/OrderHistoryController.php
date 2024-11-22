<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\OrderHistory;
use Illuminate\Http\Request;

class OrderHistoryController extends Controller
{
    protected function sendResponse($statusCode, $message, $data = null)
    {
        return response()->json([
            'status' => $statusCode,
            'message' => $message,
            'data' => $data,
        ], $statusCode);
    }

    /**
     * Lấy lịch sử của một đơn hàng.
     */
    public function getOrderHistory($orderId)
    {
        $histories = OrderHistory::where('order_id', $orderId)->get();

        if ($histories->isEmpty()) {
            return response()->json([
                'status' => 404,
                'message' => 'Không có lịch sử nào cho đơn hàng này.',
                'data' => null,
            ], 404);
        }

        return response()->json([
            'status' => 200,
            'message' => 'Lấy lịch sử đơn hàng thành công.',
            'data' => $histories,
        ]);
    }



    /**
     * Tạo mới lịch sử đơn hàng.
     */
    public function createOrderHistory(Request $request)
    {
        $validated = $request->validate([
            'order_id' => 'required|exists:orders,id',
            'user_id' => 'required|exists:users,id',
            'status' => 'required|string',
            'description' => 'nullable|string',
        ]);

        try {
            $history = OrderHistory::create($validated);

            return $this->sendResponse(201, 'Lịch sử đơn hàng đã được tạo thành công.', $history);
        } catch (\Throwable $th) {
            return $this->sendResponse(500, $th->getMessage());
        }
    }

    public function getOrderWithHistory($orderId)
{
    $order = Order::with('histories')->find($orderId);

    if (!$order) {
        return $this->sendResponse(404, 'Không tìm thấy đơn hàng.');
    }

    return $this->sendResponse(200, 'Lấy thông tin đơn hàng và lịch sử thành công.', $order);
}


    /**
     * Xoá lịch sử đơn hàng.
     */
    public function deleteOrderHistory($id)
    {
        $history = OrderHistory::find($id);

        if (!$history) {
            return $this->sendResponse(404, 'Không tìm thấy lịch sử đơn hàng.');
        }

        try {
            $history->delete();

            return $this->sendResponse(200, 'Lịch sử đơn hàng đã được xoá thành công.');
        } catch (\Throwable $th) {
            return $this->sendResponse(500, $th->getMessage());
        }
    }
}
