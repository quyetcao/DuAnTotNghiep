<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\CarRoute;

class CarRouteController extends HelpController
{
    /* =====================================================================
                           CAR ROUTE POINT
===========================================================================*/
    public function index(Request $request)
    {
        if ($request->query('all') === 'true') {
            $data = CarRoute::all();
            return $this->sendResponse(200, 'Hiển thị danh sách tuyến đường thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);
        $data = CarRoute::paginate((int)$perPage);
        return $this->sendResponse(200, "Hiển thị danh sách tuyến đường thành công! Với {$perPage} đối tượng mỗi trang", $data);
    }


    public function show($id)
    {
        $data = CarRoute::find($id);
        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy tuyến đường!');
        }
        return $this->sendResponse(200, 'Lấy thông tin tuyến đường thành công!', $data);
    }


    public function store(Request $request)
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
                'message' => 'Thêm mới tuyến đường thành công!',
                'data' => $carRoute
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
                'message' => 'Cập nhật tuyến đường thành công!',
                'data' => $carRoute
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
        $carRoute = CarRoute::find($id);
        if (!$carRoute) {
            return $this->sendNotFoundResponse('Không tìm thấy tuyến đường!');
        }

        $relations = ['carTrips'];

        foreach ($relations as $relation) {
            if ($carRoute->{$relation}()->exists()) {
                return $this->sendResponse(400, "Không thể xoá tuyến đường vì đang được sử dụng trong bảng {$relation}!");
            }
        }

        $carRoute->delete();

        return $this->sendResponse(200, 'Xoá tuyến đường thành công!');
    }
}
