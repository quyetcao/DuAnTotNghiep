<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Str;


use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Log;

use App\Models\User;



class AuthController extends HelpController
{
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

    // Sign up
    public function signUp(Request $request)
    {
        $rules = [
            'phone' => 'required|regex:/^[0-9]{10}$/',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|confirmed'
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {
            $user = User::create([
                'phone' => $request->phone,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);

            if (!$user) {
                return $this->sendResponse(500, 'Không thể tạo người dùng');
            }

            return $this->sendResponse(201, 'Người dùng tạo mới thành công!', $user);
        });
    }

    public function login (Request $request) {
        try {
            $validateUser = Validator::make($request->all(), [        
                'email' => 'required|email',
                'password' => 'required|string'
            ]);

            if ($validateUser->fails()) {
                return response()->json([
                    'status' => 422,
                    'message' => 'Lỗi xác thực!',
                    'errors' => $validateUser->errors(),
                ], 422);
            }

            if (!Auth::attempt($request->only(['email','password']))) {
                return response()->json([
                    'status' => 401,
                    'message' => 'Email hoặc Password không đúng',
                ], 401);
            }

            $user = User::where('email', $request->email)->first();
            return response()->json([
                'status' => 200,
                'message' => 'Đăng nhập thành công!',
                'token' => $user->createToken('API TOKEN')->plainTextToken
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function profile () {
        $user = Auth::user();
        return response()->json([
            'status' => 200,
            'message' => 'Thông tin tài khoản',
            'data' => $user
        ], 200);
    }

    public function logout() {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Đăng xuất thành công',
            'data' => []
        ], 200);
    }
}
