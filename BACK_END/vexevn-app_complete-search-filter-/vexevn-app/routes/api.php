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
use App\Http\Controllers\Api\CarTypeController;
use App\Http\Controllers\Api\OTPController;
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Gửi OTP
Route::post('/send-otp', [OTPController::class, 'sendOTP']);

// Xác minh OTP
Route::post('/verify-otp', [OTPController::class, 'verifyOtp'])->name('verify-otp');

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
                            USER 
===========================================================================*/
Route::get('/user/{id}', [UserController::class, 'listUser']);
Route::get('/user', [UserController::class, 'listUser']);

// Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::post('/user/update/{id}', [UserController::class, 'updateUserByAdmin']);
    Route::delete('/user/delete/{id}', [UserController::class, 'deleteUser']);
// });

/* =====================================================================
                            CAR TYPE 
===========================================================================*/
Route::middleware(['auth:sanctum', 'role:admin,carhouse'])->prefix('cartype')->group(function () {}
);

Route::prefix('cartype')->group(function () {
    /* Ở hàm index với:
    http://127.0.0.1:8000/api/cartype/?all=true --> hiển thị all()
    http://127.0.0.1:8000/api/cartype/?per_page=2 --> hiển thị có phân trang là 2 (mặc định bằng 5)

    VD cho FE:
        fetch('/cartype?per_page=10')
        .then(response => response.json())
        .then(data => console.log(data));

    ** LƯU Ý: HTTP PUT của laravel tuân thủ đúng quy tắc http mà form-data ở postman thì không nên
        nếu test thì test ở bên raw dạng JSON. Sẽ không ảnh hưởng vì FE sau này đổ ra nếu đúng quy tắc
        JSON thì nó vẫn hoạt động bth.
    */
    Route::get('/', [CarTypeController::class, 'index']);
    Route::post('/', [CarTypeController::class, 'store']);
    Route::get('/{id}', [CarTypeController::class, 'show']);
    Route::put('/{id}', [CarTypeController::class, 'update']);
    Route::delete('/{id}', [CarTypeController::class, 'destroy']);
});

/* =====================================================================
                            CAR HOUSE 
===========================================================================*/
Route::get('/carhouse/{id}', [CarController::class, 'showCarHouse']);
Route::get('/carhouse', [CarController::class, 'listCarHouse']);

// Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
Route::post('/carhouse/create', [CarController::class, 'createCarHouse']);
Route::post('/carhouse/update/{id}', [CarController::class, 'updateCarHouse']);
Route::delete('/carhouse/delete/{id}', [CarController::class, 'deleteCarHouse']);
// });


/* =====================================================================
                                CAR 
===========================================================================*/
Route::middleware(['auth:sanctum', 'role:admin,carhouse'])->prefix('car')->group(function () {

});

Route::prefix('car')->group(function () {
    Route::get('/', [CarController::class, 'index']);
    Route::post('/', [CarController::class, 'store']);
    Route::get('/car-house/{id}', [CarController::class, 'getCarByCarHouseId']);
    Route::get('/{id}', [CarController::class, 'show'])->where('id', '[0-9]+');;
    Route::put('/{id}', [CarController::class, 'update'])->where('id', '[0-9]+');;
    Route::delete('/{id}', [CarController::class, 'destroy'])->where('id', '[0-9]+');;
});

/* =====================================================================
                            EMPLOYEE 
===========================================================================*/
Route::middleware(['auth::sanctum', 'role:admin,carhouse'])->prefix('employee')->group(function () {

});

Route::prefix('employee')->group(function () {
    Route::get('/', [EmployeeController::class, 'index']);
    Route::post('/', [EmployeeController::class, 'store']);
    Route::get('/car-house/{id}', [EmployeeController::class, 'getEmployeeByCarHouse']); // car_house_id
    Route::get('/car/{id}', [EmployeeController::class, 'getEmployeeByCar']); // car_id

    Route::get('/{id}', [EmployeeController::class, 'show'])->where('id', '[0-9]+');;
    Route::put('/{id}', [EmployeeController::class, 'update'])->where('id', '[0-9]+');;
    Route::delete('/{id}', [EmployeeController::class, 'destroy'])->where('id', '[0-9]+');;
});



