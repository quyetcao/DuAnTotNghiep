<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
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
                        // 'password' => bcrypt(Str::random(16)), ngẫu nhiên
                    ]
                );

                // Tạo token và trả kết quả
                return $this->sendResponse(200, 'Đăng nhập thành công', [
                    'token' => $user->createToken('API TOKEN')->plainTextToken,
                    'user' => $user,
                ]);
            } catch (\Throwable $th) {
                return $this->sendResponse(500, 'Lỗi hệ thống', ['error' => $th->getMessage()]);
            }
        });
    }

   public function sendResetLink(Request $request)
{
    $request->validate(['email' => 'required|email']);

    $status = Password::sendResetLink(
        $request->only('email')
    );

    if ($status === Password::RESET_LINK_SENT) {
        return response()->json([
            'status' => 200,
            'message' => 'Liên kết đặt lại mật khẩu đã được gửi.',
        ]);
    }

    return response()->json([
        'status' => 400,
        'message' => 'Không thể gửi liên kết đặt lại mật khẩu.',
        'error' => __($status),
    ], 400);
}

    // Đặt lại mật khẩu
    public function resetPassword(Request $request)
    {
        // Xác thực dữ liệu nhập
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        // Đặt lại mật khẩu
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password),
                ])->save();
            }
        );

        // Phản hồi theo trạng thái
        return $status === Password::PASSWORD_RESET
            ? $this->sendResponse(200, 'Mật khẩu đã được đặt lại thành công.')
            : $this->sendResponse(400, 'Không thể đặt lại mật khẩu.', ['error' => __($status)]);
    }
    public function signUp(Request $request)
    {
        $rules = [
            'phone' => 'required|unique:users,phone|regex:/^[0-9]{10}$/',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|confirmed'
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {
            $user = User::create([
                'phone' => $request->phone,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);

            $user = User::find($user->id);
            return $this->sendResponse(201, 'Người dùng tạo mới thành công!', $user);
        });
    }
    public function  login(Request $request)
    {
        $rules = [
            'email' => 'required|email',
            'password' => 'required|string'
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {
            if (!Auth::attempt($request->only(['email', 'password']))) {
                return $this->sendResponse(401, 'Email hoặc Password không đúng');
            }

            $user = User::where('email', $request->email)->first();
           
           $token = $user->createToken('API TOKEN')->plainTextToken;
            //[*] giới hạn các quyền truy cập
            //$token = $user->createToken('API TOKEN', ['*'])->plainTextToken;

            return $this->sendResponse(200, 'Đăng nhập thành công!', [
                'token' => $token,
                'user' => $user
            ]);
        });
    }
    public function profile(Request $request)
    {
        $user = Auth::user();
        if (!$user) {
            return $this->sendResponse(401, 'Token đã hết hạn hoặc không hợp lệ');
        }
    
        // Nếu có yêu cầu cập nhật
        if ($request->has('name') || $request->has('password')) {
            // Xác thực đầu vào 
            $data = $request->only('name', 'password');
    
            // Nếu có thay đổi, băm mật khẩu mới
            if (isset($data['password'])) {
                $data['password'] = Hash::make($data['password']);
            }
    
            $user->update($data);
            return $this->sendResponse(200, 'Thông tin tài khoản đã được cập nhật thành công', $user);
        }
    
        // Nếu không có dữ liệu cập nhật, trả về thông tin tài khoản
        return $this->sendResponse(200, 'Thông tin tài khoản', $user);
    }
    public function refreshToken(Request $request)
    {
        // Lấy lại user từ token cũ
        $user = Auth::user();

        // Xóa các token cũ
        $user->token->each(function ($token) {
            $token->delete();
        });

        // Tạo token mới
        $newToken = $user->createToken('API TOKEN')->plainTextToken;

        return $this->sendResponse(200, 'Token mới được cấp', [
            'token' => $newToken,
            'user' => $user
        ]);
    }
    public function showAllUsers(Request $request)
    {
        // if (!$request->user() || $request->user()->role !== 'admin') {
        //     return $this->sendResponse(403, 'Bạn không có quyền truy cập vào danh sách người dùng');
        // }
        $users = User::all();
        return $this->sendResponse(200, 'Danh sách tất cả người dùng', $users);
    }
    public function updateRole(Request $request, $id)
    {
        if ($request->user()->role !== 'admin') {
            return $this->sendResponse(403, 'Chỉ admin mới có quyền thay đổi role của người dùng khác.');
        }
        $user = User::findOrFail($id);  // findOrFail sẽ trả về lỗi 404 
        // Xác thực role mới được gửi trong request
        $roles = ['admin', 'user', 'carhouse'];  
        $newRole = $request->input('role');
        // Kiểm tra xem role 
        if (!in_array($newRole, $roles)) {
            return $this->sendResponse(422, 'Role không hợp lệ.');
        }
        $user->role = $newRole;
        $user->save();
        return $this->sendResponse(200, 'Cập nhật role người dùng thành công!', $user);
    }
    public function deleteUser(Request $request, $id)
    {
        $user = User::findOrFail($id);  // findOrFail nếu không tìm thấy sẽ trả lỗi 404
        $user->delete();
        return $this->sendResponse(200, 'Xóa tài khoản thành công!');
    }
    public function logout()
    {
        auth()->user()->tokens()->delete();
        return $this->sendResponse(200, 'Đăng xuất thành công!');
    }
}
