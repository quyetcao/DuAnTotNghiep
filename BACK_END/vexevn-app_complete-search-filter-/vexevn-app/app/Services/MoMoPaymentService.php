<?php
namespace App\Services;

use Illuminate\Support\Facades\Http;

class MoMoPaymentService
{
    // Phương thức tạo yêu cầu thanh toán
    public function purchase(array $parameters)
    {
        $endpoint = config('services.momo.test_mode')
            ? 'https://test-payment.momo.vn/v2/gateway/api/create'
            : 'https://payment.momo.vn/v2/gateway/api/create';

        $partnerCode = config('services.momo.partner_code');
        $accessKey = config('services.momo.access_key');
        $secretKey = config('services.momo.secret_key');
        $returnUrl = config('services.momo.return_url');
        $notifyUrl = config('services.momo.notify_url');

        $orderId = $parameters['orderId'];
        $requestId = $parameters['requestId'];
        $amount = $parameters['amount'];
        $orderInfo = "Thanh toán đơn hàng";
        $extraData = "";

        // Tạo signature
        $rawHash = "accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$notifyUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$returnUrl&requestId=$requestId&requestType=captureWallet";
        $signature = hash_hmac('sha256', $rawHash, $secretKey);

        $body = [
            'partnerCode' => $partnerCode,
            'accessKey' => $accessKey,
            'requestId' => $requestId,
            'amount' => $amount,
            'orderId' => $orderId,
            'orderInfo' => $orderInfo,
            'redirectUrl' => $returnUrl,
            'ipnUrl' => $notifyUrl,
            'extraData' => $extraData,
            'requestType' => 'captureWallet',
            'signature' => $signature,
        ];

        // Gửi yêu cầu HTTP POST tới MoMo API
        $response = Http::post($endpoint, $body);

        return $response->json();
    }

    // Phương thức xử lý callback từ MoMo
    public function completePayment(array $parameters)
    {
        $partnerCode = $parameters['partnerCode'] ?? '';
        $orderId = $parameters['orderId'] ?? '';
        $requestId = $parameters['requestId'] ?? '';
        $amount = $parameters['amount'] ?? '';
        $orderInfo = $parameters['orderInfo'] ?? '';
        $transId = $parameters['transId'] ?? '';
        $resultCode = $parameters['resultCode'] ?? '';
        $message = $parameters['message'] ?? '';
        $responseTime = $parameters['responseTime'] ?? '';
        $extraData = $parameters['extraData'] ?? '';
        $signature = $parameters['signature'] ?? '';

        // Tạo rawHash để kiểm tra chữ ký
        $rawHash = "accessKey=" . config('services.momo.access_key') .
            "&amount=$amount&extraData=$extraData&message=$message&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&responseTime=$responseTime&resultCode=$resultCode&transId=$transId";

        $generatedSignature = hash_hmac('sha256', $rawHash, config('services.momo.secret_key'));

        if ($signature !== $generatedSignature) {
            return [
                'status' => 'failed',
                'message' => 'Invalid signature',
            ];
        }

        if ($resultCode == 0) {
            return [
                'status' => 'success',
                'transaction_id' => $transId,
            ];
        }

        return [
            'status' => 'failed',
            'message' => $message,
        ];
    }
}

