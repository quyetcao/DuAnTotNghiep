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
// use App\Models\City;
use App\Models\PickupPoint;
use App\Models\DropoffPoint;
use App\Models\BusRoute;
use App\Models\CarTrip;
use App\Models\CarRoute;
use App\Models\CarTripDropoffPoint;
use App\Models\CarTripPickupPoint;
use App\Models\Seat;
use App\Models\SeatCarTrip;
use App\Models\CarTripEmployee;

class CarTripController extends HelpController
{
    public function listCarTrip()
    {
        $data = CarTrip::with(['car', 'pickupPoints', 'dropoffPoints', 'seats'])->paginate(10);

        return response()->json([
            'status' => 200,
            'message' => 'Hiển thị danh sách chuyến xe thành công',
            'data' => $data
        ], 200);
    }

    public function showCarTrip($id)
    {
        $data = CarTrip::with(['car', 'pickupPoints', 'dropoffPoints', 'seats', 'employees','car.carType' ])->find($id);


        if (!$data) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy chuyến xe!',
            ], 404);
        }

        return response()->json([
            'status' => 200,
            'message' => 'Lấy thông tin chi tiết chuyến xe thành công!',
            'data' => $data
        ], 200);
    }

    public function createCarTrip(Request $request)
    {
        $validateCT = Validator::make($request->all(), [
            'car_id' => 'required|exists:cars,id',
            'car_route_id' => 'nullable|exists:car_routes,id',
            'departure_date' => 'required|date|after_or_equal:today',
            'arrival_date' => 'required|date|after_or_equal:departure_date',
            'return_date' => 'nullable|date|after_or_equal:arrival_date',
            'price' => 'required|numeric|min:0',

            'pickup_points' => 'required|array',
            'pickup_points.*.id' => 'required|exists:pickup_points,id',
            'pickup_points.*.pickup_time' => 'required|date_format:H:i',

            'dropoff_points' => 'required|array',
            'dropoff_points.*.id' => 'required|exists:dropoff_points,id',
            'dropoff_points.*.dropoff_time' => 'required|date_format:H:i',

            'employees' => 'required|array',  // Validate employees array
            'employees.*' => 'exists:employees,id',  // Employee IDs phải tồn tại

            'car_type_id' => 'required|exists:car_types,id',
        ]);

        if ($validateCT->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form',
                'data' => $validateCT->errors()
            ], 422);
        }

        try {
            DB::beginTransaction();

            // Tạo chuyến xe mới
            $carTrip = CarTrip::create([
                'car_id' => $request->car_id,
                'car_route_id' => $request->car_route_id,
                'departure_date' => $request->departure_date,
                'arrival_date' => $request->arrival_date,
                'return_date' => $request->return_date,
                'price' => $request->price,
                'status' => 'not_started',
            ]);

            // Lưu điểm đón
            $listNewPUP = [];
            foreach ($request->pickup_points as $pickupPoint) {
                CarTripPickupPoint::create([
                    'car_trip_id' => $carTrip->id,
                    'pickup_point_id' => $pickupPoint['id'],
                    'pickup_time' => $pickupPoint['pickup_time']
                ]);
                $listNewPUP[] = $pickupPoint;
            }

            // Lưu điểm trả
            $listNewDOP = [];
            foreach ($request->dropoff_points as $dropoffPoint) {
                CarTripDropoffPoint::create([
                    'car_trip_id' => $carTrip->id,
                    'dropoff_point_id' => $dropoffPoint['id'],
                    'dropoff_time' => $dropoffPoint['dropoff_time']
                ]);
                $listNewDOP[] = $dropoffPoint;
            }

            $car = Car::find($carTrip->car_id);

            if (!$car) {
                return response()->json([
                    'status' => 422,
                    'message' => 'Xe không tồn tại trong cơ sở dữ liệu.',
                ], 422);
            }

            if (!$car->car_type_id) {
                return response()->json([
                    'status' => 422,
                    'message' => 'Xe không có loại xe được chỉ định (car_type_id là null).',
                ], 422);
            }

            $carType = CarType::find($car->car_type_id);

            if (!$carType) {
                return response()->json([
                    'status' => 422,
                    'message' => 'Không tìm thấy thông tin loại xe.',
                ], 422);
            }

            $numberOfSeats = $carType->quantity_seat;
            for ($i = 1; $i <= $numberOfSeats; $i++) {
                if ($i == 1 || $i == 2) {
                    $locationSeat = 0;  
                } elseif ($i == $numberOfSeats || $i == $numberOfSeats - 1) {
                    $locationSeat = 2;  
                } else {
                    $locationSeat = 1; 
                }

                $seat = Seat::create([
                    'car_id' => $carTrip->car_id,
                    'seat_number' => 'Seat ' . $i,
                    'seat_type' => $i <= 5 ? 'vip' : 'standard',
                    'price' => $i <= 5 ? 300 : 150,
                    'car_type_id' => $request->car_type_id,
                    'location_seat' => (string) $locationSeat,
                ]);

                SeatCarTrip::create([
                    'seat_id' => $seat->id,
                    'car_id' => $carTrip->car_id,
                    'car_trip_id' => $carTrip->id,  
                    'is_available' => true,
                ]);
            }

            $listEmployee = [];
            foreach ($request->employees as $employeeId) {
                CarTripEmployee::create([
                    'car_trip_id' => $carTrip->id,
                    'employee_id' => $employeeId
                ]);
                $listEmployee[] = $employeeId;
            }

            DB::commit();

            return response()->json([
                'status' => 201,
                'message' => 'Chuyến xe tạo mới thành công!',
                'data' => [
                    'carTrip' => $carTrip,
                    'listNewPickupPoints' => $listNewPUP,
                    'listNewDropoffPoints' => $listNewDOP,
                    'listEmployee' => $listEmployee
                ]
            ], 201);
        } catch (\Throwable $th) {
            DB::rollBack();

            return response()->json([
                'status' => 500,
                'message' => $th->getMessage(),
            ], 500);
        }
    }



    public function updateCarTrip(Request $request, $id)
    {
        // Validate dữ liệu
        $validateCT = Validator::make($request->all(), [
            'car_id' => 'required|exists:cars,id',
            'car_route_id' => 'nullable|exists:car_routes,id',
            'departure_date' => 'required|date|after_or_equal:today',
            'arrival_date' => 'required|date|after_or_equal:departure_date',
            'return_date' => 'nullable|date|after_or_equal:arrival_date',
            'price' => 'required|numeric|min:0',

            'pickup_points' => 'required|array',
            'pickup_points.*.id' => 'required|exists:pickup_points,id',
            'pickup_points.*.pickup_time' => 'required|date_format:H:i',

            'dropoff_points' => 'required|array',
            'dropoff_points.*.id' => 'required|exists:dropoff_points,id',
            'dropoff_points.*.dropoff_time' => 'required|date_format:H:i',

            'employees' => 'required|array',  // Validate employees array
            'employees.*' => 'exists:employees,id',  // Employee IDs phải tồn tại
        ]);

        if ($validateCT->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form',
                'data' => $validateCT->errors()
            ], 422);
        }

        // Tìm sản phẩm
        $carTrip = CarTrip::find($id);
        if (!$carTrip) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy chuyến xe!',
            ], 404);
        }

        try {
            DB::beginTransaction();

            $carTrip->update([
                'car_id' => $request->car_id,
                'car_route_id' => $request->car_route_id,
                'departure_date' => $request->departure_date,
                'arrival_date' => $request->arrival_date,
                'return_date' => $request->return_date,
                'price' => $request->price,
                'status' => $carTrip->status,

            ]);

            // Cập nhật điểm đón
            $existingPUP = CarTripPickupPoint::where('car_trip_id', $carTrip->id)->get();
            $updatedPUP = collect($request->pickup_points);

            // Xoá những điểm đón ko còn có trong request
            $existingPUP->each(function ($existsingPoint) use ($updatedPUP) {
                $found = $updatedPUP->firstWhere('id', $existsingPoint->pickup_point_id);
                if (!$found) {
                    $existsingPoint->delete();
                }
            });

            // Thêm hoặc cập nhật điểm đón mới
            $listNewPUP = [];
            foreach ($request->pickup_points as $pickupPoint) {
                // Cặp [] thứ 1: là mảng điều kiện. Tìm xem nó có tồn tại trong CSDL hay chưa.
                // Cặp [] thứ 2: là mảng giá trị cần update khi tìm thấy dữ liệu hoặc tạo mới nếu chưa có.
                CarTripPickupPoint::updateOrCreate(
                    [
                        'car_trip_id' => $carTrip->id,
                        'pickup_point_id' => $pickupPoint['id']
                    ],
                    [
                        'pickup_time' => $pickupPoint['pickup_time']
                    ]
                );
                $listNewPUP[] = $pickupPoint;
            }

            // Cập nhật điểm trả
            $existingDOP = CarTripDropoffPoint::where('car_trip_id', $carTrip->id)->get();
            $updatedDOP = collect($request->dropoff_points);

            // Xóa những điểm trả không còn có trong request
            $existingDOP->each(function ($existsingPoint) use ($updatedDOP) {
                $found = $updatedDOP->firstWhere('id', $existsingPoint->dropoff_point_id);

                if (!$found) {
                    $existsingPoint->delete();
                }
            });

            // Thêm hoặc cập nhật điểm trả mới
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

            // Cập nhật tài xế và nhân viên thu vé
            // Xóa tất cả nhân viên cũ liên kết với chuyến xe
            CarTripEmployee::where('car_trip_id', $carTrip->id)->delete();

            // Thêm nhân viên mới vào chuyến xe
            $listEmployee = [];
            foreach ($request->employees as $employeeId) {
                CarTripEmployee::create([
                    'car_trip_id' => $carTrip->id,
                    'employee_id' => $employeeId,
                ]);
                $listEmployee[] = $employeeId;
            }
            DB::commit();

            return response()->json([
                'status' => 200,
                'message' => 'Cập nhật chuyến xe thành công!',
                'data' => [
                    'carTrip' => $carTrip,
                    'listNewPickupPoints' => $listNewPUP,
                    'listNewDropoffPoints' => $listNewDOP,
                    'listEmployee' => $listEmployee
                ]
            ], 200);
        } catch (\Throwable $th) {
            DB::rollBack();

            return response()->json([
                'status' => 500,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function getTripsByCarHouse($carHouseId)
    {
        // Lấy danh sách chuyến xe của nhà xe
        $data = CarTrip::with(['car', 'pickupPoints', 'dropoffPoints', 'seats', 'employees', 'carRoute'])
                        ->where('car_house_id', $carHouseId)
                        ->paginate(5);
    
        // Kiểm tra nếu không có chuyến xe nào
        if ($data->isEmpty()) {
            return $this->sendNotFoundResponse('Không tìm thấy chuyến xe thuộc nhà xe này!');
        }
    
        // Trả về danh sách chuyến xe
        return $this->sendResponse(200, 'Hiển thị danh sách chuyến xe theo nhà xe thành công!', $data);
    }
    

    public function deleteCarTrip($id)
    {
        $carTrip = CarTrip::find($id);

        if (!$carTrip) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy chuyến xe!'
            ], 404);
        }

        try {
            DB::beginTransaction();

            // Xóa các bản ghi ở bảng trung gian car_trip_pickup_points
            $carTrip->pickupPoints()->detach();

            // Xóa các bản ghi ở bảng trung gian car_trip_dropoff_points
            $carTrip->dropoffPoints()->detach();

            //  Xoá nhân viên 
            $carTrip->employees()->detach();

            // Xóa chuyến xe
            $carTrip->delete();

            DB::commit();

            return response()->json([
                'status' => 200,
                'message' => 'Chuyến xe đã được xóa thành công!'
            ], 200);
        } catch (\Throwable $th) {
            DB::rollBack();

            return response()->json([
                'status' => 500,
                'message' => $th->getMessage(),
            ], 500);
        }
    }
}

