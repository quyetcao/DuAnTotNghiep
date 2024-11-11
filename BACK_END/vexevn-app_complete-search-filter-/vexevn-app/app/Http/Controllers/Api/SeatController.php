<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Seat;
use Illuminate\Http\Request;
use App\Models\Car;
use Illuminate\Support\Facades\Validator;


class SeatController extends Controller
{
    // Lấy tất cả các ghế
    public function listSeat()
    {
        $Seat= Seat::all();

        return response()->json([
            'status' => 200,
            'message' => 'Hiển thị danh sách nhà xe thành công',
            'data' => $Seat
        ], 200);
    }

    // Tạo mới ghế
    public function CreateSeat(Request $request)
    {
        // Validate dữ liệu
        $validated = $request->validate([
            'cars_id' => 'required|exists:cars,id', // Đảm bảo rằng cars_id tồn tại trong bảng cars
            'seat_number' => 'required|string',
            'position' => 'required|string',
            'price' => 'required|numeric|min:0',
            'is_sold' => 'boolean',
            'status' => 'required|string|in:available,chosen,not_for_sale',
        ]);
    
        try {
            // Tìm `car` nếu bạn muốn xác nhận
            $car = Car::findOrFail($validated['cars_id']);
    
            // Tạo ghế mới với dữ liệu được xác thực
            $Seat = Seat::create($validated);
    
            return response()->json([
                'status' => 201,
                'message' => 'Ghế tạo mới thành công!',
                'data' => $Seat
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    // Cập nhật thông tin ghế
    public function updateSeat(Request $request, $id)
{
    // Tìm kiếm ghế
    $seat = Seat::find($id);

    if (!$seat) {
        return response()->json([
            'status' => 404,
            'message' => 'Không tìm thấy ghế!'
        ], 404);
    }

    // Validate dữ liệu
    $validateSeat = Validator::make($request->all(), [
        'cars_id' => 'required|exists:cars,id',
        'seat_number' => 'required|string',
        'position' => 'required|string',
        'price' => 'required|numeric|min:0',
        'is_sold' => 'boolean',
        'status' => 'required|string|in:available,chosen,not_for_sale',
    ]);

    if ($validateSeat->fails()) {
        return response()->json([
            'status' => 422,
            'message' => 'Lỗi xác thực form',
            'data' => $validateSeat->errors()
        ], 422);
    }

    try {
        // Cập nhật thông tin ghế
        $seat->cars_id = $request->cars_id;
        $seat->seat_number = $request->seat_number;
        $seat->position = $request->position;
        $seat->price = $request->price;
        $seat->is_sold = $request->is_sold;
        $seat->status = $request->status;

        $seat->save();

        return response()->json([
'status' => 200,
            'message' => 'Cập nhật ghế thành công!',
            'data' => $seat
        ], 200);
    } catch (\Throwable $th) {
        return response()->json([
            'status' => 500,
            'message' => $th->getMessage(),
        ], 500);
    }
    }


    // Xóa ghế
    public function deleteSeat($id)
    {
    // Tìm kiếm ghế
    $seat = Seat::find($id);

    if (!$seat) {
        return response()->json([
            'status' => 404,
            'message' => 'Không tìm thấy ghế!',
        ], 404);
    }

    // Xóa ghế
    $seat->delete();

    return response()->json([
        'status' => 200,
        'message' => 'Ghế đã được xóa thành công!',
        'delete_data' => $seat
    ], 200);
    }

    }