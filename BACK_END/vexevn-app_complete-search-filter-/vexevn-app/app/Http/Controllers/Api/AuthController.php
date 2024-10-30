<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Laravel\Socialite\Facades\Socialite;

use App\Models\User;

class AuthController extends Controller
{
    public function redirectToGoogle () {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback () {
        $googleUser = Socialite::driver('google')->user();
        $findUser = User::where('google_id', $googleUser->id)->first();

        try {
            if (!$findUser) {
                $findUser = User::updateOrCreate([
                    'email' => $googleUser->email,
                ], [
                    'name' => $googleUser->name,
                    'google_id' => $googleUser->id,
                    'password' => encrypt('12345678'),
                ]); 
    
                return response()->json([
                    'status' => 200,
                    'message' => 'Đăng nhập thành công',
                    'token' => $findUser->createToken('API TOKEN')->plainTextToken,
                    'user' => $findUser, 
                ], 200);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

}
