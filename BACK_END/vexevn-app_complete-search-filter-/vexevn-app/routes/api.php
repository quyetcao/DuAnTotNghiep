<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\{
    AuthController,
    OTPController,
    ProvinceController,
    PickupPointController,
    DropoffPointController,
    CityController,
    EmployeeController,
    CarTypeController,
    CarController,
    CarRouteController,
    CarTripController,
    CarTripStatusController,
    CarHouseController,
    SeatController,
    SeatCarTripController,
    TicketController,
    PaymentController,
    OrderController,
    OrderHistoryController,
    DiscountCodeController,
    SearchController,
    CommentController,
    BannerController,
    EventController,
    ArticleController,
};

use App\Http\Controllers\UserController;

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
Route::middleware(['auth:sanctum', 'role:admin,carhouse'])->prefix('car-type')->group(function () {});

Route::prefix('car-type')->group(function () {
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
Route::middleware(['auth:sanctum', 'role:admin'])->prefix('car-house')->group(function () {});

Route::prefix('car-house')->group(function () {
    Route::get('/', [CarHouseController::class, 'index']);
    Route::post('/', [CarHouseController::class, 'store']);
    Route::get('/{id}', [CarHouseController::class, 'show']);
    Route::put('/{id}', [CarHouseController::class, 'update']);
    Route::delete('/{id}', [CarHouseController::class, 'destroy']);
});


/* =====================================================================
                                CAR 
===========================================================================*/
Route::middleware(['auth:sanctum', 'role:admin,carhouse'])->prefix('car')->group(function () {});

Route::prefix('car')->group(function () {
    Route::get('/', [CarController::class, 'index']);
    Route::post('/', [CarController::class, 'store']);
    Route::get('/car-house/{id}', [CarController::class, 'getAllCarByCarHouseId']);
    Route::get('/{id}', [CarController::class, 'show'])->where('id', '[0-9]+');
    Route::put('/{id}', [CarController::class, 'update'])->where('id', '[0-9]+');
    Route::delete('/{id}', [CarController::class, 'destroy'])->where('id', '[0-9]+');
});

/* =====================================================================
                            EMPLOYEE 
===========================================================================*/
Route::middleware(['auth::sanctum', 'role:admin,carhouse'])->prefix('employee')->group(function () {});

Route::prefix('employee')->group(function () {
    Route::get('/', [EmployeeController::class, 'index']);
    Route::post('/', [EmployeeController::class, 'store']);
    Route::prefix('take-by')->group(function () {
        Route::get('/car-house/{id}', [EmployeeController::class, 'getEmployeeByCarHouse']);
        Route::get('/car/{id}', [EmployeeController::class, 'getEmployeeByCar']);
    });

    Route::get('/{id}', [EmployeeController::class, 'show'])->where('id', '[0-9]+');
    Route::put('/{id}', [EmployeeController::class, 'update'])->where('id', '[0-9]+');
    Route::delete('/{id}', [EmployeeController::class, 'destroy'])->where('id', '[0-9]+');
});



/* =====================================================================
                            PUP 
===========================================================================*/
Route::middleware(['auth:sanctum', 'role:admin,carhouse'])->prefix('pick-up-point')->group(function () {});

Route::prefix('pick-up-point')->group(function () {
    Route::get('/', [PickupPointController::class, 'index']);
    Route::post('/', [PickupPointController::class, 'store']);
    Route::get('/{id}', [PickupPointController::class, 'show']);

    Route::prefix('take-by')->group(function () {
        // Cả 2 đều có thể pagination nha :v nếu mún hiện all thì như cartype (loại xe)
        // http://127.0.0.1:8000/api/pick-up-point/take-by/car-trip/33?per_page=3
        // http://127.0.0.1:8000/api/pick-up-point/take-by/car-trip/33?all=true
        Route::get('/car-trip/{id}', [PickupPointController::class, 'getPickupPointByCarTrip']);
        Route::get('/car-house/{id}', [PickupPointController::class, 'getPickupPointByCarHouse']);
    });

    Route::put('/{id}', [PickupPointController::class, 'update']);
    Route::delete('/{id}', [PickupPointController::class, 'destroy']);
});




/* =====================================================================
                            DOP 
===========================================================================*/
Route::middleware(['auth:sanctum', 'role:admin,carhouse'])->prefix('drop-off-point')->group(function () {});

Route::prefix('drop-off-point')->group(function () {
    Route::get('/', [DropoffPointController::class, 'index']);
    Route::post('/', [DropoffPointController::class, 'store']);

    Route::prefix('take-by')->group(function () {
        Route::get('car-trip/{id}', [DropoffPointController::class, 'getDropoffPointByCarTrip']);
        Route::get('car-house/{id}', [DropoffPointController::class, 'getDropoffpointByCarHouse']);
    });

    Route::get('/{id}', [DropoffPointController::class, 'show']);
    Route::put('/{id}', [DropoffPointController::class, 'update']);
    Route::delete('/{id}', [DropoffPointController::class, 'destroy']);
});


/* =====================================================================
                    PROVINCE - CAR ROUTE
===========================================================================*/
Route::get('/province', [ProvinceController::class, 'listProvince']);

Route::middleware(['auth:sanctum', 'role:admin,carhouse'])->prefix('car-route')->group(function () {});

Route::prefix('car-route')->group(function () {
    Route::get('/', [CarRouteController::class, 'index']);
    Route::post('/', [CarRouteController::class, 'store']);
    Route::get('/{id}', [CarRouteController::class, 'show']);
    Route::put('/{id}', [CarRouteController::class, 'update']);
    Route::delete('/{id}', [CarRouteController::class, 'destroy']);
});


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
Route::middleware(['auth:sanctum', 'role:admin,carhouse'])->prefix('car-trip')->group(function () {});

// KHÔNG CẦN LOGIN
Route::prefix('car-trip')->group(function () {
    Route::prefix('search')->group(function () {
        Route::get('/', [SearchController::class, 'search']);
        Route::get('/car-route-and-date', [SearchController::class, 'searchByCarRouteAndDate']);
    });

    // Route::prefix('status')->group(function () {
    //     Route::get('/reset', [CarTripStatusController::class, 'resetCompletedCarTrips']);
    //     Route::post('/update', [CarTripStatusController::class, 'updateStatuses']);
    // });

    Route::get('/', [CarTripController::class, 'index']); // Hiển thị danh sách chuyến xe
    Route::post('/', [CarTripController::class, 'store']); // Tạo mới chuyến xe

    Route::prefix('take-by')->group(function () {
        Route::get('/car-house/{id}', [CarTripController::class, 'getByCarHouse']); // Lấy chuyến xe theo nhà xe
    });

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
Route::middleware(['auth:sanctum', 'role:admin'])->prefix('event')->group(function () {});

Route::prefix('event')->group(function () {
    Route::get('', [EventController::class, 'index']);
    Route::post('/', [EventController::class, 'store']);
    Route::get('/{id}', [EventController::class, 'show']);
    Route::put('/{id}', [EventController::class, 'update']);
    Route::delete('/{id}', [EventController::class, 'destroy']);
});


Route::middleware(['auth:sanctum', 'role:admin'])->prefix('article')->group(function () {});

Route::prefix('article')->group(function () {
    Route::get('/', [ArticleController::class, 'index']);
    Route::post('/', [ArticleController::class, 'store']);
    Route::get('/{id}', [ArticleController::class, 'show']);
    Route::put('/{id}', [ArticleController::class, 'update']);
    Route::delete('/{id}', [ArticleController::class, 'destroy']);
});


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
