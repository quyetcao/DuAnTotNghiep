<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

use App\Models\CarType;
use App\Models\CarHouse;
use App\Models\Car;
use App\Models\CarImage;
use App\Models\PickupPoint;
use App\Models\DropoffPoint;
use App\Models\BusRoute;
use App\Models\CarTrip;
use App\Models\CarRoute;
use App\Models\CarTripDropoffPoint;
use App\Models\CarTripPickupPoint;
use App\Models\Seat;
use App\Models\SeatCarTrip;

class CarTripController extends HelpController
{
    public function index(Request $request)
    {
        $data = CarTrip::with(['car', 'pickupPoints', 'dropoffPoints', 'seatCarTrips', 'seats'])->paginate(5);

        if ($request->query('all') === 'true') {
            $data = $data = CarTrip::with(['car', 'pickupPoints', 'dropoffPoints', 'seatCarTrips', 'seats'])->get();
            return $this->sendResponse(200, 'Hiển thị danh sách chuyến xe thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);
        $data = CarTrip::with(['car', 'pickupPoints', 'dropoffPoints', 'seatCarTrips', 'seats'])->paginate((int)$perPage);
        return $this->sendResponse(200, "Hiển thị danh sách chuyến xe thành công! Với {$perPage} đối tượng mỗi trang", $data);
    }


    public function show($id)
    {
        $data = CarTrip::with(['car', 'pickupPoints', 'dropoffPoints', 'seatCarTrips', 'seats', 'car.carType'])->find($id);

        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy chuyến xe!');
        }

        return $this->sendResponse(200, 'Lấy thông tin chi tiết chuyến xe thành công!', $data);
    }


    public function listCarTripNotStarted(Request $request)
    {
        // Lọc chuyến xe theo trạng thái 'not_started' cho người dùng
        $data = CarTrip::notStarted()
            ->with(['car', 'pickupPoints', 'dropoffPoints', 'seatCarTrips', 'seats'])
            ->paginate(5);

        if ($request->query('all') === 'true') {
            $data = $data = CarTrip::notStarted()
                                    ->with(['car', 'pickupPoints', 'dropoffPoints', 'seatCarTrips', 'seats'])
                                    ->get();
            return $this->sendResponse(200, 'Hiển thị danh sách chuyến xe chưa xuất phát thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);
        $data = CarTrip::notStarted()
                        ->with(['car', 'pickupPoints', 'dropoffPoints', 'seatCarTrips', 'seats'])
                        ->paginate((int)$perPage);
        return $this->sendResponse(200, "Hiển thị danh sách chuyến xe chưa xuất phát thành công! Với {$perPage} đối tượng mỗi trang", $data);
    }


    public function getByCarHouse(Request $request, $id)
    {
        $data = CarTrip::with(['car', 'pickupPoints', 'dropoffPoints', 'seatCarTrips', 'seats', 'carRoute'])
            ->whereHas('car', function ($query) use ($id) {
                $query->where('car_house_id', $id);
            })
            ->paginate(5);

            if ($request->query('all') == 'true') {
                $data = CarTrip::with(['car', 'pickupPoints', 'dropoffPoints', 'seatCarTrips', 'seats', 'carRoute'])
                                ->whereHas('car', function ($query) use ($id) {
                                    $query->where('car_house_id', $id);
                                })
                                ->get();
    
                if ($data->isEmpty()) {
                    return $this->sendNotFoundResponse('Không tìm thấy chuyến xe của nhà xe này!');
                }
    
                return $this->sendResponse(200, 'Lấy thông tin chi tiết chuyến xe theo nhà xe thành công!', $data);
            }
    
            $perPage = $request->query('per_page', 5);
            $data = CarTrip::with(['car', 'pickupPoints', 'dropoffPoints', 'seatCarTrips', 'seats', 'carRoute'])
                            ->whereHas('car', function ($query) use ($id) {
                                $query->where('car_house_id', $id);
                            })
                            ->paginate((int)$perPage);
    
            if ($data->isEmpty()) {
                return $this->sendNotFoundResponse('Không tìm thấy chuyến xe của nhà xe này!');
            }
    
            return $this->sendResponse(
                200,
                "Lấy thông tin chi tiết chuyến xe theo nhà xe thành công! Với {$perPage} đối tượng mỗi trang",
                $data
            );
    }


    // public function createCarTrip(Request $request)
    // {
    //     $validateCT = Validator::make($request->all(), [
    //         'car_id' => 'required|exists:cars,id',
    //         'car_route_id' => 'nullable|exists:car_routes,id',
    //         'departure_date' => 'required|date|after_or_equal:today',
    //         'arrival_date' => 'required|date|after_or_equal:departure_date',
    //         'return_date' => 'nullable|date|after_or_equal:arrival_date',
    //         'price' => 'required|numeric|min:0',

    //         'pickup_points' => 'required|array',
    //         'pickup_points.*.id' => 'required|exists:pickup_points,id',
    //         'pickup_points.*.pickup_time' => 'required|date_format:H:i',

    //         'dropoff_points' => 'required|array',
    //         'dropoff_points.*.id' => 'required|exists:dropoff_points,id',
    //         'dropoff_points.*.dropoff_time' => 'required|date_format:H:i',

    //         'employees' => 'required|array',  // Validate employees array
    //         'employees.*' => 'exists:employees,id',  // Employee IDs phải tồn tại

    //         'car_type_id' => 'required|exists:car_types,id',
    //     ]);

    //     if ($validateCT->fails()) {
    //         return response()->json([
    //             'status' => 422,
    //             'message' => 'Lỗi xác thực form',
    //             'data' => $validateCT->errors()
    //         ], 422);
    //     }

    //     try {
    //         DB::beginTransaction();

    //         // Tạo chuyến xe mới
    //         $carTrip = CarTrip::create([
    //             'car_id' => $request->car_id,
    //             'car_route_id' => $request->car_route_id,
    //             'departure_date' => $request->departure_date,
    //             'arrival_date' => $request->arrival_date,
    //             'return_date' => $request->return_date,
    //             'price' => $request->price,
    //             'status' => 'not_started',
    //         ]);

    //         // Lưu điểm đón
    //         $listNewPUP = [];
    //         foreach ($request->pickup_points as $pickupPoint) {
    //             CarTripPickupPoint::create([
    //                 'car_trip_id' => $carTrip->id,
    //                 'pickup_point_id' => $pickupPoint['id'],
    //                 'pickup_time' => $pickupPoint['pickup_time']
    //             ]);
    //             $listNewPUP[] = $pickupPoint;
    //         }

    //         // Lưu điểm trả
    //         $listNewDOP = [];
    //         foreach ($request->dropoff_points as $dropoffPoint) {
    //             CarTripDropoffPoint::create([
    //                 'car_trip_id' => $carTrip->id,
    //                 'dropoff_point_id' => $dropoffPoint['id'],
    //                 'dropoff_time' => $dropoffPoint['dropoff_time']
    //             ]);
    //             $listNewDOP[] = $dropoffPoint;
    //         }

    //         $car = Car::find($carTrip->car_id);

    //         if (!$car) {
    //             return response()->json([
    //                 'status' => 422,
    //                 'message' => 'Xe không tồn tại trong cơ sở dữ liệu.',
    //             ], 422);
    //         }

    //         if (!$car->car_type_id) {
    //             return response()->json([
    //                 'status' => 422,
    //                 'message' => 'Xe không có loại xe được chỉ định (car_type_id là null).',
    //             ], 422);
    //         }

    //         $carType = CarType::find($car->car_type_id);

    //         if (!$carType) {
    //             return response()->json([
    //                 'status' => 422,
    //                 'message' => 'Không tìm thấy thông tin loại xe.',
    //             ], 422);
    //         }

    //         $numberOfSeats = $carType->quantity_seat;
    //         for ($i = 1; $i <= $numberOfSeats; $i++) {
    //             if ($i == 1 || $i == 2) {
    //                 $locationSeat = 0;  
    //             } elseif ($i == $numberOfSeats || $i == $numberOfSeats - 1) {
    //                 $locationSeat = 2;  
    //             } else {
    //                 $locationSeat = 1; 
    //             }

    //             $seat = Seat::create([
    //                 'car_id' => $carTrip->car_id,
    //                 'seat_number' => 'Seat ' . $i,
    //                 'seat_type' => $i <= 5 ? 'vip' : 'standard',
    //                 'price' => $i <= 5 ? 300000 : 250000,
    //                 'car_type_id' => $request->car_type_id,
    //                 'location_seat' => (string) $locationSeat,
    //             ]);

    //             SeatCarTrip::create([
    //                 'seat_id' => $seat->id,
    //                 'car_id' => $carTrip->car_id,
    //                 'car_trip_id' => $carTrip->id,  
    //                 'is_available' => true,
    //             ]);
    //         }

    //         $listEmployee = [];
    //         foreach ($request->employees as $employeeId) {
    //             CarTripEmployee::create([
    //                 'car_trip_id' => $carTrip->id,
    //                 'employee_id' => $employeeId
    //             ]);
    //             $listEmployee[] = $employeeId;
    //         }

    //         DB::commit();

    //         return response()->json([
    //             'status' => 201,
    //             'message' => 'Chuyến xe tạo mới thành công!',
    //             'data' => [
    //                 'carTrip' => $carTrip,
    //                 'listNewPickupPoints' => $listNewPUP,
    //                 'listNewDropoffPoints' => $listNewDOP,
    //                 'listEmployee' => $listEmployee
    //             ]
    //         ], 201);
    //     } catch (\Throwable $th) {
    //         DB::rollBack();

    //         return response()->json([
    //             'status' => 500,
    //             'message' => $th->getMessage(),
    //         ], 500);
    //     }
    // }

    public function store(Request $request)
    {
        $rules = [
            // Validate cartrip data
            'car_id' => 'required|exists:cars,id',
            'car_route_id' => 'required|exists:car_routes,id',
            'departure_date' => 'required|date|after_or_equal:today',
            'arrival_date' => 'required|date|after_or_equal:departure_date',
            'return_date' => 'nullable|date|after_or_equal:arrival_date',
            'price' => 'required|numeric|min:0',
            'status' => 'required|in:not_started,running,completed',
            // Validate PUP & DOP data
            'pickup_points' => 'required|array',
            'pickup_points.*.id' => 'required|exists:pickup_points,id',
            'pickup_points.*.pickup_time' => 'required|date_format:H:i',
            'dropoff_points' => 'required|array',
            'dropoff_points.*.id' => 'required|exists:dropoff_points,id',
            'dropoff_points.*.dropoff_time' => 'required|date_format:H:i',
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {
            // Main cartrip data
            $carTrip = CarTrip::create([
                'car_id' => $request->car_id,
                'car_route_id' => $request->car_route_id,
                'departure_date' => $request->departure_date,
                'arrival_date' => $request->arrival_date,
                'return_date' => $request->return_date,
                'price' => $request->price,
                'status' => $request->status ?? 'not_started',
            ]);

            // Add PUP
            $listNewPUP = [];
            foreach ($request->pickup_points as $pickupPoint) {
                CarTripPickupPoint::create([
                    'car_trip_id' => $carTrip->id,
                    'pickup_point_id' => $pickupPoint['id'],
                    'pickup_time' => $pickupPoint['pickup_time']
                ]);
                $listNewPUP[] = $pickupPoint;
            }

            // Add DOP
            $listNewDOP = [];
            foreach ($request->dropoff_points as $dropoffPoint) {
                CarTripDropoffPoint::create([
                    'car_trip_id' => $carTrip->id,
                    'dropoff_point_id' => $dropoffPoint['id'],
                    'dropoff_time' => $dropoffPoint['dropoff_time']
                ]);
                $listNewDOP[] = $dropoffPoint;
            }

            // Add Seat
            $car = Car::find($carTrip->car_id);

            if (!$car) {
                return $this->sendNotFoundResponse('Xe không tồn tại trong cơ sở dữ liệu.');
            }

            if (!$car->car_type_id) {
                return $this->sendNotFoundResponse('Xe không thuộc loại xe nào!');
            }

            $carType = CarType::find($car->car_type_id);

            $numberOfSeats = $carType->quantity_seat;
            for ($i = 1; $i <= $numberOfSeats; $i++) {
                $locationSeat = ($i == 1) ? 0 : (($i > $numberOfSeats - 3) ? 2 : 1);
                $seat = Seat::create([
                    'car_id' => $carTrip->car_id,
                    'seat_number' => 'Seat ' . $i,
                    'seat_type' => $i <= 5 ? 'vip' : 'standard',
                    'price' => $i <= 5 ? 300000 : 250000,
                    'car_type_id' => $request->car_type_id,
                    'location_seat' => (string) $locationSeat,
                ]);

                SeatCarTrip::create([
                    'seat_id' => $seat->id,
                    'car_id' => $carTrip->car_id,
                    'car_trip_id' => $carTrip->id,
                    'is_available' => true,
                    'booking_method' => 'web',
                ]);
            }

            // Success response
            return $this->sendResponse(201, 'Thêm mới chuyến xe thành công!', [
                'carTrip' => $carTrip,
                'listNewPickupPoints' => $listNewPUP,
                'listNewDropoffPoints' => $listNewDOP,
            ]);
        });
    }


    // public function updateCarTrip(Request $request, $id)
    // {
    //     // Validate dữ liệu
    //     $validateCT = Validator::make($request->all(), [
    //         'car_id' => 'required|exists:cars,id',
    //         'car_route_id' => 'nullable|exists:car_routes,id',
    //         'departure_date' => 'required|date|after_or_equal:today',
    //         'arrival_date' => 'required|date|after_or_equal:departure_date',
    //         'return_date' => 'nullable|date|after_or_equal:arrival_date',
    //         'price' => 'required|numeric|min:0',

    //         'pickup_points' => 'required|array',
    //         'pickup_points.*.id' => 'required|exists:pickup_points,id',
    //         'pickup_points.*.pickup_time' => 'required|date_format:H:i',

    //         'dropoff_points' => 'required|array',
    //         'dropoff_points.*.id' => 'required|exists:dropoff_points,id',
    //         'dropoff_points.*.dropoff_time' => 'required|date_format:H:i',

    //         'employees' => 'required|array',  // Validate employees array
    //         'employees.*' => 'exists:employees,id',  // Employee IDs phải tồn tại
    //     ]);

    //     if ($validateCT->fails()) {
    //         return response()->json([
    //             'status' => 422,
    //             'message' => 'Lỗi xác thực form',
    //             'data' => $validateCT->errors()
    //         ], 422);
    //     }

    //     // Tìm sản phẩm
    //     $carTrip = CarTrip::find($id);
    //     if (!$carTrip) {
    //         return response()->json([
    //             'status' => 404,
    //             'message' => 'Không tìm thấy chuyến xe!',
    //         ], 404);
    //     }

    //     try {
    //         DB::beginTransaction();

    //         $carTrip->update([
    //             'car_id' => $request->car_id,
    //             'car_route_id' => $request->car_route_id,
    //             'departure_date' => $request->departure_date,
    //             'arrival_date' => $request->arrival_date,
    //             'return_date' => $request->return_date,
    //             'price' => $request->price,
    //             'status' => $carTrip->status,

    //         ]);

    //         // Cập nhật điểm đón
    //         $existingPUP = CarTripPickupPoint::where('car_trip_id', $carTrip->id)->get();
    //         $updatedPUP = collect($request->pickup_points);

    //         // Xoá những điểm đón ko còn có trong request
    //         $existingPUP->each(function ($existsingPoint) use ($updatedPUP) {
    //             $found = $updatedPUP->firstWhere('id', $existsingPoint->pickup_point_id);
    //             if (!$found) {
    //                 $existsingPoint->delete();
    //             }
    //         });

    //         // Thêm hoặc cập nhật điểm đón mới
    //         $listNewPUP = [];
    //         foreach ($request->pickup_points as $pickupPoint) {
    //             // Cặp [] thứ 1: là mảng điều kiện. Tìm xem nó có tồn tại trong CSDL hay chưa.
    //             // Cặp [] thứ 2: là mảng giá trị cần update khi tìm thấy dữ liệu hoặc tạo mới nếu chưa có.
    //             CarTripPickupPoint::updateOrCreate(
    //                 [
    //                     'car_trip_id' => $carTrip->id,
    //                     'pickup_point_id' => $pickupPoint['id']
    //                 ],
    //                 [
    //                     'pickup_time' => $pickupPoint['pickup_time']
    //                 ]
    //             );
    //             $listNewPUP[] = $pickupPoint;
    //         }

    //         // Cập nhật điểm trả
    //         $existingDOP = CarTripDropoffPoint::where('car_trip_id', $carTrip->id)->get();
    //         $updatedDOP = collect($request->dropoff_points);

    //         // Xóa những điểm trả không còn có trong request
    //         $existingDOP->each(function ($existsingPoint) use ($updatedDOP) {
    //             $found = $updatedDOP->firstWhere('id', $existsingPoint->dropoff_point_id);

    //             if (!$found) {
    //                 $existsingPoint->delete();
    //             }
    //         });

    //         // Thêm hoặc cập nhật điểm trả mới
    //         $listNewDOP = [];
    //         foreach ($request->dropoff_points as $dropoffPoint) {
    //             CarTripDropoffPoint::updateOrCreate(
    //                 [
    //                     'car_trip_id' => $carTrip->id,
    //                     'dropoff_point_id' => $dropoffPoint['id'],


    //                 ],
    //                 [
    //                     'dropoff_time' => $dropoffPoint['dropoff_time']
    //                 ]
    //             );

    //             $listNewDOP[] = $dropoffPoint;
    //         }

    //         // Cập nhật tài xế và nhân viên thu vé
    //         // Xóa tất cả nhân viên cũ liên kết với chuyến xe
    //         CarTripEmployee::where('car_trip_id', $carTrip->id)->delete();

    //         // Thêm nhân viên mới vào chuyến xe
    //         $listEmployee = [];
    //         foreach ($request->employees as $employeeId) {
    //             CarTripEmployee::create([
    //                 'car_trip_id' => $carTrip->id,
    //                 'employee_id' => $employeeId,
    //             ]);
    //             $listEmployee[] = $employeeId;
    //         }
    //         DB::commit();

    //         return response()->json([
    //             'status' => 200,
    //             'message' => 'Cập nhật chuyến xe thành công!',
    //             'data' => [
    //                 'carTrip' => $carTrip,
    //                 'listNewPickupPoints' => $listNewPUP,
    //                 'listNewDropoffPoints' => $listNewDOP,
    //                 'listEmployee' => $listEmployee
    //             ]
    //         ], 200);
    //     } catch (\Throwable $th) {
    //         DB::rollBack();

    //         return response()->json([
    //             'status' => 500,
    //             'message' => $th->getMessage()
    //         ], 500);
    //     }
    // }

    public function update(Request $request, $id)
    {
        $rules = [
            // Validate cartrip data
            'car_id' => 'required|exists:cars,id',
            'car_route_id' => 'required|exists:car_routes,id',
            'departure_date' => 'required|date|after_or_equal:today',
            'arrival_date' => 'required|date|after_or_equal:departure_date',
            'return_date' => 'nullable|date|after_or_equal:arrival_date',
            'price' => 'required|numeric|min:0',
            'status' => 'required|in:not_started,running,completed',
            // Validate PUP & DOP data
            'pickup_points' => 'required|array',
            'pickup_points.*.id' => 'required|exists:pickup_points,id',
            'pickup_points.*.pickup_time' => 'required|date_format:H:i',
            'dropoff_points' => 'required|array',
            'dropoff_points.*.id' => 'required|exists:dropoff_points,id',
            'dropoff_points.*.dropoff_time' => 'required|date_format:H:i',

        ];

        return $this->validateAndExecute($request, $rules, function () use ($request, $id) {
            $carTrip = CarTrip::find($id);
            if (!$carTrip) {
                return $this->sendNotFoundResponse('Không tìm thấy chuyến xe!');
            }

            $carTrip->update([
                'car_id' => $request->car_id ?? $carTrip->car_id,
                'car_route_id' => $request->car_route_id ?? $carTrip->car_route_id,
                'departure_date' => $request->departure_date ?? $carTrip->departure_date,
                'arrival_date' => $request->arrival_date ?? $carTrip->arrival_date,
                'return_date' => $request->return_date ?? $carTrip->return_date,
                'price' => $request->price ?? $carTrip->price,
                'status' => $carTrip->status ?? $carTrip->status,
            ]);

            // Update PUP
            $existingPUP = CarTripPickupPoint::where('car_trip_id', $carTrip->id)->get();
            $updatedPUP = collect($request->pickup_points);

            $existingPUP->each(function ($existingPoint) use ($updatedPUP) {
                $found = $updatedPUP->firstWhere('id', $existingPoint->pickup_point_id);
                if (!$found) {
                    $existingPoint->delete();
                }
            });

            $listNewPUP = [];
            foreach ($request->pickup_points as $pickupPoint) {
                CarTripPickupPoint::updateOrCreate(
                    [
                        'car_trip_id' => $carTrip->id,
                        'pickup_point_id' => $pickupPoint['id'],
                    ],
                    [
                        'pickup_time' => $pickupPoint['pickup_time']
                    ]
                );
                $listNewPUP[] = $pickupPoint;
            }

            // Update DOP
            $existingDOP = CarTripDropoffPoint::where('car_trip_id', $carTrip->id)->get();
            $updatedDOP = collect($request->dropoff_points);

            $existingDOP->each(function ($existingPoint) use ($updatedDOP) {
                $found = $updatedDOP->firstWhere('id', $existingPoint->dropoff_point_id);
                if (!$found) {
                    $existingPoint->delete();
                }
            });

            $listNewDOP = [];
            foreach ($request->dropoff_points as $dropoffPoint) {
                CarTripDropoffPoint::updateOrCreate(
                    [
                        'car_trip_id' => $carTrip->id,
                        'dropoff_point_id' => $dropoffPoint['id'],
                    ],
                    [
                        'dropoff_time' => $dropoffPoint['dropoff_time']
                    ]
                );
                $listNewDOP[] = $dropoffPoint;
            }


            return $this->sendResponse(201, 'Cập nhật chuyến xe thành công!', [
                'carTrip' => $carTrip,
                'listNewPickupPoints' => $listNewPUP,
                'listNewDropoffPoints' => $listNewDOP,
            ]);
        });
    }

    public function destroy($id)
    {
        $carTrip = CarTrip::find($id);

        if (!$carTrip) {
            return $this->sendNotFoundResponse('Không tìm thấy chuyến xe!');
        }

        try {
            DB::beginTransaction();
            $carTrip->delete();

            DB::commit();
            return $this->sendResponse(200, 'Xoá chuyến xe thành công!');
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'status' => 500,
                'message' => 'Lỗi hệ thống!',
                'error' => $th->getMessage(),
            ], 500);
        }
    }
}
