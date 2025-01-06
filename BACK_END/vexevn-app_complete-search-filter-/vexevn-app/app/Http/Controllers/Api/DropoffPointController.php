<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\{
    DropoffPoint,
    CarTripDropoffPoint,
    CarHouse,
    CarTrip,
};

class DropoffPointController extends HelpController
{
    /* =====================================================================
                        DROP OFF POINT 
===========================================================================*/
    public function index(Request $request)
    {
        if ($request->query('all') === 'true') {
            $data = DropoffPoint::all();
            return $this->sendResponse(200, 'Hiển thị danh sách điểm dừng thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);
        $data = DropoffPoint::paginate((int)$perPage);
        return $this->sendResponse(200, "Hiển thị danh sách điểm dừng thành công! Với {$perPage} đối tượng mỗi trang", $data);
    }


    public function show($id)
    {
        $data = DropoffPoint::find($id);
        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy điểm dừng!');
        }
        return $this->sendResponse(200, 'Lấy thông tin chi tiết điểm dừng thành công!', $data);
    }

    public function getDropoffPointByCarTrip(Request $request, $id)
    {
        $carTrip = carTrip::find($id);
        if (!$carTrip) {
            return $this->sendNotFoundResponse("Không tồn tại chuyến xe với id là {$id}!");
        }

        if ($request->query('all') == 'true') {
            $data = CarTripDropoffPoint::where('car_trip_id', $id)->get();

            if ($data->isEmpty()) {
                return $this->sendNotFoundResponse('Không tìm thấy mối quan hệ điểm dừng nào liên quan tới chuyến xe này!');
            }

            return $this->sendResponse(200, 'Lấy thông tin chi tiết điểm dừng theo chuyến xe thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);
        $data = CarTripDropoffPoint::where('car_trip_id', $id)->paginate((int)$perPage);

        if ($data->isEmpty()) {
            return $this->sendNotFoundResponse('Không tìm thấy mối quan hệ điểm dừng nào liên quan tới chuyến xe này!');
        }

        return $this->sendResponse(
            200,
            "Tìm thấy điểm dừng có liên quan tới chuyến xe thành công! Với {$perPage} đối tượng mỗi trang",
            $data
        );
    }

    public function getDropoffpointByCarHouse(Request $request, $id)
    {

        $carHouse = CarHouse::find($id);

        if (!$carHouse) {
            return $this->sendNotFoundResponse("Không tồn tại nhà xe với id là {$id}!");
        }

        if ($request->query('all') == 'true') {
            $data = DropoffPoint::where('car_house_id', $id)->get();

            if ($data->isEmpty()) {
                return $this->sendNotFoundResponse('Không tìm thấy điểm dừng của nhà xe này!');
            }

            return $this->sendResponse(200, 'Lấy thông tin chi tiết điểm dừng theo nhà xe thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);
        $data = DropoffPoint::where('car_house_id', $id)->paginate((int)$perPage);

        if ($data->isEmpty()) {
            return $this->sendNotFoundResponse('Không tìm thấy điểm dừng của nhà xe này!');
        }

        return $this->sendResponse(
            200,
            "Lấy thông tin chi tiết điểm dừng theo nhà xe thành công! Với {$perPage} đối tượng mỗi trang",
            $data
        );
    }


    public function store(Request $request)
    {
        $validateDOP = Validator::make($request->all(), [
            'name' => 'required|string|unique:dropoff_points,name',
            'address' => 'nullable|string',
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
                'message' => 'Thêm mới điểm dừng thành công!',
                'data' => $dropoffPoint
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
        $dropoffPoint = DropoffPoint::find($id);

        if (!$dropoffPoint) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy điểm dừng!',
            ], 404);
        }

        $validatePUP = Validator::make($request->all(), [
            'name' => 'required|string|unique:dropoff_points,name,' . $id,
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
                'message' => 'Cập nhật điểm dừng thành công!',
                'data' => $dropoffPoint,
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
        $dop = DropoffPoint::find($id);
        if (!$dop) {
            return $this->sendNotFoundResponse('Không tìm thấy điểm dừng!');
        }

        $relations = ['carTrips'];

        foreach ($relations as $relation) {
            if ($dop->{$relation}()->exists()) {
                return $this->sendResponse(400, "Không thể xoá điểm dừng vì đang được sử dụng trong bảng {$relation}!");
            }
        }

        $dop->delete();

        return $this->sendResponse(200, 'Xoá điểm dừng thành công!');
    }
}
