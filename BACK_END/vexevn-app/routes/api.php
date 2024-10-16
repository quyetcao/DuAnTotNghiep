<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CarController;
use App\Http\Controllers\Api\CarTripController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


/* =====================================================================
                            CAR SYSTEM 
===========================================================================*/
Route::post('/hello', [CarController::class, 'hello']);

// CAR TYPE
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/cartypes/index', [CarController::class, 'listCarType']);
    
    Route::post('/cartypes/create', [CarController::class, 'addCarType']);
    
    Route::post('/cartypes/update/{id}', [CarController::class, 'updateCarType']);

    Route::delete('/cartypes/delete/{id}', [CarController::class, 'deleteCarType']);
});

// CAR HOUSE
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/carhouse/index', [CarController::class, 'listCarHouse']);
    
    Route::post('/carhouse/create', [CarController::class, 'addCarHouse']);

    Route::post('/carhouse/update/{id}', [CarController::class, 'updateCarHouse']);

    Route::delete('/carhouse/delete/{id}', [CarController::class, 'deleteCarHouse']);
});

// CAR
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/car/index', [CarController::class, 'listCar']);

    Route::post('/car/create', [CarController::class, 'uploadCar']);

    Route::post('/car/update/{id}', [CarController::class, 'updateCar']);

    Route::delete('car/delete/{id}', [CarController::class, 'deleteCar']);
});

// CITY
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/city/index', [CarController::class, 'listCity']);
    
    Route::post('/city/create', [CarController::class, 'addCity']);
    
    Route::post('/city/update/{id}', [CarController::class, 'updateCity']);

    Route::delete('/city/delete/{id}', [CarController::class, 'deleteCity']);
});

// PICK UP POINT
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/pickuppoint/index', [CarController::class, 'listPickupPoint']);

    Route::post('/pickuppoint/create', [CarController::class, 'uploadPickupPoint']);

    Route::post('/pickuppoint/update/{id}', [CarController::class, 'updatePickupPoint']);

    Route::delete('/pickuppoint/delete/{id}', [CarController::class, 'deletePickupPoint']);

    // Route::get('')
});

// DROP OFF POINT
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/dropoffpoint/index', [CarController::class, 'listDropoffPoint']);

    Route::post('/dropoffpoint/create', [CarController::class, 'uploadDropoffPoint']);

    Route::post('/dropoffpoint/update/{id}', [CarController::class, 'updateDropoffPoint']);

    Route::delete('/dropoffpoint/delete/{id}', [CarController::class, 'deleteDropoffPoint']);

    // Route::get('')
});

// CAR ROUTE POINT
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/carroute/index', [CarController::class, 'listCarRoute']);

    Route::post('/carroute/create', [CarController::class, 'uploadCarRoute']);

    Route::post('/carroute/update/{id}', [CarController::class, 'updateCarRoute']);

    Route::delete('/carroute/delete/{id}', [CarController::class, 'deleteCarRoute']);
});

// CAR TRIP
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/cartrip/index', [CarTripController::class, 'listCarTrip']);

    Route::post('/cartrip/create', [CarTripController::class, 'uploadCarTrip']);

    Route::post('/cartrip/update/{id}', [CarTripController::class, 'updateCarTrip']);

    Route::delete('/cartrip/delete/{id}', [CarTripController::class, 'deleteCarTrip']);
});
