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
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\OrderHistoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\DiscountCodeController;
use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\CarTripStatusController;
use App\Http\Controllers\Api\SeatCarTripController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/auth/signup', [AuthController::class, 'signUp']);
Route::post('/auth/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/auth/profile', [AuthController::class, 'profile']);
    Route::get('/auth/logout', [AuthController::class, 'logout']);
});

Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::get('/auth/all-users', [AuthController::class, 'showAllUsers']);
    Route::put('/auth/update-role/{id}', [AuthController::class, 'updateRole']);
    Route::delete('/auth/delete/{id}', [AuthController::class, 'deleteUser']);
});
/* =====================================================================
                            CAR SYSTEM 
===========================================================================*/

// CAR TYPE
Route::get('/cartypes/nopt/', [CarController::class, 'listCarTypenopt']);
Route::get('/cartypes/{id}', [CarController::class, 'showCarType']);
Route::get('/cartypes', [CarController::class, 'listCarType']);


// Route::middleware(['auth:sanctum', 'role:admin,carhouse'])->group(function () {
    Route::post('/cartypes/create', [CarController::class, 'createCarType']);
    Route::post('/cartypes/update/{id}', [CarController::class, 'updateCarType']);
    Route::delete('/cartypes/delete/{id}', [CarController::class, 'deleteCarType']);
// });



// CAR HOUSE
Route::get('/carhouse/{id}', [CarController::class, 'showCarHouse']);
Route::get('/carhouse', [CarController::class, 'listCarHouse']);

// Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
Route::post('/carhouse/create', [CarController::class, 'createCarHouse']);
Route::post('/carhouse/update/{id}', [CarController::class, 'updateCarHouse']);
Route::delete('/carhouse/delete/{id}', [CarController::class, 'deleteCarHouse']);
// });


// CAR

Route::get('/car/{id}', [CarController::class, 'showCar']);
Route::get('/car', [CarController::class, 'listCar']);
Route::get('/car/car_house_id/{car_house_id}', [CarController::class, 'showCarByCarHouseId']);

// Route::middleware(['auth:sanctum', 'role:admin,carhouse'])->group(function () {
Route::post('/car/create', [CarController::class, 'createCar']);
Route::post('/car/update/{id}', [CarController::class, 'updateCar']);
Route::delete('car/delete/{id}', [CarController::class, 'deleteCar']);
// });

// PICK UP POINT
Route::get('/pickuppoint/{id}', [CarController::class, 'showPickupPointById']);
Route::get('/pickuppoint/car_trip/{car_trip_id}', [CarController::class, 'getPickupPointByCarTrip']);
Route::get('/pickuppoint/car_house/{car_house_id}', [CarController::class, 'getPickupPointByCarHouse']);
Route::get('/pickuppoints', [CarController::class, 'getAllPickupPoints']); // Plural for all



// Route::middleware(['auth:sanctum', 'admin,carhouse'])->group(function () {
Route::post('/pickuppoint/create', [CarController::class, 'createPickupPoint']);
Route::post('/pickuppoint/update/{id}', [CarController::class, 'updatePickupPoint']);
Route::delete('/pickuppoint/delete/{id}', [CarController::class, 'deletePickupPoint']);
// });


// Route::get('')


// DROP OFF POINT
Route::get('/dropoffpoint/{id}', [CarController::class, 'showDropoffPointById']);
Route::get('/dropoffpoint/car_trip/{car_trip_id}', [CarController::class, 'showDropoffPointByCarTrip']);
Route::get('/dropoffpoint/car_house/{car_house_id}', [CarController::class, 'getDropoffpointByCarHouse']);
Route::get('/dropoffpoint', [CarController::class, 'listDropoffPoint']);

// Route::middleware(['auth:sanctum', 'admin,carhouse'])->group(function () {
Route::post('/dropoffpoint/create', [CarController::class, 'createDropoffPoint']);
Route::post('/dropoffpoint/update/{id}', [CarController::class, 'updateDropoffPoint']);
Route::delete('/dropoffpoint/delete/{id}', [CarController::class, 'deleteDropoffPoint']);
// });

// Route::get('')

// PROVINCE
Route::get('/province', [ProvinceController::class, 'listProvince']);

// CAR ROUTE POINT

Route::get('/carroute/{id}', [CarController::class, 'showCarRoute']);
Route::get('/carroute', [CarController::class, 'listCarRoute']);

// Route::middleware(['auth:sanctum', 'admin,carhouse'])->group(function () {
Route::post('/carroute/create', [CarController::class, 'createCarRoute']);
Route::post('/carroute/update/{id}', [CarController::class, 'updateCarRoute']);
Route::delete('/carroute/delete/{id}', [CarController::class, 'deleteCarRoute']);
// });

