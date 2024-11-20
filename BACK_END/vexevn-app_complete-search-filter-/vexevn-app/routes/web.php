<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\HomeController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('home', [HomeController::class, 'index']);

// LOGIN & SIGN UP WITH GOOGLE
Route::get('/auth/google', [AuthController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/auth/google/callback', [AuthController::class, 'handleGoogleCallback'])->name('auth.google.callback');

// LOGIN & SIGN UP WITH PHONE
// Route::post('/send-sms', [AuthController::class, 'sendSMS']);
Route::post('/login-register', [AuthController::class, 'loginOrRegisterSMS']);
Route::get('/verify-page', [HomeController::class, 'verifyPage'])->name('verify.sms.page');;
Route::post('/verify-otp', [AuthController::class, 'verifyOTP']);