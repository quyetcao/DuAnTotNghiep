<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Twilio\Rest\Client;
use Illuminate\Support\Facades\Cache; // Dùng Cache để lưu OTP tạm thời

class OTPController extends Controller
{
    public function sendOTP(Request $request)
    {
        // Validate số điện thoại
        $request->validate([
            'phone' => 'required|regex:/^\+?[1-9]\d{1,14}$/', // Định dạng quốc tế E.164
        ]);

        $to = $request->phone;

        // Tạo mã OTP ngẫu nhiên (6 chữ số)
        $otp = rand(100000, 999999);


        // Lưu OTP vào Cache (thời gian sống 5 phút)
        Cache::put('otp_' . $to, $otp, now()->addMinutes(5));
        // dd($to, $otp, Cache::get('otp_' . $to));
        


        // Twilio credentials
        $sid    = env('TWILIO_SID');
        $token  = env('TWILIO_AUTH_TOKEN');
        $from   = env('TWILIO_PHONE_NUMBER');               

        try {
            // Gửi OTP qua Twilio
            $twilio = new Client($sid, $token);
            $message = $twilio->messages->create(
                $to, // Số nhận
                [
                    'from' => $from,
                    'body' => "Your OTP code is: $otp. It will expire in 5 minutes."
                ]
            );

            return response()->json([
                'status' => 'success',
                'message' => 'OTP sent successfully!',
                'sid' => $message->sid
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to send OTP.',
                'error' => $e->getMessage(),
                Log::info('Saving OTP', ['phone' => $to, 'otp' => $otp]),
            ], 500);
        }
    }

    public function verifyOtp(Request $request)
{
    $request->validate([
        'phone' => 'required|string',
        'otp' => 'required|string',
    ]);

    $phone = $request->input('phone');
    $otp = $request->input('otp');

    // Kiểm tra OTP trong cache
    $cachedOtp = Cache::get('otp_' . $phone);
    // dd($otp, $cachedOtp);

    if (!$cachedOtp) {
        \Log::error('OTP not found or expired.', ['phone' => $phone, 'entered_otp' => $otp]);
        return response()->json([
            'status' => 'error',
            'message' => 'OTP has expired or is invalid.',
        ], 400);
    }
    
    if ($cachedOtp !== $otp) {
        \Log::error('OTP mismatch.', ['cached_otp' => $cachedOtp, 'entered_otp' => $otp]);
        return response()->json([
            'status' => 'error',
            'message' => 'Invalid OTP.',
        ], 400);
    }
    

    // OTP hợp lệ
    return response()->json([
        'status' => 'success',
        'message' => 'OTP verified successfully!',
    ]);
}

}
