<?php

return [
    /*
    |--------------------------------------------------------------------------
    | VNPay Configuration
    |--------------------------------------------------------------------------
    |
    | Các thông tin cấu hình cần thiết để kết nối đến VNPay.
    |
    */

    // Mã Terminal ID (TmnCode) do VNPay cung cấp
    'vnp_TmnCode' => env('VNP_TMNCODE', '8NH6ZHUV'),

    // Secret Key dùng để tạo chữ ký (checksum)
    'vnp_HashSecret' => env('VNP_HASHSECRET', 'L5W4XSWQRNAFYAATJCKBNGLF709XYVYT'),

    // URL API của VNPay
    'vnp_Url' => env('VNP_URL', 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html'),

    // URL callback để nhận phản hồi từ VNPay
    'vnp_ReturnUrl' => env('VNP_RETURNURL', 'https://yourdomain.com/api/vnpay-callback'),

    // Loại tiền tệ (thường là VND)
    'vnp_CurrCode' => 'VND',

    // Ngôn ngữ giao diện thanh toán
    'vnp_Locale' => 'vn', // 'vn' hoặc 'en'

    // Mặc định loại thanh toán
    'vnp_OrderType' => 'billpayment', // Các giá trị: billpayment, topup, fashion, v.v.

    // Phiên bản API VNPay
    'vnp_Version' => '2.1.0',
];
