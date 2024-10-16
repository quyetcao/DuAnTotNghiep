<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use App\Models\CarType;
use App\Models\CarHouse;
use App\Models\Car;
use App\Models\CarImage;
// use App\Models\City;
use App\Models\PickupPoint;
use App\Models\DropoffPoint;
use App\Models\BusRoute;
use App\Models\CarRoute;
// use App\Models\CarTrip;


class CarController extends Controller
{

    /* =====================================================================
                                CAR TYPE
===========================================================================*/
    public function listCarType()
    {
        $data = CarType::all();

        return response()->json([
            'status' => 200,
            'message' => 'Hiển thị danh sách Loại Xe thành công',
            'data' => $data
        ], 200);
    }

    public function addCarType(Request $request)
    {
        $validateCarType = Validator::make($request->all(), [
            'name' => 'required|string|unique:car_types,name',
            'quantity_seat' => 'required|integer|min:1',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', //max 2MB
        ]);

        if ($validateCarType->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form',
                'data' => $validateCarType->errors(),
            ], 422);
        }

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

        try {

            $inputData = array(
                'name' => $request->name,
                'quantity_seat' => $request->quantity_seat,
                'image' => $imageName,
            );
            $carType = CarType::create($inputData);

            return response()->json([
                'status' => 201,
                'message' => 'Điểm đón đã được thêm thành công',
                'data' => $carType,
            ], 201);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function updateCarType(Request $request, $id)
    {
        $data = CarType::find($id);

        if (!$data) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy loại xe!',
            ], 404);
        }

        $validateCartype = Validator::make($request->all(), [
            'name' => 'required|unique:car_types,name,' . $id,
            'quantity_seat' => 'required|integer|min:1',
            'image' => 'nullable|image|mimes:png,jpg,jpeg,gif|max:2048',
        ]);

        if ($validateCartype->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form',
                'data' => $validateCartype->errors(),
            ], 422);
        }

        // Xét ảnh mới & Bỏ ảnh cũ
        // $imageName = $request->image;
        if ($request->hasfile('image')) {
            // Xoá ảnh cũ
            $old_img_path = public_path('images/cartypes/' . $data->image);
            if (file_exists($old_img_path && is_file($old_img_path))) {
                unlink($old_img_path);
            }

            // Nạp ảnh mới
            $imageName = time() . '.' . $request->image->extension();

            $request->image->move(public_path('images/cartypes'), $imageName);

            // Cập nhật image
            $data->image = $imageName;
        }

        try {
            //    Cập nhật giá trị
            $data->name = $request->name;
            $data->quantity_seat = $request->quantity_seat;

            $data->save();

            return response()->json([
                'status' => 200,
                'message' => 'Loại xe đã được cập nhật thành công',
                'data' => $data
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function deleteCarType($idLX)
    {
        // Tìm id 
        $carType = CarType::find($idLX);

        // Neu tim ko thay
        if (!$carType) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy loại xe',
            ], 404);
        }

        // Xoa anh && xoa san pham
        if ($carType->image) {
            $imagePath = public_path('images/cartypes/') . $carType->image;

            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }
        $carType->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Loại xe đã được xoá thành công',
            'delete_data' => $carType
        ], 200);
    }



    /* =====================================================================
                                CAR HOUSE
===========================================================================*/

    public function listCarHouse()
    {
        $carHouse = CarHouse::all();

        return response()->json([
            'status' => true,
            'message' => 'Product listed successfully',
            'data' => $carHouse
        ], 200);
    }

    public function addCarHouse(Request $request)
    {
        $validateCarHouse = Validator::make($request->all(), [
            'name' => 'required|unique:car_houses,name',
            'phone' => 'required|unique:car_houses,phone'
        ]);

        if ($validateCarHouse->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'data' => $validateCarHouse->errors()
            ], 422);
        }

        try {

            $inputData = array(
                'name' => $request->name,
                'phone' => $request->phone,
            );
            $carHouse = CarHouse::create($inputData);

            return response()->json([
                'status' => true,
                'message' => 'Car House Added Successfully',
                'data' => $carHouse
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function updateCarHouse(Request $request, $idNX)
    {
        $carHouse = CarHouse::find($idNX);

        if (!$carHouse) {
            return response()->json([
                'status' => false,
                'message' => 'Car Type not found'
            ], 404);
        }

        $validateCarhouse = Validator::make($request->all(), [
            'name' => 'required|unique:car_houses,name,' . $idNX,
            'phone' => 'required|unique:car_houses,phone,' . $idNX
        ]);

        if ($validateCarhouse->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'data' => $validateCarhouse->errors()
            ], 422);
        }

        try {
            // Cập nhật giá trị 
            $carHouse->name = $request->name;
            $carHouse->phone = $request->phone;

            $carHouse->save();

            return response()->json([
                'status' => true,
                'message' => 'Car House updated successfully',
                'data' => $carHouse
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function deleteCarHouse($idNX)
    {
        $carHouse = CarHouse::find($idNX);

        if (!$carHouse) {
            return response()->json([
                'status' => false,
                'message' => 'Product not found',
            ], 404);
        }

        $carHouse->delete();

        return response()->json([
            'status' => true,
            'message' => 'Car House deleted successfully',
            'delete_data' => $carHouse
        ], 200);
    }

    /* =====================================================================
                                    CAR 
===========================================================================*/
    public function listCar()
    {
        // Lấy all xe kèm ảnh liên quan của mỗi xe
        $cars = Car::with('carImages')->get();

        // Lấy loại xe và nhà xe
        $carTypes = CarType::all();
        $carHouses = CarHouse::all();

        return response()->json([
            'status' => true,
            'message' => 'Car, Car Type and Car House listed successfully',
            'data' => [
                'cars' => $cars,
                'carTypes' => $carTypes,
                'carHouses' => $carHouses,
            ]
        ], 200);
    }

    public function uploadCar(Request $request)
    {
        $validatorCar = Validator::make($request->all(), [
            'name' => 'required|string|unique:cars,name',
            'car_type_id' => 'required|exists:car_types,id',
            'car_house_id' => 'required|exists:car_houses,id',
            'license_plate' => 'required|string|unique:cars',
            'model' => 'nullable|string',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        if ($validatorCar->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'data' => $validatorCar->errors()
            ], 422);
        }

        try {
            // Cars
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

            return response()->json([
                'status' => true,
                'message' => 'A car added successfully',
                'data' => [
                    'car' => $car,
                    'images' => $images
                ]
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function updateCar(Request $request, $idX)
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
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
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
            return response()->json([
                'status' => false,
                'message' => 'Car not found!'
            ], 404);
        }

        try {
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


            return response()->json([
                'status' => true,
                'message' => 'test',
                'delete_data' => [
                    'car' => $car,
                    // 'images' => $deleteImages
                ]
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

/*=====================================================================
                            CITY 
===========================================================================

    public function listCity()
    {
        $cities = City::all();

        return response()->json([
            'status' => true,
            'message' => 'Cities listed successfully',
            'data' => $cities
        ], 200);
    }

    public function addCity(Request $request)
    {
        $validateCity = Validator::make($request->all(), [
            'name' => 'required|string|unique:cities,name'
        ]);

        if ($validateCity->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'data' => $validateCity->errors()
            ], 422);
        }

        try {
            $city = City::create([
                'name' => $request->name
            ]);

            return response()->json([
                'status' => true,
                'message' => 'City added successfully',
                'data' => $city
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function updateCity(Request $request, $id)
    {
        $city = City::find($id);

        if (!$city) {
            return response()->json([
                'status' => false,
                'message' => 'City not found!'
            ], 404);
        }

        $validateCity = Validator::make($request->all(), [
            'name' => 'required|string|unique:cities,name,' . $id
        ]);
        // $validateCity = $request->validate([
        //     'name' => 'required|string'
        // ]);

        if ($validateCity->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'data' => $validateCity->errors()
            ], 422);
        }


        try {
            $city->name = $request->name;
            $city->save();
            // $city->update([
            //     'name' => $validateCity['name'],
            // ]);

            return response()->json([
                'status' => true,
                'message' => 'City updated successfully',
                'data' => $city
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function deleteCity($id)
    {
        $city = City::find($id);

        if (!$city) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy thành phố!'
            ], 404);
        }


        $city->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Thành phố đã được xoá thành công',
            'delete_data' => $city
        ], 200);
    }
*/

/* =====================================================================
                        PICK UP POINT 
===========================================================================*/
    public function listPickupPoint() {
        $data = PickupPoint::all();

        return response()->json([
            'status' => 200,
            'message' => 'Hiển thị danh sách Điểm Đón thành công',
            'data' => $data
        ], 200);
    }
    public function uploadPickupPoint(Request $request)
    {
        $validatePUP = Validator::make($request->all(), [
            'name' => 'required|string|unique:pickup_points,name',
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
            ],422);
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
    public function updatePickupPoint(Request $request, $id) {
        $pickupPoint = PickupPoint::find($id);

        if (!$pickupPoint) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy điểm đón!',
            ], 404);
        }

        $validatePUP = Validator::make($request->all(), [
            'name' => 'required|string|unique:pickup_points,name,' .$id,
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
    public function deletePickupPoint ($id) {
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
public function listDropoffPoint() {
    $data = DropoffPoint::all();

    return response()->json([
        'status' => 200,
        'message' => 'Hiển thị danh sách điểm dừng thành công',
        'data' => $data
    ], 200);
}
public function uploadDropoffPoint(Request $request)
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
        ],422);
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
public function updateDropoffPoint(Request $request, $id) {
    $dropoffPoint = DropoffPoint::find($id);

    if (!$dropoffPoint) {
        return response()->json([
            'status' => 404,
            'message' => 'Không tìm thấy điểm dừng!',
        ], 404);
    }

    $validatePUP = Validator::make($request->all(), [
        'name' => 'required|string|unique:pickup_points,name,' .$id,
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
public function deleteDropoffPoint ($id) {
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
                            CAR ROUTE
===========================================================================*/
public function listCarRoute() {
    $data = CarRoute::all();

    return response()->json([
        'status' => 200,
        'message' => 'Hiển thị danh sách tuyến đường thành công',
        'data' => $data
    ], 200);
}
public function uploadCarRoute(Request $request) {
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

public function updateCarRoute(Request $request, $id) {
    $carRoute = CarRoute::find($id);

    if(!$carRoute) {
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

public function deleteCarRoute($id) {
    $carRoute = CarRoute::find($id);

    if(!$carRoute) {
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
