<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\{Validator, DB};

use App\Models\{
    Car,
    CarImage,
    CarHouse,
    Employee,
};

use Illuminate\Support\Facades\Log;

class CarController extends HelpController
{



    /* =====================================================================
                                    CAR 
===========================================================================*/
    public function index(Request $request)
    {
        if ($request->query('all') === 'true') {
            $data = Car::with('carImages', 'carHouse', 'carType', 'employees')->get();
            return $this->sendResponse(200, 'Hiển thị danh sách xe thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);
        $data = Car::with('carImages', 'carHouse', 'carType', 'employees')->paginate((int)$perPage);
        return $this->sendResponse(200, "Hiển thị danh sách xe thành công! Với {$perPage} đối tượng mỗi trang", $data);
    }


    public function show($id)
    {
        $data = Car::with('carImages', 'carHouse', 'carType', 'employees')->find($id);

        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy xe!');
        }

        return $this->sendResponse(200, 'Lấy thông tin chi tiết xe thành công!', $data);
    }

    public function getCarByCarHouseId(Request $request, $id)
    {
        $data = Car::with('carImages', 'carHouse', 'carType', 'employees')
            ->where('car_house_id', $id)
            ->paginate(5);

        if ($request->query('all') == 'true') {
            $data = Car::with('carImages', 'carHouse', 'carType', 'employees')
                ->where('car_house_id', $id)
                ->get();

            if ($data->isEmpty()) {
                return $this->sendNotFoundResponse('Không tìm thấy xe của nhà xe này!');
            }

            return $this->sendResponse(200, 'Lấy thông tin chi tiết xe theo nhà xe thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);
        $data = Car::with('carImages', 'carHouse', 'carType', 'employees')
            ->where('car_house_id', $id)
            ->paginate((int)$perPage);

        if ($data->isEmpty()) {
            return $this->sendNotFoundResponse('Không tìm thấy xe của nhà xe này!');
        }

        return $this->sendResponse(
            200,
            "Lấy thông tin chi tiết xe theo nhà xe thành công! Với {$perPage} đối tượng mỗi trang",
            $data
        );
    }


    public function store(Request $request)
    {
        $rules = [
            'name' => 'required|string|unique:cars,name',
            'car_type_id' => 'required|exists:car_types,id',
            'car_house_id' => 'required|exists:car_houses,id',
            'license_plate' => 'required|string|unique:cars',
            'model' => 'nullable|string',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg',

            'employees' => 'required|array|max:4',
            'employees.*' => 'exists:employees,id'
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {
            DB::beginTransaction();

            $car = Car::create([
                'name' => $request->name,
                'car_type_id' => $request->car_type_id,
                'car_house_id' => $request->car_house_id,
                'license_plate' => $request->license_plate,
                'model' => $request->model,
            ]);



            // Execute img
            if ($request->hasFile('images')) {
                $images = [];

                foreach ($request->file('images') as $image) {
                    $imageName = time() . '-' . $image->getClientOriginalName();

                    $image->move(public_path('images/cars'), $imageName);

                    // Save
                    CarImage::create([
                        'car_id' => $car->id,
                        'image' => $imageName,
                    ]);

                    $images[] = $imageName;
                }
            }

            // Execute employees
            $driverCount = 0;
            $collectorCount = 0;

            foreach ($request->employees as $employeeId) {
                $employee = Employee::find($employeeId);

                if ($employee && $employee->car_id) {
                    DB::rollBack();
                    return $this->sendResponse(422, "Nhân viên {$employee->name} đã có xe khác!");
                }

                if ($employee->car_house_id != $car->car_house_id) {
                    DB::rollBack();
                    return $this->sendResponse(422, "Nhân viên {$employee->name} và xe được thêm không chung một nhà xe!");
                }

                // Count employee
                if ($employee->role == 0) {
                    $driverCount++;
                } elseif ($employee->role == 1) {
                    $collectorCount++;
                }

                if ($driverCount > 2) {
                    DB::rollBack();
                    return $this->sendResponse(422, "Không thể thêm quá 2 tài xế!");
                }

                if ($collectorCount > 2) {
                    DB::rollBack();
                    return $this->sendResponse(422, "Không thể thêm quá 2 người thu vé!");
                }

                if ($driverCount + $collectorCount > 4) {
                    DB::rollBack();
                    return $this->sendResponse(422, "Tổng số người phụ trách không được vượt quá 4!");
                }

                $employee->car_id = $car->id;
                $employee->save();
            }

            DB::commit();
            return $this->sendResponse(
                201,
                'Tạo mới xe thành công!',
                [
                    'car' => $car,
                    'employee' => $car->employees()->get(['id', 'name', 'role']),
                    'images' => $car->carImages()->get(['id', 'image']),
                ],

            );
        });
    }


    // public function updateCar(Request $request, $id)
    // {
    //     $car = Car::find($id);

    //     if (!$car) {
    //         return $this->sendNotFoundResponse('Không tìm thấy xe!');
    //     }

    //     // Kiểm tra quyền của người dùng
    //     $user = Auth::user();
    //     if ($user->carhouse_id != $car->car_house_id) {
    //         return response()->json([
    //             'status' => 403,
    //             'message' => 'Bạn không có quyền sửa xe của nhà xe khác!'
    //         ], 403);
    //     }

    //     $rules = [
    //         'name' => 'required|string|unique:cars,name,' . $id,
    //         'car_type_id' => 'required|exists:car_types,id',
    //         'car_house_id' => 'required|exists:car_houses,id',
    //         'license_plate' => 'required|string|unique:cars,' . $id,
    //         'model' => 'nullable|string',
    //         'images.*' => 'required|image|mimes:jpeg,png,jpg'
    //     ];

    //     return $this->validateAndExecute($request, $rules, function () use ($request, $car) {
    //         $car->update([
    //             'name' => $request->name ?? $car->name,
    //             'car_type_id' => $request->name ?? $car->name,
    //             'car_house_id' => $request->name ?? $car->name,,
    //             'license_plate' => $request->name ?? $car->name,
    //             'model' => $request->name ?? $car->name,
    //         ]);

    //         // Xử lý ảnh
    //         // 1. Xoá các ảnh được chọn

    //         // Khởi tạo biến $imageDeleteName mặc định là array rỗng
    //         $imageDeleteName = [];

    //         if ($request->has('delete_images')) {
    //             $deleteImages = $request->delete_images;

    //             foreach ($deleteImages as $imageId) {
    //                 // Tìm ảnh bằng id để xoá
    //                 $image = CarImage::find($imageId);
    //                 $imageDeleteName[] = $image->image;

    //                 if ($image) {
    //                     // Delete path
    //                     $image_path = public_path('images/cars/' . $image->image);
    //                     if (file_exists($image_path)) {
    //                         unlink($image_path);
    //                     }

    //                     // delete img
    //                     $image->delete();
    //                 }
    //             }
    //         }

    //         // 2. Thêm ảnh mới (nếu có)
    //         // Khởi tạo biến $images mặc định là array rỗng
    //         $images = [];
    //         // lấy danh sách ảnh có trong DB    
    //         $existingImages = $car->carImages->pluck('name')->toArray();

    //         // Ktr xem có ảnh nào mới không
    //         if ($request->hasFile('images')) {

    //             foreach ($request->file('images') as $image) {
    //                 $imageNameOrg = $image->getClientOriginalName();

    //                 // Kiểm tra tên ảnh có trong DB hay chưa
    //                 if (!in_array($imageNameOrg, $existingImages)) {
    //                     $imageName = time() . '-' . $image->getClientOriginalName();

    //                     // Chuyển ảnh từ tm tạm thời -> tm đích
    //                     $image->move(public_path('images/cars'), $imageName);

    //                     // Save
    //                     CarImage::create([
    //                         'car_id' => $car->id,
    //                         'image' => $imageName
    //                     ]);

    //                     // Thêm tên ảnh vào array $images
    //                     $images[] = $imageName;
    //                 }
    //             }
    //         }

    //         // Gộp dữ liệu
    //         $responseData = [
    //             'car' => $car,
    //             'images' => $images
    //         ];

    //         return $this->sendResponse(200, 'Cập nhật xe thành công!', $responseData);
    //     });
    // }

    public function update(Request $request, $idX)
    {
        $car = Car::find($idX);

        if (!$car) {
            return response()->json([
                'status' => false,
                'message' => 'Car not found!'
            ], 404);
        }

        $validateCar = Validator::make($request->all(), [
            'name' => 'required|string|unique:cars,name,' . $car->id,
            'car_type_id' => 'required|exists:car_types,id',
            'car_house_id' => 'required|exists:car_houses,id',
            'license_plate' => 'required|string|unique:cars,license_plate,' . $car->id,
            'model' => 'nullable|string',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg',

            'employees' => 'required|array|max:4',
            'employees.*' => 'exists:employees,id'
        ]);

        if ($validateCar->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form!',
                'data' => $validateCar->errors(),
            ], 422);
        }

        DB::beginTransaction();
        try {
            $car->name = $request->name;
            $car->car_type_id = $request->car_type_id;
            $car->car_house_id = $request->car_house_id;
            $car->license_plate = $request->license_plate;
            $car->model = $request->model;
            $car->save();


            // Execute img
            // delete selected img
            $imageDeleteName = [];
            if ($request->has('delete_images')) {
                $deleteImages = $request->delete_images;

                foreach ($deleteImages as $imageId) {
                    $image = CarImage::find($imageId);
                    $imageDeleteName[] = $image->image;

                    if ($image) {
                        $image_path = public_path('images/cars/' . $image->image);
                        if (file_exists($image_path)) {
                            unlink($image_path);
                        }

                        $image->delete();
                    }
                }
            }

            // add new img
            $images = [];
            $existingImages = $car->carImages->pluck('name')->toArray();
            if ($request->hasFile('images')) {

                foreach ($request->file('images') as $image) {
                    $imageNameOrg = $image->getClientOriginalName();

                    // Kiểm tra tên ảnh có trong DB hay chưa
                    if (!in_array($imageNameOrg, $existingImages)) {
                        $imageName = time() . '-' . $image->getClientOriginalName();

                        // Chuyển ảnh từ tm tạm thời -> tm đích
                        $image->move(public_path('images/cars'), $imageName);

                        // Save
                        CarImage::create([
                            'car_id' => $idX,
                            'image' => $imageName
                        ]);

                        // Thêm tên ảnh vào array $images
                        $images[] = $imageName;
                    }
                }
            }

            // Execute employees
            $driverCount = 0;
            $collectorCount = 0;

            foreach ($request->employees as $employeeId) {
                $employee = Employee::find($employeeId);

                // Count employee
                if ($employee->role == 0) {
                    $driverCount++;
                } elseif ($employee->role == 1) {
                    $collectorCount++;
                }

                if ($employee && $employee->car_id && $employee->car_id != $car->id) {
                    return $this->sendResponse(422, "Nhân viên {$employee->name} đã có xe khác!");
                }

                if ($employee->car_house_id != $car->car_house_id) {
                    return $this->sendResponse(422, "Nhân viên {$employee->name} và xe {$car->name} không chung một nhà xe!");
                }

                // Execute Employee number
                if ($driverCount > 2) {
                    return $this->sendResponse(422, "Không thể thêm quá 2 tài xế!");
                }
                
                if ($collectorCount > 2) {
                    return $this->sendResponse(422, "Không thể thêm quá 2 người thu vé!");
                }

                $employee->car_id = $car->id;
                $employee->save();
            }

            // delete employee not working with this car
            $currentEmployees = $car->employees()->where('car_id', $car->id)->get();
            foreach ($currentEmployees as $currentEmployee) {
                // So sánh với mảng các employeeId (chứ không phải với một giá trị đơn lẻ)
                if (!in_array($currentEmployee->id, $request->employees)) {
                    $currentEmployee->car_id = null;  // Reset car_id to null
                    $currentEmployee->save();
                }
            }

            DB::commit();
            return $this->sendResponse(200, 'Cập nhật xe thành công!', [
                'car' => $car,
                'employee' => $car->employees()->get(['id', 'name']),
                'new_images' => $images,
                'delete_images' => $imageDeleteName
            ]);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'status' => 500,
                'message' => 'Lỗi hệ thống!',
                'error' => $th->getMessage(),
            ], 500);
        }
    }


    public function destroy($idX)
    {
        // Tìm xe
        $car = Car::find($idX);

        if (!$car) {
            return $this->sendNotFoundResponse('Không tìm thấy xe!');
        }

        $relations = ['carTrips', 'employees'];

        foreach ($relations as $relation) {
            if ($car->{$relation}()->exists()) {
                return $this->sendResponse(400, "Không thể xoá xe vì đang được sử dụng trong bảng {$relation}!");
            }
        }

        try {
            DB::beginTransaction();
            $carImages = $car->carImages;

            foreach ($carImages as $image) {
                $imagePath = public_path('images/cars/' . $image->image);

                if (file_exists($imagePath)) {
                    unlink($imagePath);
                }

                $image->delete();
            }

            $car->delete();

            DB::commit();
            return $this->sendResponse(200, 'Xe đã được xóa thành công!');
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'status' => 500,
                'message' => 'Lỗi hệ thống!',
                'error' => $th->getMessage()
            ], 500);
        }
    }
}
