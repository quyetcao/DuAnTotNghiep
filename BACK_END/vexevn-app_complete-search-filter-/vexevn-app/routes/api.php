<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CarController;
use App\Http\Controllers\Api\CarTripController;
use App\Http\Controllers\Api\ProvinceController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\BannerController;
use App\Http\Controllers\Api\EventController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


/* =====================================================================
                            CAR SYSTEM 
===========================================================================*/

// CAR TYPE
Route::get('/cartypes/{id}', [CarController::class, 'ShowCarType']); 

Route::get('/cartypes', [CarController::class, 'ListCarType']);

Route::post('/cartypes', [CarController::class, 'CreateCarType']);

Route::post('/cartypes/{id}', [CarController::class, 'UpdateCarType']);

Route::delete('/cartypes/{id}', [CarController::class, 'DeleteCarType']);


// CAR HOUSE
Route::get('/carhouse/{id}', [CarController::class, 'ShowCarHouse']); 

Route::get('/carhouse', [CarController::class, 'ListCarHouse']);

Route::post('/carhouse', [CarController::class, 'CreateCarHouse']);

Route::post('/carhouse/{id}', [CarController::class, 'UpdateCarHouse']);

Route::delete('/carhouse/{id}', [CarController::class, 'DeleteCarHouse']);


// CAR

Route::get('/car/{id}', [CarController::class, 'ShowCar']);

Route::get('/car', [CarController::class, 'ListCar']);

Route::post('/car', [CarController::class, 'CreateCar']);

Route::post('/car/{id}', [CarController::class, 'UpdateCar']);

Route::delete('car/{id}', [CarController::class, 'DeleteCar']);


// CITY
// Route::get('/city/{id}', [CarController::class, 'showCity']);

// Route::get('/city', [CarController::class, 'ListCity']);

// Route::post('/city', [CarController::class, 'CreateCity']);

// Route::post('/city/{id}', [CarController::class, 'UpdateCity']);

// Route::delete('/city/{id}', [CarController::class, 'DeleteCity']);


// PICK UP POINT
Route::get('/pickuppoint/{id}', [CarController::class, 'showPickupPoint']);

Route::get('/pickuppoint', [CarController::class, 'listPickupPoint']);

Route::post('/pickuppoint', [CarController::class, 'CreatePickupPoint']);

Route::post('/pickuppoint/{id}', [CarController::class, 'UpdatePickupPoint']);

Route::delete('/pickuppoint/{id}', [CarController::class, 'DeletePickupPoint']);

// Route::get('')


// DROP OFF POINT
Route::get('/dropoffpoint/{id}', [CarController::class, 'showDropoffPoint']);

Route::get('/dropoffpoint', [CarController::class, 'listDropoffPoint']);

Route::post('/dropoffpoint', [CarController::class, 'CreateDropoffPoint']);

Route::post('/dropoffpoint/{id}', [CarController::class, 'updateDropoffPoint']);

Route::delete('/dropoffpoint/{id}', [CarController::class, 'deleteDropoffPoint']);


// PROVINCE
Route::get('/province', [ProvinceController::class, 'getProvinces']);

// CAR ROUTE POINT
Route::get('/carroute/{id}', [CarController::class, 'ShowCarRoute']);

Route::get('/carroute', [CarController::class, 'listCarRoute']);

Route::post('/carroute', [CarController::class, 'CreateCarRoute']);

Route::post('/carroute/{id}', [CarController::class, 'updateCarRoute']);

Route::delete('/carroute/{id}', [CarController::class, 'deleteCarRoute']);


// CAR TRIP
Route::get('/cartrip/search', [SearchController::class, 'searchCarTrip']);

// SEARCH
Route::get('/cartrip/{id}', [CarTripController::class, 'showCarTrip']);

Route::get('/cartrip', [CarTripController::class, 'listCarTrip']);

Route::post('/cartrip', [CarTripController::class, 'CreateCarTrip']);

Route::post('/cartrip/{id}', [CarTripController::class, 'updateCarTrip']);

Route::delete('/cartrip/{id}', [CarTripController::class, 'deleteCarTrip']);





//Banner
Route::get('/banner', [BannerController::class, 'listBanner']);

Route::get('/banner/{id}', [BannerController::class, 'showBanner']);

Route::post('/banner', [BannerController::class, 'CreateBanner']);

Route::post('/banner/{id}', [BannerController::class, 'updateBanner']);

Route::delete('/banner/{id}', [BannerController::class, 'deleteBanner']);

   
// EVENT
Route::get('/event/{id}', [EventController::class, 'showEvent']);

Route::get('/event', [EventController::class, 'listEvent']);

Route::post('/event', [EventController::class, 'CreateEvent']);

Route::post('/event/{id}', [EventController::class, 'updateEvent']);

Route::delete('/event/{id}', [EventController::class, 'deleteEvent']);


// ARTICLE

Route::get('/article/{id}', [EventController::class, 'showArticle']);

Route::get('/article', [EventController::class, 'listArticle']);

Route::post('/article', [EventController::class, 'CreateArticle']);

Route::post('/article/{id}', [EventController::class, 'updateArticle']);

Route::delete('/article/{id}', [EventController::class, 'deleteArticle']);
 
