<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Str;


use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Log;

use App\Models\User;

// use SpeedSMSAPI;
use App\Services\SpeedSMSAPI;


class AuthController extends HelpController
{
    // private $accessToken = "Yc5jyzJNxX5Yat-yTTFrXVrlwOGU5xcA";
    // public $api = new SpeedSMSAPI('Yc5jyzJNxX5Yat-yTTFrXVrlwOGU5xcA');

    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    // public function handleGoogleCallback () {
    //     $googleUser = Socialite::driver('google')->user();
    //     $findUser = User::where('google_id', $googleUser->id)->first();

    //     try {
    //         if (!$findUser) {
    //             $findUser = User::updateOrCreate([
    //                 'email' => $googleUser->email,
    //             ], [
    //                 'name' => $googleUser->name,
    //                 'google_id' => $googleUser->id,
    //                 'password' => encrypt('12345678'),
    //             ]); 

    //             return response()->json([
    //                 'status' => 200,
    //                 'message' => 'Đăng nhập thành công',
    //                 'token' => $findUser->createToken('API TOKEN')->plainTextToken,
    //                 'user' => $findUser, 
    //             ], 200);
    //         }
    //     } catch (\Throwable $th) {
    //         return response()->json([
    //             'status' => 500,
    //             'message' => $th->getMessage(),
    //         ], 500);
    //     }
    // }

    public function handleGoogleCallback()
    {
        return $this->handleDatabaseTransaction(function () {
            try {
                $googleUser = Socialite::driver('google')->user();

                // Kiểm tra dữ liệu từ Google
                if (!$googleUser->email || !$googleUser->id) {
                    return $this->sendResponse(422, 'Dữ liệu từ Google không đầy đủ');
                }

                // Tìm hoặc tạo user
                $user = User::updateOrCreate(
                    ['email' => $googleUser->email],
                    [
                        'name' => $googleUser->name,
                        'google_id' => $googleUser->id,
                        'password' => Hash::make('12345678'),
                    ]
                );

                // Tạo token và trả kết quả
                return $this->sendResponse(200, 'Đăng nhập thành công', [
                    'token' => $user->createToken('API TOKEN')->plainTextToken,
                    'user' => $user,
                ]);
            } catch (\Exception $e) {
                return $this->sendResponse(500, 'Lỗi hệ thống', ['error' => $e->getMessage()]);
            }
        });
    }

    public function sendSMS($phone, $content)
    {
        try {
            $sms = new SpeedSMSAPI('Yc5jyzJNxX5Yat-yTTFrXVrlwOGU5xcA'); // Sử dụng access token 
            $return = $sms->sendSMS([$phone], $content, SpeedSMSAPI::SMS_TYPE_CSKH, "");

            // Kiểm tra kết quả trả về từ API
            if ($return['error'] == 0) {
                return response()->json([
                    'status' => 'success',
                    'message' => 'Gửi SMS thành công!',
                ]);
            } else {
                Log::error('SMS send error:', $return);

                return response()->json([
                    'status' => 'error',
                    'message' => 'Gửi SMS thất bại!',
                    'details' => $return,
                ]);
            }
        } catch (\Exception $e) {
             // Log exception nếu có lỗi xảy ra
        Log::error('Error sending SMS:', ['message' => $e->getMessage()]);
            return response()->json([
                'status' => 'error',
                'message' => 'Error sending SMS: ' . $e->getMessage(),
            ]);
        }
    }

    public function loginOrRegisterSMS(Request $request) {
        $phone = $request->input('phone');
        $user = User::where('phone', $phone)->first();

        // Xét đã có acc chưa
        if ($user) {
            // Send OTP
            $otp = rand(1000, 9999);

            // Nội dung tin nhắn gửi đến người dùng
            $content = "Mã OTP đăng nhập của bạn là: $otp";
            $this->sendSMS('0945583797', $content);

            return response()->json([
                'status' => 'success',
                'otp' => $otp, // Lưu OTP trong DB
                'message' => 'OTP đã được gửi, vui lòng kiểm tra tin nhắn.',
            ]);
            // return redirect()->route('verify.sms.page');
        } 
        // Nếu người dùng chưa có, gửi mã OTP để đăng ký và đăng nhập
        else {
            $otp = rand(1000, 9999); // Mã OTP

            // Gửi SMS với mã OTP
            $content = "Mã OTP đăng ký của bạn là: $otp";
            $this->sendSMS('0945583797', $content);

            // return redirect()->route('verify.sms.page');
        }
    }

    // Phương thức xác nhận OTP và đăng nhập
    public function verifyOTP(Request $request)
    {
        $phone = $request->input('phone');
        $otp = $request->input('otp');
        
        // Kiểm tra số điện thoại và OTP
        $user = User::where('phone', $phone)->first();

        if ($user && $user->otp == $otp) {
            // Đăng nhập người dùng
            Auth::login($user);

            // Xóa OTP sau khi đăng nhập
            $user->update(['otp' => null]);

            return response()->json([
                'status' => 'success',
                'message' => 'Đăng nhập thành công!',
            ]);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'OTP không chính xác.',
        ], 400);
    }
}
