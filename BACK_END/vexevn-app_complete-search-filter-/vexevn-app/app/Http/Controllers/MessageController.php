<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Rest\Client;
use Exception;

class MessageController extends Controller
{
    public function sms()
    {
        // Hiển thị form gửi tin nhắn
        return view('message');
    }

    public function store(Request $request)
    {
        // Validate dữ liệu từ form
        $request->validate([
            'phone' => 'required|regex:/^\+?[1-9]\d{1,14}$/', // Số điện thoại định dạng quốc tế E.164
            'message' => 'required|string|max:160',          // Giới hạn độ dài tin nhắn
        ]);

        // Lấy dữ liệu từ form
        $to = $request->phone;      // Số nhận
        $messageBody = $request->message; // Nội dung tin nhắn

        // Thông tin Twilio
        $sid    = env('TWILIO_SID');
        $token  = env('TWILIO_AUTH_TOKEN');
        $from   = env('TWILIO_PHONE_NUMBER');
        try {
            // Gửi tin nhắn qua Twilio
            $twilio = new Client($sid, $token);
            $message = $twilio->messages->create(
                $to, // Số nhận
                [
                    'from' => $from,       // Số gửi (Twilio)
                    'body' => $messageBody // Nội dung tin nhắn
                ]
            );

            // Trả về thông báo thành công
            return back()->with('success', 'Message sent successfully! SID: ' . $message->sid);
        } catch (Exception $e) {
            // Trả về thông báo lỗi
            return back()->with('error', 'Error sending message: ' . $e->getMessage());
        }
    }
}
