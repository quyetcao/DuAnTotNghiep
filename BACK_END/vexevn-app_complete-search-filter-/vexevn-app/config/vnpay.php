<?php

return [

    'vnp_TmnCode' => env('VNP_TMNCODE', '8NH6ZHUV'),

    'vnp_HashSecret' => env('VNP_HASHSECRET', 'L5W4XSWQRNAFYAATJCKBNGLF709XYVYT'),

    'vnp_Url' => env('VNP_URL', 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html'),

    'vnp_ReturnUrl' => env('VNP_RETURNURL', 'http://127.0.0.1:8000/api/vnpay-callback'),

    'vnp_CurrCode' => 'VND',

    'vnp_Locale' => 'vn', 

    'vnp_OrderType' => 'billpayment',

    'vnp_Version' => '2.1.0',

    'frontend_return_url' => env('FRONTEND_RETURN_URL', 'http://localhost:5173/thanhtoanok/'),
];
