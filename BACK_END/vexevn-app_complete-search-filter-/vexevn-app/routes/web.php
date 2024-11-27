<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;


// Route::resource('permissions', PermissionController::class);
// Route::get('permissions/{permissionId}/delete', [PermissionController::class, 'destroy']);

// Route::resource('roles', RoleController::class);
// Route::get('roles/{roleId}/delete', [RoleController::class, 'destroy']);
// Route::get('roles/{roleId}/give-permissions', [RoleController::class, 'addPermissionToRole']);
// Route::put('roles/{roleId}/give-permissions', [RoleController::class, 'givePermissionToRole']);

// Route::resource('users', UserController::class);

Route::get('/', function () {
    return view('welcome');
});


Route::get('home', [HomeController::class, 'index']);

// LOGIN & SIGN UP WITH GOOGLE
Route::get('/auth/google', [AuthController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/auth/google/callback', [AuthController::class, 'handleGoogleCallback'])->name('auth.google.callback');