/* =====================================================================
                            PUP 
===========================================================================*/
Route::get('/pickuppoint/{id}', [CarController::class, 'showPickupPointById']);
Route::get('/pickuppoint/car_trip/{car_trip_id}', [CarController::class, 'getPickupPointByCarTrip']);
Route::get('/pickuppoint/car_house/{car_house_id}', [CarController::class, 'getPickupPointByCarHouse']);
Route::get('/pickuppoints', [CarController::class, 'getAllPickupPoints']); // Plural for all



// Route::middleware(['auth:sanctum', 'admin,carhouse'])->group(function () {
Route::post('/pickuppoint/create', [CarController::class, 'createPickupPoint']);
Route::post('/pickuppoint/update/{id}', [CarController::class, 'updatePickupPoint']);
Route::delete('/pickuppoint/delete/{id}', [CarController::class, 'deletePickupPoint']);
// });


/* =====================================================================
                            DOP 
===========================================================================*/
Route::get('/dropoffpoint/{id}', [CarController::class, 'showDropoffPointById']);
Route::get('/dropoffpoint/car_trip/{car_trip_id}', [CarController::class, 'showDropoffPointByCarTrip']);
Route::get('/dropoffpoint/car_house/{car_house_id}', [CarController::class, 'getDropoffpointByCarHouse']);
Route::get('/dropoffpoint', [CarController::class, 'listDropoffPoint']);

// Route::middleware(['auth:sanctum', 'admin,carhouse'])->group(function () {
Route::post('/dropoffpoint/create', [CarController::class, 'createDropoffPoint']);
Route::post('/dropoffpoint/update/{id}', [CarController::class, 'updateDropoffPoint']);
Route::delete('/dropoffpoint/delete/{id}', [CarController::class, 'deleteDropoffPoint']);
// });


/* =====================================================================
                    PROVINCE - CAR ROUTE
===========================================================================*/
Route::get('/province', [ProvinceController::class, 'listProvince']);

// CAR ROUTE POINT
Route::get('/carroute/{id}', [CarController::class, 'showCarRoute']);
Route::get('/carroute', [CarController::class, 'listCarRoute']);

// Route::middleware(['auth:sanctum', 'admin,carhouse'])->group(function () {
Route::post('/carroute/create', [CarController::class, 'createCarRoute']);
Route::post('/carroute/update/{id}', [CarController::class, 'updateCarRoute']);
Route::delete('/carroute/delete/{id}', [CarController::class, 'deleteCarRoute']);
// });

/* =====================================================================
                            CITY 
===========================================================================*/
Route::get('/cities/{id}', [CityController::class, 'showId']); 
Route::get('/cities', [CityController::class, 'show']); 
Route::post('/cities', [CityController::class, 'create']); 
Route::post('/cities/{id}', [CityController::class, 'update']); 
Route::delete('/cities/{id}', [CityController::class, 'delete']); 

/* =====================================================================
                            CAR TRIP 
===========================================================================*/
Route::middleware(['auth:sanctum', 'role:admin,carhouse'])->prefix('cartrip')->group(function () {

});

// KHÔNG CẦN LOGIN
Route::prefix('cartrip')->group(function () {
    Route::prefix('search')->group(function () {
        Route::get('/', [SearchController::class, 'search']); 
        Route::get('/car-route-and-date', [SearchController::class, 'searchByCarRouteAndDate']);
    });

    Route::prefix('status')->group(function () {
        Route::get('/reset', [CarTripStatusController::class, 'resetCompletedCarTrips']);
        Route::post('/update', [CarTripStatusController::class, 'updateStatuses']);
    });

    Route::get('/', [CarTripController::class, 'index']); // Hiển thị danh sách chuyến xe
    Route::post('/', [CarTripController::class, 'store']); // Tạo mới chuyến xe
    Route::get('/car-house/{id}', [CarTripController::class, 'getByCarHouse']); // Lấy chuyến xe theo nhà xe
    Route::get('/not-started', [CarTripController::class, 'listCarTripNotStarted']); 
    Route::get('/{id}', [CarTripController::class, 'show'])->where('id', '[0-9]+'); // Chi tiết chuyến xe
    Route::put('/{id}', [CarTripController::class, 'update'])->where('id', '[0-9]+'); // Cập nhật chuyến xe
    Route::delete('/{id}', [CarTripController::class, 'destroy'])->where('id', '[0-9]+'); // Xóa chuyến xe
});


/* =====================================================================
                            BANNER 
===========================================================================*/

Route::get('/banner/{id}', [BannerController::class, 'showBanner']);
Route::get('/banner', [BannerController::class, 'listBanner']);

// Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::post('/banner/create', [BannerController::class, 'createBanner']);
    Route::post('/banner/update/{id}', [BannerController::class, 'updateBanner']);
    Route::delete('/banner/delete/{id}', [BannerController::class, 'deleteBanner']);
// });


/* =====================================================================
                            EVENT - ARTICLE
===========================================================================*/
Route::get('/event/{id}', [EventController::class, 'showEvent']);
Route::get('/event', [EventController::class, 'listEvent']);

// Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::post('/event/create', [EventController::class, 'createEvent']);
    Route::post('/event/update/{id}', [EventController::class, 'updateEvent']);
    Route::delete('/event/delete/{id}', [EventController::class, 'deleteEvent']);
// });


Route::get('/article/{id}', [EventController::class, 'showArticle']);
Route::get('/article', [EventController::class, 'listArticle']);

// Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::post('/article/create', [EventController::class, 'createArticle']);
    Route::post('/article/update/{id}', [EventController::class, 'updateArticle']);
    Route::delete('/article/delete/{id}', [EventController::class, 'deleteArticle']);
// });



/* =====================================================================
                            TICKET 
===========================================================================*/
Route::get('/ticket/{id}', [TicketController::class, 'showTicket']);
Route::get('/ticket', [TicketController::class, 'listTicket']);

// Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
Route::post('/ticket', [TicketController::class, 'createTicket']);
Route::post('/ticket/{id}', [TicketController::class, 'updateTicket']);
Route::delete('/ticket/{id}', [TicketController::class, 'deleteTicket']);
// });


/* =====================================================================
                            SEAT - SEAT CAR TRIP 
===========================================================================*/
Route::get('/seat/{car_id}', [SeatController::class, 'showSeatbycarid']);
Route::get('/seat', [SeatController::class, 'listSeat']);



Route::get('/seat-car-trip/car-trip-id/{car_trip_id}', [SeatCarTripController::class, 'showSeatCarTripByCarTripId']);
// Route::middleware(['auth:sanctum', 'admin'])->group(function () {
Route::post('/seat', [SeatController::class, 'createSeat']);
Route::post('/seat/{id}', [SeatController::class, 'updateSeat']);
Route::delete('/seat/{id}', [SeatController::class, 'deleteSeat']);
// });

//SeatCarTripCarTrip

Route::get('/seat-car-trip/{car_id}', [SeatCarTripController::class, 'showSeatbycarid']);
Route::get('/seat-car-trip', [SeatCarTripController::class, 'showSeatCarTrip']);

// Route::middleware(['auth:sanctum', 'admin'])->group(function () {
Route::post('/seat-car-trip', [SeatCarTripController::class, 'createSeatCarTrip']);
Route::post('/seat-car-trip/{id}', [SeatCarTripController::class, 'updateSeatCarTrip']);
Route::delete('/seat-car-trip/{id}', [SeatCarTripController::class, 'deleteSeatCarTrip']);
// });


/* =====================================================================
                            COMMENT 
===========================================================================*/
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





/* =====================================================================
                        ORDER - ORDER HISTORY
===========================================================================*/
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


/* =====================================================================
                            PAYMENT 
===========================================================================*/
Route::post('/payment/create', [PaymentController::class, 'createPayment']);
Route::post('/payment/complete-momo', [PaymentController::class, 'completeMoMoPayment']);
Route::get('/payment/{id}', [PaymentController::class, 'showPayment']);
Route::get('/payment/user/{userId}', [PaymentController::class, 'userPayments']);
Route::get('/payment', [PaymentController::class, 'listPayments']);
Route::delete('/payment/delete/{id}', [PaymentController::class, 'deletePayment']);
Route::post('/create-vnpay-payment', [PaymentController::class, 'createVNPayPayment']);
Route::get('/vnpay-callback', [PaymentController::class, 'vnpayCallback']);


/* =====================================================================
                            DISCOUNT CODE 
===========================================================================*/
Route::post('/discount-codes', [DiscountCodeController::class, 'createDiscountCode']);
Route::get('/discount-codes', [DiscountCodeController::class, 'listDiscountCodes']);
Route::get('/discount-codes/{id}', [DiscountCodeController::class, 'showDiscountCode']);
Route::post('/discount-codes/{id}', [DiscountCodeController::class, 'updateDiscountCode']);
Route::delete('/discount-codes/{id}', [DiscountCodeController::class, 'deleteDiscountCode']);
Route::post('/apply-discount-codes', [DiscountCodeController::class, 'applyDiscountCode']);
