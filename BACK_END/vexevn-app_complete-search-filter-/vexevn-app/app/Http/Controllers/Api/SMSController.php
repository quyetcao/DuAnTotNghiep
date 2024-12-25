<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\TwilioService;
class SMSController extends Controller
{
    protected $twilio;

    public function __construct(TwilioService $twilio)
    {
        $this->twilio = $twilio;
    }

    /**
     * API gửi tin nhắn xác thực.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendSMS(Request $request)
    {
        $request->validate([
            'phone' => 'required|regex:/^\+?[1-9]\d{1,14}$/', // Số điện thoại hợp lệ
            'message' => 'required|string|max:160', // Nội dung tin nhắn
        ]);

        $result = $this->twilio->sendSMS($request->phone, $request->message);

        if ($result === true) {
            return response()->json([
                'status' => 'success',
                'message' => 'Tin nhắn đã được gửi thành công!',
            ]);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'Không thể gửi tin nhắn.',
            'error' => $result,
        ]);
    }
}
