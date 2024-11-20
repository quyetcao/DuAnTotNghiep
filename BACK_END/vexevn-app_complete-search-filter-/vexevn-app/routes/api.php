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
use App\Http\Controllers\Api\SeatController;
use App\Http\Controllers\Api\TicketController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\EmployeeController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/auth/signup', [AuthController::class, 'signUp']);
Route::post('/auth/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::get('/auth/profile', [AuthController::class, 'profile']);

    Route::get('/auth/logout', [AuthController::class, 'logout']);
});

/* =====================================================================
                            CAR SYSTEM 
===========================================================================*/

// CAR TYPE
Route::get('/cartypes/{id}', [CarController::class, 'showCarType']);
Route::get('/cartypes', [CarController::class, 'listCarType']);

//Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/cartypes/create', [CarController::class, 'createCarType']);
    Route::post('/cartypes/update/{id}', [CarController::class, 'updateCarType']);
    Route::delete('/cartypes/delete/{id}', [CarController::class, 'deleteCarType']);
//});



// CAR HOUSE
Route::get('/carhouse/{id}', [CarController::class, 'showCarHouse']);
Route::get('/carhouse', [CarController::class, 'listCarHouse']);

//Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/carhouse/create', [CarController::class, 'createCarHouse']);
    Route::post('/carhouse/update/{id}', [CarController::class, 'updateCarHouse']);
    Route::delete('/carhouse/delete/{id}', [CarController::class, 'deleteCarHouse']);
//});


// CAR

Route::get('/car/{id}', [CarController::class, 'showCar']);
Route::get('/car', [CarController::class, 'listCar']);

//Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/car/create', [CarController::class, 'createCar']);
    Route::post('/car/update/{id}', [CarController::class, 'updateCar']);
    Route::delete('car/delete/{id}', [CarController::class, 'deleteCar']);
//});



// CITY
// Route::get('/city/{id}', [CarController::class, 'showCity']);
// Route::get('/city', [CarController::class, 'listCity']);

// Route::post('/city/create', [CarController::class, 'addCity']);

// Route::post('/city/update/{id}', [CarController::class, 'updateCity']);

// Route::delete('/city/delete/{id}', [CarController::class, 'deleteCity']);


// PICK UP POINT

Route::get('/pickuppoint/{id}', [CarController::class, 'showPickupPoint']);

Route::get('/pickuppoint', [CarController::class, 'listPickupPoint']);

//Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/pickuppoint/create', [CarController::class, 'createPickupPoint']);
    Route::post('/pickuppoint/update/{id}', [CarController::class, 'updatePickupPoint']);
    Route::delete('/pickuppoint/delete/{id}', [CarController::class, 'deletePickupPoint']);
//});


// Route::get('')


// DROP OFF POINT

Route::get('/dropoffpoint/{id}', [CarController::class, 'showDropoffPoint']);
Route::get('/dropoffpoint', [CarController::class, 'listDropoffPoint']);

//Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/dropoffpoint/create', [CarController::class, 'createDropoffPoint']);
    Route::post('/dropoffpoint/update/{id}', [CarController::class, 'updateDropoffPoint']);
    Route::delete('/dropoffpoint/delete/{id}', [CarController::class, 'deleteDropoffPoint']);
//});

// Route::get('')

// PROVINCE
Route::get('/province', [ProvinceController::class, 'listProvince']);

// CAR ROUTE POINT

Route::get('/carroute/{id}', [CarController::class, 'showCarRoute']);
Route::get('/carroute', [CarController::class, 'listCarRoute']);

//Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/carroute/create', [CarController::class, 'createCarRoute']);
    Route::post('/carroute/update/{id}', [CarController::class, 'updateCarRoute']);
    Route::delete('/carroute/delete/{id}', [CarController::class, 'deleteCarRoute']);
//});

// CAR TRIP

Route::get('/cartrip/search', [SearchController::class, 'searchCarTrip']);
Route::get('/cartrip/{id}', [CarTripController::class, 'showCarTrip']);
Route::get('/cartrip', [CarTripController::class, 'listCarTrip']);

//Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/cartrip/create', [CarTripController::class, 'createCarTrip']);
    Route::post('/cartrip/update/{id}', [CarTripController::class, 'updateCarTrip']);
    Route::delete('/cartrip/delete/{id}', [CarTripController::class, 'deleteCarTrip']);
//});





//Banner

Route::get('/banner/{id}', [BannerController::class, 'showBanner']);
Route::get('/banner', [BannerController::class, 'listBanner']);

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/banner/create', [BannerController::class, 'createBanner']);
    Route::post('/banner/update/{id}', [BannerController::class, 'updateBanner']);
    Route::delete('/banner/delete/{id}', [BannerController::class, 'deleteBanner']);
});

// EVENT

Route::get('/event/{id}', [EventController::class, 'showEvent']);
Route::get('/event', [EventController::class, 'listEvent']);

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/event/create', [EventController::class, 'createEvent']);
    Route::post('/event/update/{id}', [EventController::class, 'updateEvent']);
    Route::delete('/event/delete/{id}', [EventController::class, 'deleteEvent']);
});

// ARTICLE

Route::get('/article/{id}', [EventController::class, 'showArticle']);
Route::get('/article', [EventController::class, 'listArticle']);

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/article/create', [EventController::class, 'createArticle']);
    Route::post('/article/update/{id}', [EventController::class, 'updateArticle']);
    Route::delete('/article/delete/{id}', [EventController::class, 'deleteArticle']);
});

//Ticket

Route::get('/ticket/{id}', [TicketController::class, 'showTicket']);
Route::get('/ticket', [TicketController::class, 'listTicket']);

// Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/ticket', [TicketController::class, 'createTicket']);
    Route::post('/ticket/{id}', [TicketController::class, 'updateTicket']);
    Route::delete('/ticket/{id}', [TicketController::class, 'deleteTicket']);
// });


//Seat

Route::get('/seat/{id}', [SeatController::class, 'showSeat']);
Route::get('/seat', [SeatController::class, 'listSeat']);

// Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/seat', [SeatController::class, 'createSeat']);
    Route::post('/seat/{id}', [SeatController::class, 'updateSeat']);
    Route::delete('/seat/{id}', [SeatController::class, 'deleteSeat']);
// });

//Comment
Route::get('/comment/{id}', [CommentController::class, 'show']); 
Route::get('/comment', [CommentController::class, 'index']); 
Route::post('/comment', [CommentController::class, 'store']); 
Route::post('/comment/{id}', [CommentController::class, 'update']); 
Route::delete('/comment/{id}', [CommentController::class, 'destroy']); 




// EMPLOYEE
Route::get('/employee/{id}', [EmployeeController::class, 'showEmployee']);
Route::get('/employee', [EmployeeController::class, 'listEmployee']);

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/employee/create', [EmployeeController::class, 'createEmployee']);
    Route::post('/employee/update/{id}', [EmployeeController::class, 'updateEmployee']);
    Route::delete('/employee/delete/{id}', [EmployeeController::class, 'deleteEmployee']);
});