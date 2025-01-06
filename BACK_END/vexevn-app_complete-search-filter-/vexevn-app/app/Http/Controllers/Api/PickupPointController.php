<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\{
    CarHouse,
    CarTrip,
    PickupPoint,
    CarTripPickupPoint,
};

class PickupPointController extends HelpController
{
    public function index(Request $request)
    {
        if ($request->query('all') === 'true') {
            $data = PickupPoint::all();
            return $this->sendResponse(200, 'Hiển thị danh sách điểm đón thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);
        $data = PickupPoint::paginate((int)$perPage);
        return $this->sendResponse(200, "Hiển thị danh sách điểm đón thành công! Với {$perPage} đối tượng mỗi trang", $data);
    }


    public function show($id)
    {

        $data = PickupPoint::find($id);
        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy điểm đón!');
        }
        return $this->sendResponse(200, 'Lấy thông tin chi tiết điểm đón thành công!', $data);
    }


    public function getPickupPointByCarTrip(Request $request, $id)
    {
        $carTrip = carTrip::find($id);
        if(!$carTrip) {
            return $this->sendNotFoundResponse("Không tồn tại chuyến xe với id là {$id}!");
        }

        if ($request->query('all') == 'true') {
            $data = CarTripPickupPoint::where('car_trip_id', $id)->get();
            
            if ($data->isEmpty()) {
                return $this->sendNotFoundResponse('Không tìm thấy mối quan hệ điểm đón nào liên quan tới chuyến xe này!');
            }

            return $this->sendResponse(200, 'Lấy thông tin chi tiết điểm đón theo chuyến xe thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);
        $data = CarTripPickupPoint::where('car_trip_id', $id)->paginate((int)$perPage);

        if ($data->isEmpty()) {
            return $this->sendNotFoundResponse('Không tìm thấy mối quan hệ điểm đón nào liên quan tới chuyến xe này!');
        }

        return $this->sendResponse(200, 
        "Tìm thấy điểm đón có liên quan tới chuyến xe thành công! Với {$perPage} đối tượng mỗi trang", 
        $data);
    }


    public function getPickupPointByCarHouse(Request $request, $id)
    {   
        $carHouse = CarHouse::find($id);
        
        if(!$carHouse) {
            return $this->sendNotFoundResponse("Không tồn tại nhà xe với id là {$id}!");
        }

        if ($request->query('all') == 'true') {
            $data = PickupPoint::where('car_house_id', $id)->get();
            
            if ($data->isEmpty()) {
                return $this->sendNotFoundResponse('Không tìm thấy điểm đón của nhà xe này!');
            }

            return $this->sendResponse(200, 'Lấy thông tin chi tiết điểm đón theo nhà xe thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);
        $data = PickupPoint::where('car_house_id', $id)->paginate((int)$perPage);

        if ($data->isEmpty()) {
            return $this->sendNotFoundResponse('Không tìm thấy điểm đón của nhà xe này!');
        }
        
        return $this->sendResponse(200, 
        "Lấy thông tin chi tiết điểm đón theo nhà xe thành công! Với {$perPage} đối tượng mỗi trang", 
        $data);        
    }


    public function store(Request $request)
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

    public function update(Request $request, $id)
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

    public function destroy($id)
    {
        $pup = PickupPoint::find($id);
        if (!$pup) {
            return $this->sendNotFoundResponse('Không tìm thấy điểm đón!');
        }

        $relations = ['carTrips'];

        foreach ($relations as $relation) {
            if ($pup->{$relation}()->exists()) {
                return $this->sendResponse(400, "Không thể xoá điểm đón vì đang được sử dụng trong bảng {$relation}!");
            }
        }

        $pup->delete();

        return $this->sendResponse(200, 'Xoá điểm đón thành công!');
    }
}