// CAR TRIP
// Route::middleware(['auth:sanctum', 'role:admin,carhouse,user'])->group(function () {
//     Route::get('/cartrip/search-by-date-and-route', [SearchController::class, 'searchCarTripByCarHouse']);
//     Route::get('/cartrip/update-statuses', [CarTripStatusController::class, 'updateStatuses']);
//     Route::post('/cartrip/create', [CarTripController::class, 'createCarTrip']);
//     Route::post('/cartrip/update/{id}', [CarTripController::class, 'updateCarTrip']);
//     Route::delete('/cartrip/delete/{id}', [CarTripController::class, 'deleteCarTrip']);
//     Route::get('/cartrip/by-carhouse/{carHouseId}', [CarTripController::class, 'getTripsByCarHouse']);
// });
// Route::get('/cartrip/search', [SearchController::class, 'searchCarTrip']);
// Route::get('/cartrip/{id}', [CarTripController::class, 'showCarTrip']);
// Route::get('/cartrip', [CarTripController::class, 'listCarTrip']);

Route::middleware(['auth:sanctum', 'role:admin,carhouse,user'])->prefix('cartrip')->group(function () {
    Route::get('/', [CarTripController::class, 'index']); // Hiển thị danh sách chuyến xe
    Route::get('/{id}', [CarTripController::class, 'show']); // Chi tiết chuyến xe
    Route::post('/', [CarTripController::class, 'store']); // Tạo mới chuyến xe
    Route::put('/{id}', [CarTripController::class, 'update']); // Cập nhật chuyến xe
    Route::delete('/{id}', [CarTripController::class, 'destroy']); // Xóa chuyến xe
    Route::get('/carhouse/{carHouseId}', [CarTripController::class, 'getByCarHouse']); // Lấy chuyến xe theo nhà xe
    Route::post('/update-statuses', [CarTripStatusController::class, 'updateStatuses']); // Cập nhật trạng thái chuyến xe
});

// KHÔNG CẦN LOGIN
Route::prefix('cartrip')->group(function () {
    Route::get('/search', [SearchController::class, 'search']); // Tìm kiếm chuyến xe (public)
    Route::get('/not-started', [CarTripController::class, 'listCarTripNotStarted']); 
});







//Banner

Route::get('/banner/{id}', [BannerController::class, 'showBanner']);
Route::get('/banner', [BannerController::class, 'listBanner']);

// Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::post('/banner/create', [BannerController::class, 'createBanner']);
    Route::post('/banner/update/{id}', [BannerController::class, 'updateBanner']);
    Route::delete('/banner/delete/{id}', [BannerController::class, 'deleteBanner']);
// });

// EVENT

Route::get('/event/{id}', [EventController::class, 'showEvent']);
Route::get('/event', [EventController::class, 'listEvent']);

// Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::post('/event/create', [EventController::class, 'createEvent']);
    Route::post('/event/update/{id}', [EventController::class, 'updateEvent']);
    Route::delete('/event/delete/{id}', [EventController::class, 'deleteEvent']);
// });

// ARTICLE

Route::get('/article/{id}', [EventController::class, 'showArticle']);
Route::get('/article', [EventController::class, 'listArticle']);

// Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::post('/article/create', [EventController::class, 'createArticle']);
    Route::post('/article/update/{id}', [EventController::class, 'updateArticle']);
    Route::delete('/article/delete/{id}', [EventController::class, 'deleteArticle']);
// });

//Ticket

Route::get('/ticket/{id}', [TicketController::class, 'showTicket']);
Route::get('/ticket', [TicketController::class, 'listTicket']);

// Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
Route::post('/ticket', [TicketController::class, 'createTicket']);
Route::post('/ticket/{id}', [TicketController::class, 'updateTicket']);
Route::delete('/ticket/{id}', [TicketController::class, 'deleteTicket']);
// });


//Seat

Route::get('/seat/{car_id}', [SeatController::class, 'showSeatbycarid']);
Route::get('/seat', [SeatController::class, 'listSeat']);

// Route::middleware(['auth:sanctum', 'admin'])->group(function () {
Route::post('/seat', [SeatController::class, 'createSeat']);
Route::post('/seat/{id}', [SeatController::class, 'updateSeat']);
Route::delete('/seat/{id}', [SeatController::class, 'deleteSeat']);
// });

