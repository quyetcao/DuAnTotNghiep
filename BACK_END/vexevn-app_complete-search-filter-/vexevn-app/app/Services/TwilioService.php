<?php

namespace App\Services;

use Twilio\Rest\Client;

class TwilioService 
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client(
            config('services.twilio.sid'),    // Lấy SID từ config/services.php
            config('services.twilio.token')  // Lấy Auth Token từ config/services.php
        );
    }

    /**
     * Gửi tin nhắn SMS.
     *
     * @param string $to Số điện thoại nhận (phải bao gồm mã quốc gia, ví dụ: +84123456789).
     * @param string $message Nội dung tin nhắn.
     * @return bool|string
     */
    public function sendSMS($to, $message)
    {
        try {
            $this->client->messages->create($to, [
                'from' => env('TWILIO_PHONE_NUMBER'),
                'body' => $message,
            ]);
            return true;
        } catch (\Exception $e) {
            return $e->getMessage(); // Trả về lỗi nếu có
        }
    }
}
