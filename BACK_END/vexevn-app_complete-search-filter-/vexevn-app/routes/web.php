<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MessageController;
Route::get('/', [MessageController::class, 'sms'])->name('message.sms');
Route::post('/message', [MessageController::class, 'store'])->name('message.store');


// Route::resource('permissions', PermissionController::class);
// Route::get('permissions/{permissionId}/delete', [PermissionController::class, 'destroy']);

// Route::resource('roles', RoleController::class);
// Route::get('roles/{roleId}/delete', [RoleController::class, 'destroy']);
// Route::get('roles/{roleId}/give-permissions', [RoleController::class, 'addPermissionToRole']);
// Route::put('roles/{roleId}/give-permissions', [RoleController::class, 'givePermissionToRole']);

// Route::resource('users', UserController::class);

// Route::get('/', function () {
//     return view('welcome');
// });


Route::get('home', [HomeController::class, 'index']);


// LOGIN & SIGN UP WITH GOOGLE
Route::get('/auth/google', [AuthController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/auth/google/callback', [AuthController::class, 'handleGoogleCallback'])->name('auth.google.callback');
// Hiển thị form quên mật khẩu
Route::get('/password/forgot', function () {
    return view('password.forgot');
})->name('password.request');

// Gửi email đặt lại mật khẩu
Route::post('/password/email', [AuthController::class, 'sendResetLink'])->name('password.email');

// Hiển thị form đặt lại mật khẩu
Route::get('/password/reset/{token}', function ($token) {
    return view('password.reset', ['token' => $token]);
})->name('password.reset');

// Xử lý đặt lại mật khẩu
Route::post('/password/reset', [AuthController::class, 'resetPassword'])->name('password.update');