//SeatCarTripCarTrip
Route::get('/seat-car-trip/car-trip-id/{car_trip_id}', [SeatCarTripController::class, 'showSeatCarTripByCarTripId']);
Route::get('/seat-car-trip/{car_id}', [SeatCarTripController::class, 'showSeatbycarid']);
Route::get('/seat-car-trip', [SeatCarTripController::class, 'showSeatCarTrip']);

// Route::middleware(['auth:sanctum', 'admin'])->group(function () {
Route::post('/seat-car-trip', [SeatCarTripController::class, 'createSeatCarTrip']);
Route::post('/seat-car-trip/{id}', [SeatCarTripController::class, 'updateSeatCarTrip']);
Route::delete('/seat-car-trip/{id}', [SeatCarTripController::class, 'deleteSeatCarTrip']);
// });

//Comment
// Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/comment/{id}', [CommentController::class, 'show']);
    Route::get('/comment', [CommentController::class, 'index']);
// });
// Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/comments/car-trips/{carTripId}', [CommentController::class, 'commentsByTrip']);
    Route::post('/comment', [CommentController::class, 'store']);
    Route::post('/comment/{id}', [CommentController::class, 'update']);
    Route::delete('/comment/{id}', [CommentController::class, 'destroy']);
// });

// EMPLOYEE
Route::get('/employee/{id}', [EmployeeController::class, 'showEmployee']);
Route::get('/employee', [EmployeeController::class, 'listEmployee']);
Route::get('/douse_id/{car_house_id}', [EmployeeController::class, 'getEmployeeByCarHouse']);

// Route::middleware(['auth:sanctum', 'admin'])->group(function () {
Route::post('/employee/create', [EmployeeController::class, 'createEmployee']);
Route::post('/employee/update/{id}', [EmployeeController::class, 'updateEmployee']);
Route::delete('/employee/delete/{id}', [EmployeeController::class, 'deleteEmployee']);
// });

//ORDER

Route::get('/orders/{id}', [OrderController::class, 'showOrder']);
Route::get('/orders', [OrderController::class, 'listOrders']);


//Route::middleware(['auth:sanctum', 'admin'])->group(function () {
Route::post('/orders/create', [OrderController::class, 'createOrder']);
Route::post('/orders/update/{id}', [OrderController::class, 'updateOrder']);
Route::delete('/orders/{orderId}/cancel', [OrderController::class, 'cancelOrder']);
Route::get('/orders/user/{userId}', [OrderController::class, 'getOrdersByUserId']);
//});

//ORDER HISTORY
Route::get('/orderhistories', [OrderHistoryController::class, 'getAllOrderHistories']);
Route::post('/order-histories', [OrderHistoryController::class, 'createOrderHistory']);
Route::get('/order-histories/{orderId}', [OrderHistoryController::class, 'getOrderHistory']);
Route::get('/orders/{orderId}/with-history', [OrderHistoryController::class, 'getOrderWithHistory']);

//PAYMENT
Route::post('/payment/create', [PaymentController::class, 'createPayment']);
Route::post('/payment/complete-momo', [PaymentController::class, 'completeMoMoPayment']);
Route::get('/payment/{id}', [PaymentController::class, 'showPayment']);
Route::get('/payment/user/{userId}', [PaymentController::class, 'userPayments']);
Route::get('/payment', [PaymentController::class, 'listPayments']);
Route::delete('/payment/delete/{id}', [PaymentController::class, 'deletePayment']);

//User
Route::get('/user/{id}', [UserController::class, 'listUser']);
Route::get('/user', [UserController::class, 'listUser']);

// Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::post('/user/update/{id}', [UserController::class, 'updateUserByAdmin']);
    Route::delete('/user/delete/{id}', [UserController::class, 'deleteUser']);
// });

//DISCOUNTCODE
Route::post('/discount-codes', [DiscountCodeController::class, 'createDiscountCode']);
Route::get('/discount-codes', [DiscountCodeController::class, 'listDiscountCodes']);
Route::get('/discount-codes/{id}', [DiscountCodeController::class, 'showDiscountCode']);
Route::post('/discount-codes/{id}', [DiscountCodeController::class, 'updateDiscountCode']);
Route::delete('/discount-codes/{id}', [DiscountCodeController::class, 'deleteDiscountCode']);
Route::post('/apply-discount-codes', [DiscountCodeController::class, 'applyDiscountCode']);

//City
Route::get('/cities/{id}', [CityController::class, 'showId']); 
Route::get('/cities', [CityController::class, 'show']); 
Route::post('/cities', [CityController::class, 'create']); 
Route::post('/cities/{id}', [CityController::class, 'update']); 
Route::delete('/cities/{id}', [CityController::class, 'delete']); 
