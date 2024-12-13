<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\{Auth, Validator, DB};

use App\Models\{
    CarType,
    CarHouse,
    Car,
    CarImage,
    PickupPoint,
    DropoffPoint,
    CarRoute,
    CarTripDropoffPoint,
    CarTripPickupPoint,
};

class CarController extends HelpController
{

    /* =====================================================================
                                CAR TYPE
===========================================================================*/

    public function listCarType()
    {
        $data = CarType::all();
        return $this->sendResponse(200, 'Hiển thị danh sách loại xe thành công!', $data);
    }
    public function showCarType($id)
    {
        $data = CarType::find($id);
        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy loại xe!');
        }
        return $this->sendResponse(200, 'Lấy thông tin chi tiết loại xe thành công!', $data);
    }
    
    public function createCarType(Request $request)
    {
        $rules = [
            'name' => 'required|string|unique:car_types,name',
            'quantity_seat' => 'required|integer|min:1',
            'image' => 'nullable|image|mimes:jpeg,png,jpg',
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {
            // Xét ảnh
            $imageName = null;
            if ($request->hasFile('image')) {
                // Tên id của kiểu xe
                $carTypeID = $request->name;
                // Tạo tên file 
                $imageName = time() . '.' . $request->image->extension();
                // Di chuyển ảnh từ tm tạm thời vào thư mục riêng của ảnh xe
                $request->image->move(public_path('images/cartypes'), $imageName);
            }

            // Tạo bài viết mới
            $carType = CarType::create([
                'name' => $request->name,
                'quantity_seat' => $request->quantity_seat,
                'image' => $imageName
            ]);

            return $this->sendResponse(201, 'Điểm đón đã được thêm thành công!', $carType);
        });
    }
    public function updateCarType(Request $request, $id)
    {
        $carType = CarType::find($id);

        if (!$carType) {
            return $this->sendNotFoundResponse('Không tìm thấy loại xe!');
        }

        $rules = [
            'name' => 'required|unique:car_types,name,' . $id,
            'quantity_seat' => 'required|integer|min:1',
            'image' => 'nullable|image|mimes:jpeg,png,jpg',
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request, $carType) {
            // Xét ảnh mới & Bỏ ảnh cũ
            // $imageName = $request->image;
            if ($request->hasfile('image')) {
                // Xoá ảnh cũ
                $old_img_path = public_path('images/cartypes/' . $carType->image);
                if (file_exists($old_img_path && is_file($old_img_path))) {
                    unlink($old_img_path);
                }

                // Nạp ảnh mới
                $imageName = time() . '.' . $request->image->extension();

                $request->image->move(public_path('images/cartypes'), $imageName);

                // Cập nhật image
                $carType->image = $imageName;
            }

            $carType->update([
                'name' => $request->name,
                'quantity_seat' => $request->quantity_seat,
                'image' => $imageName ?? $carType->image
            ]);

            return $this->sendResponse(200, 'Cập nhật loại xe thành công!', $carType);
        });
    }
    public function deleteCarType($id)
    {
        // Tìm id 
        $carType = CarType::find($id);

        if (!$carType) {
            return $this->sendNotFoundResponse('Không tìm thấy loại xe!');
        }

        // Xoa anh && xoa san pham
        if ($carType->image) {
            $imagePath = public_path('images/cartypes/') . $carType->image;

            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }
        return $this->handleDelete(CarType::class, $id, 'Loại xe đã được xóa thành công!');
    }



    /* =====================================================================
                                CAR HOUSE
===========================================================================*/
    public function showCarHouse($id)
    {
        $data = CarHouse::find($id);

        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy nhà xe!');
        }

        return $this->sendResponse(200, 'Lấy thông tin chi tiết nhà xe thành công!', $data);
    }
    public function listCarHouse()
    {
        $data = CarHouse::all();
        return $this->sendResponse(200, 'Hiển thị danh sách nhà xe thành công!', $data);
    }
    public function createCarHouse(Request $request)
    {
        $rules =  [
            'name' => 'required|unique:car_houses,name',
            'phone' => 'required|unique:car_houses,phone|regex:/^[0-9]{10}$/',
            'address' => 'nullable|string',
            'status' => 'required|in:active,inactive,paused'
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {
            $carHouse = CarHouse::create([
                'name' => $request->name,
                'phone' => $request->phone,
                'address' => $request->address,
                'status' => $request->status ?? 'active'
            ]);

            // Trả về thông báo success
            return $this->sendResponse(201, 'Nhà xe tạo mới thành công!', $carHouse);
        });
    }
    public function updateCarHouse(Request $request, $id)
    {
        $carHouse = CarHouse::find($id);

        if (!$carHouse) {
            return $this->sendNotFoundResponse('Không tìm thấy nhà xe!');
        }


        $rules =  [
            'name' => 'required|unique:car_houses,name,' . $id,
            'phone' => 'required|unique:car_houses,phone,' . $id . '|regex:/^[0-9]{10}$/',
            'address' => 'nullable|string',
            'status' => 'required|in:active,inactive,paused'
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request, $carHouse) {
            $carHouse->update([
                'name' => $request->name ?? $carHouse->name,
                'phone' => $request->phone ?? $carHouse->phone,
                'address' => $request->address ?? $carHouse->address,
                'status' => $request->status ?? $carHouse->status,
            ]);

            // Trả về thông báo success
            return $this->sendResponse(201, 'Nhà xe tạo mới thành công!', $carHouse);
        });
    }
    public function deleteCarHouse($id)
    {
        $carHouse = CarHouse::find($id);

        if (!$carHouse) {
            return $this->sendNotFoundResponse('Không tìm thấy nhà xe!');
        }
        return $this->handleDelete(CarHouse::class, $id, 'Nhà xe đã được xóa thành công!');
    }

    /* =====================================================================
                                    CAR 
===========================================================================*/
    public function showCar($id)
    {
        $data = Car::with('carImages', 'carHouse', 'carType')->find($id);

        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy xe!');
        }

        return $this->sendResponse(200, 'Lấy thông tin chi tiết xe thành công!', $data);
    }
    public function listCar()
    {
        $data = Car::with('carImages', 'carHouse', 'carType')->paginate(10);
        return $this->sendResponse(200, 'Hiển thị danh sách xe thành công!', $data);
    }

    public function createCar(Request $request)
    {
        $rules = [
            'name' => 'required|string|unique:cars,name',
            'car_type_id' => 'required|exists:car_types,id',
            'car_house_id' => 'required|exists:car_houses,id',
            'license_plate' => 'required|string|unique:cars',
            'model' => 'nullable|string',
            'images.*' => 'required|image|mimes:jpeg,png,jpg'
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {
            $car = Car::create([
                'name' => $request->name,
                'car_type_id' => $request->car_type_id,
                'car_house_id' => $request->car_house_id,
                'license_plate' => $request->license_plate,
                'model' => $request->model,
            ]);

            // Xử lý ảnh
            if ($request->hasFile('images')) {
                // Khởi tạo biến $images mặc định là array rỗng
                $images = [];

                foreach ($request->file('images') as $image) {
                    // name img
                    $imageName = time() . '-' . $image->getClientOriginalName();
                    // chuyển ảnh từ tm tạm thời sang thư mục chỉ định
                    $image->move(public_path('images/cars'), $imageName);

                    // Save
                    CarImage::create([
                        'car_id' => $car->id,
                        'image' => $imageName,
                    ]);

                    // Thêm tên ảnh vào array $images
                    $images[] = $imageName;
                }
            }

            // Gộp dữ liệu
            $responseData = [
                'car' => $car,
                'images' => $images
            ];

            // Trả về kết quả thành công
            return $this->sendResponse(201, 'Xe đã được tạo thành công!', $responseData);
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

    public function updateCar(Request $request, $idX)
    {
        $car = Car::find($idX);

        if (!$car) {
            return response()->json([
                'status' => false,
                'message' => 'Car not found!'
            ], 404);
        }

        // Kiểm tra quyền của người dùng
        // $user = Auth::user();
        // if ($user->role != 'admin') {
        //     if ($user->carhouse_id != $car->car_house_id) {
        //         return response()->json([
        //             'status' => 403,
        //             'message' => 'Bạn không có quyền sửa xe của nhà xe khác!'
        //         ], 403);
        //     }
        // }


        $validateCar = Validator::make($request->all(), [
            'name' => 'required|string|unique:cars,name,' . $car->id,
            'car_type_id' => 'required|exists:car_types,id',
            'car_house_id' => 'required|exists:car_houses,id',
            'license_plate' => 'required|string|unique:cars,license_plate,' . $car->id,
            'model' => 'nullable|string',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg'
        ]);

        if ($validateCar->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'data' => $validateCar->errors()
            ], 422);
        }

        try {
            // Update lại các giá trị
            $car->name = $request->name;
            $car->car_type_id = $request->car_type_id;
            $car->car_house_id = $request->car_house_id;
            $car->license_plate = $request->license_plate;
            $car->model = $request->model;
            $car->save();


            // Xử lý ảnh
            // 1. Xoá các ảnh được chọn

            // Khởi tạo biến $imageDeleteName mặc định là array rỗng
            $imageDeleteName = [];

            if ($request->has('delete_images')) {
                $deleteImages = $request->delete_images;

                foreach ($deleteImages as $imageId) {
                    // Tìm ảnh bằng id để xoá
                    $image = CarImage::find($imageId);
                    $imageDeleteName[] = $image->image;

                    if ($image) {
                        // Delete path
                        $image_path = public_path('images/cars/' . $image->image);
                        if (file_exists($image_path)) {
                            unlink($image_path);
                        }

                        // delete img
                        $image->delete();
                    }
                }
            }

            // 2. Thêm ảnh mới (nếu có)
            // Khởi tạo biến $images mặc định là array rỗng
            $images = [];
            // lấy danh sách ảnh có trong DB    
            $existingImages = $car->carImages->pluck('name')->toArray();

            // Ktr xem có ảnh nào mới không
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

            return response()->json([
                'status' => true,
                'message' => 'Car updated successfully',
                'data' => [
                    'car' => $car,
                    'new_images' => $images,
                    'delete_images' => $imageDeleteName
                ]
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function deleteCar($idX)
    {
        // Tìm xe
        $car = Car::find($idX);

        if (!$car) {
            return $this->sendNotFoundResponse('Không tìm thấy xe!');
        }

        // Kiểm tra quyền của người dùng
        // $user = Auth::user();
        // if ($user->role != 'admin') {
        //     if ($user->carhouse_id != $car->car_house_id) {
        //         return response()->json([
        //             'status' => 403,
        //             'message' => 'Bạn không có quyền sửa xe của nhà xe khác!'
        //         ], 403);
        //     }
        // }

        try {
            DB::beginTransaction();
            // Xoá ảnh trước (vì nó sẽ còn car_id để nhận dạng)
            $carImages = $car->carImages;

            $deleteImages = [];
            foreach ($carImages as $image) {
                // Truy tới đường dẫn ảnh
                $imagePath = public_path('images/cars/' . $image->image);

                // Kiểm tra file ảnh có tồn tại?
                if (file_exists($imagePath)) {
                    unlink($imagePath);
                }

                // Lưu lại các ảnh đã xoá
                $deleteImages[] = $image->image;

                // Xoá bản ghi ảnh
                $image->delete();
            }

            // Xoá xe 
            $car->delete();
            DB::commit();

            // Trả về kết quả thành công
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

    /* =====================================================================
                        PICK UP POINT 
===========================================================================*/
    public function showPickupPointById($id)
    {

        $data = PickupPoint::find($id);
        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy điểm đón!');
        }
        return $this->sendResponse(200, 'Lấy thông tin chi tiết điểm đón thành công!', $data);
    }



    public function showPickupPoint($carTripId)
    {
        $data = CarTripPickupPoint::where('car_trip_id', $carTripId)->get();
        if ($data->isEmpty()) {
            return $this->sendNotFoundResponse('Không tìm thấy điểm đón!');
        }
        return $this->sendResponse(200, 'Lấy thông tin chi tiết điểm đón thành công!', $data);
    }



    public function getPickupPointByCarHouse($carHouseId)
    {

        $data = PickupPoint::where('car_house_id', $carHouseId)->get();
        if ($data->isEmpty()) {
            return $this->sendNotFoundResponse('Không tìm thấy điểm đón!');
        }
        return $this->sendResponse(200, 'Lấy thông tin chi tiết điểm đón thành công!', $data);
    }


    public function listPickupPoint()
    {
        $data = PickupPoint::all();

        return response()->json([
            'status' => 200,
            'message' => 'Hiển thị danh sách Điểm Đón thành công',
            'data' => $data
        ], 200);
    }
    public function createPickupPoint(Request $request)
    {
        $validatePUP = Validator::make($request->all(), [
            'name' => 'required|string|unique:pickup_points,name',
            'address' => 'nullable|string',
            'car_house_id' => 'nullable|exists:car_houses,id',
            'is_public' => 'required|boolean'
        ]);

        if ($validatePUP->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form',
                'data' => $validatePUP->errors()
            ], 422);
        }

        try {
            $pickupPoint = PickupPoint::create([
                'name' => $request->name,
                'address' => $request->address,
                // 'city_id' => $request->city_id,
                'car_house_id' => $request->car_house_id,
                'is_public' => $request->is_public
            ]);

            return response()->json([
                'status' => 201,
                'message' => 'Điểm đón đã được thêm thành công',
                'data' => $pickupPoint
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage()
            ], 500);
        }
    }
    public function updatePickupPoint(Request $request, $id)
    {
        $pickupPoint = PickupPoint::find($id);

        if (!$pickupPoint) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy điểm đón!',
            ], 404);
        }

        $validatePUP = Validator::make($request->all(), [
            'name' => 'required|string|unique:pickup_points,name,' . $id,
            'address' => 'nullable|string',
            'car_house_id' => 'nullable|exists:car_houses,id',
            'is_public' => 'required|boolean'
        ]);

        if ($validatePUP->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form',
                'data' => $validatePUP->errors()
            ], 422);
        }

        try {
            $pickupPoint->name = $request->name;
            $pickupPoint->address = $request->address;
            // $pickupPoint->city_id = $request->city_id;
            $pickupPoint->car_house_id = $request->car_house_id;
            $pickupPoint->is_public = $request->is_public;

            $pickupPoint->save();

            return response()->json([
                'status' => 200,
                'message' => 'Điểm đón đã được cập nhật thành công',
                'data' => $pickupPoint,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage()
            ], 500);
        }
    }
    public function deletePickupPoint($id)
    {
        $data = PickupPoint::find($id); 
        if (!$data) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy điểm đón!'
            ], 404);
        }

        $data->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Điểm đón đã được xoá thành công',
            'delete_data' => $data
        ], 200);
    }

    /* =====================================================================
                        DROP OFF POINT 
===========================================================================*/
public function showDropoffPointById($id)
    {
        $data = DropoffPoint::find($id);
        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy điểm đón!');
        }
        return $this->sendResponse(200, 'Lấy thông tin chi tiết điểm đón thành công!', $data);
    }

    public function showDropoffPointByCarTrip($carTripId)
    {
        $data = CarTripDropoffPoint::where('car_trip_id', $carTripId)->get();

        if ($data->isEmpty()) {
            return $this->sendNotFoundResponse('Không tìm thấy điểm trả!');
        }
        return $this->sendResponse(200, 'Lấy thông tin chi tiết điểm trả thành công!', $data);
    }
    
    public function getDropoffpointByCarHouse($carHouseId)
    {

        $data = DropoffPoint::where('car_house_id', $carHouseId)->get();
        if ($data->isEmpty()) {
            return $this->sendNotFoundResponse('Không tìm thấy điểm đón!');
        }
        return $this->sendResponse(200, 'Lấy thông tin chi tiết điểm đón thành công!', $data);
    }

    public function listDropoffPoint()
    {
        $data = DropoffPoint::all();

        return response()->json([
            'status' => 200,
            'message' => 'Hiển thị danh sách điểm dừng thành công',
            'data' => $data
        ], 200);
    }
    public function createDropoffPoint(Request $request)
    {
        $validateDOP = Validator::make($request->all(), [
            'name' => 'required|string|unique:pickup_points,name',
            'address' => 'nullable|string',
            // 'city_id' => 'required|exists:cities,id',
            'car_house_id' => 'nullable|exists:car_houses,id',
            'is_public' => 'required|boolean'
        ]);

        if ($validateDOP->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form',
                'data' => $validateDOP->errors()
            ], 422);
        }

        try {
            $dropoffPoint = DropoffPoint::create([
                'name' => $request->name,
                'address' => $request->address,
                // 'city_id' => $request->city_id,
                'car_house_id' => $request->car_house_id,
                'is_public' => $request->is_public
            ]);

            return response()->json([
                'status' => 201,
                'message' => 'Điểm dừng đã được thêm thành công',
                'data' => $dropoffPoint
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage()
            ], 500);
        }
    }
    public function updateDropoffPoint(Request $request, $id)
    {
        $dropoffPoint = DropoffPoint::find($id);

        if (!$dropoffPoint) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy điểm dừng!',
            ], 404);
        }

        $validatePUP = Validator::make($request->all(), [
            'name' => 'required|string|unique:pickup_points,name,' . $id,
            'address' => 'nullable|string',
            // 'city_id' => 'required|exists:cities,id',
            'car_house_id' => 'nullable|exists:car_houses,id',
            'is_public' => 'required|boolean'
        ]);

        if ($validatePUP->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form',
                'data' => $validatePUP->errors()
            ], 422);
        }

        try {
            $dropoffPoint->name = $request->name;
            $dropoffPoint->address = $request->address;
            // $dropoffPoint->city_id = $request->city_id;
            $dropoffPoint->car_house_id = $request->car_house_id;
            $dropoffPoint->is_public = $request->is_public;

            $dropoffPoint->save();

            return response()->json([
                'status' => 200,
                'message' => 'Điểm dừng đã được cập nhật thành công',
                'data' => $dropoffPoint,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage()
            ], 500);
        }
    }
    public function deleteDropoffPoint($id)
    {
        $data = DropoffPoint::find($id);

        if (!$data) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy điểm dừng!'
            ], 404);
        }

        $data->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Điểm dừng đã được xoá thành công',
            'delete_data' => $data
        ], 200);
    }

    /* =====================================================================
                           CAR ROUTE POINT
===========================================================================*/
    public function showCarRoute($id)
    {
        $data = CarRoute::find($id);
        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy Tuyến Đường!');
        }
        return $this->sendResponse(200, 'Lấy thông tin tuyến đường thành công!', $data);
    }

    public function listCarRoute()
    {
        $data = CarRoute::all();

        return response()->json([
            'status' => 200,
            'message' => 'Hiển thị danh sách tuyến đường thành công',
            'data' => $data
        ], 200);
    }
    public function createCarRoute(Request $request)
    {
        $validateCR = Validator::make($request->all(), [
            'city_from' => 'required|string',
            'city_to' => 'required|string',
            'description' => 'nullable|string'
        ]);

        if ($validateCR->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form',
                'data' => $validateCR->errors()
            ], 422);
        }

        try {
            $carRoute = CarRoute::create([
                'city_from' => $request->city_from,
                'city_to' => $request->city_to,
                'description' => $request->description
            ]);

            return response()->json([
                'status' => 201,
                'message' => 'Tuyến đường đã được thêm thành công',
                'data' => $carRoute
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function updateCarRoute(Request $request, $id)
    {
        $carRoute = CarRoute::find($id);

        if (!$carRoute) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy tuyến đường!',
            ], 404);
        }

        $validateCR = Validator::make($request->all(), [
            'city_from' => 'required|string',
            'city_to' => 'required|string',
            'description' => 'nullable|string'
        ]);

        if ($validateCR->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form',
                'data' => $validateCR->errors()
            ], 422);
        }

        try {
            $carRoute->city_from = $request->city_from;
            $carRoute->city_to = $request->city_to;
            $carRoute->description = $request->description;

            $carRoute->save();

            return response()->json([
                'status' => 200,
                'message' => 'Tuyến đường đã được cập nhật thành công',
                'data' => $carRoute
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function deleteCarRoute($id)
    {
        $carRoute = CarRoute::find($id);

        if (!$carRoute) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy tuyến đường!',
            ], 404);
        }

        $carRoute->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Tuyến đường đã được xoá thành công',
            'delete_data' => $carRoute
        ], 200);
    }
}
