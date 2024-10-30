<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;

use App\Models\CarTrip;
use App\Models\CarRoute;

class SearchController extends Controller
{
    public function searchCarTrip(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'city_from' => 'required|string',
            'city_to' => 'required|string',
            'departure_date' => 'required|date|after_or_equal:today',
            'return_date' => 'nullable|date|after_or_equal:departure_date',
            'departure_time_from' => 'nullable|date_format:H:i',
            'departure_time_to' => 'nullable|date_format:H:i|after:departure_time_from',
            'price_from' => 'nullable|numeric|min:0',
            'price_to' => 'nullable|numeric|min:0|gte:price_from|lte:2000000',
            'car_type_id' => 'nullable|exists:car_types,id',
            'car_house_id' => 'nullable|exists:car_houses,id',
            'sort_by' => 'nullable|string|in:price_asc,price_desc,earliest_departure,latest_departure'
        ]);

        if ($validation->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form!',
                'errors' => $validation->errors(),
            ], 422);
        }



        // Kiểm tra tuyến đường
        $carRoute = CarRoute::where('city_from', $request->city_from)
                            ->where('city_to', $request->city_to)
                            ->first();
        
        if(!$carRoute) {
            return response()->json([
                'status' => 404,
                'message' => 'Tuyến đường này không tồn tại trong hệ thống',
                'data' => $carRoute
            ], 404);
        }

        // Kiểm tra chuyến xe 
        $tripsQuery  = Cartrip::where('car_route_id', $carRoute->id)
                        ->where('departure_date', '>=', $request->departure_date);
        
        // Nếu có return_date thì thêm điều kiện
        if ($request->filled('return_date')) {
            $tripsQuery->where('return_date', '<=', $request->return_date);
        }

        // **THÊM LỌC: GIỜ ĐI, GIÁ VÉ, NHÀ XE và LOẠI XE
        if($request->filled('departure_time_from') && $request->filled('departure_time_to')) {
            // Lọc giờ đi (theo phạm vi && kq tương đối)
            $tripsQuery->whereHas('pickupPoints', function($query) use ($request) {
                $query->whereBetween('pickup_time', [$request->departure_time_from, $request->departure_time_to]);
            });
        }

        // lọc giá
        if ($request->filled('price_from') && $request->filled('price_to')) {
            $tripsQuery->whereBetween('price', [$request->price_from, $request->price_to]);
        }

        // Lọc loại xe
        if ($request->filled('car_type_id')) {
            $tripsQuery->whereHas('car', function($query) use ($request) {
                $query->where('car_type_id', $request->car_type_id);
            });
        }

        // Lọc theo nhà xe
        if ($request->filled('car_house_id')) {
            $tripsQuery->whereHas('car', function($query) use ($request) {
                $query->where('car_house_id', $request->car_house_id);
            });
        }

        // THÊM LOGIC SẮP XẾP
        if($request->filled('sort_by')) {
            switch ($request->sort_by) {
                case 'price_asc':
                    $tripsQuery->orderBy('price', 'asc');
                    break;

                case 'price_desc':
                    $tripsQuery->orderBy('price', 'desc');
                    break;

                case 'earliest_departure':
                    $tripsQuery->whereHas('pickupPoints', function($query) {
                        $query->orderBy('pickup_time', 'asc');
                    });
                    break;
                
                case 'latest_departure':
                    $tripsQuery->whereHas('pickupPoints', function($query) {
                        $query->orderBy('pickup_time', 'desc');
                    });
                    break;
                
                default:
                    break;
            }
        }


        // Lấy kết quả chuyến xe
        // $trips = $tripsQuery->with('pickupPoints')->get();
        $trips = $tripsQuery->with('pickupPoints')->get();
                        
        if($trips->isEmpty()) {
            return response()->json([
                'status' => 404,
                'message' => 'Hiện không có chuyến xe phù hợp với tuyến đường',
                'data' => $trips
            ], 404);
        }

        return response()->json([
            'status' => 200,
            'message' => 'Tìm kiếm chuyến đi thành công',
            'data' => $trips
        ], 200);
        
    }
}
