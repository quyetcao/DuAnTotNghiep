<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Seat;
use Illuminate\Http\Request;
use App\Models\Car;
use App\Models\CarType;
use Illuminate\Support\Facades\Validator;

class SeatController extends Controller
{
    protected function sendResponse($statusCode, $message, $data = null)
    {
        return response()->json([
            'status' => $statusCode,
            'message' => $message,
            'data' => $data,
        ], $statusCode);
    }

    public function showSeat($id)
    {
        $data = Seat::find($id);

        if (!$data) {
            return $this->sendResponse(404, 'Không tìm thấy seat!');
        }

        return $this->sendResponse(200, 'Lấy thông tin chi tiết seat thành công!', $data);
    }

    public function listSeat()
    {
        $seats = Seat::all();
        return $this->sendResponse(200, 'Hiển thị danh sách ghế thành công', $seats);
    }

    public function createSeat(Request $request)
    {
        $validated = $request->validate([
            'car_id' => 'required|exists:cars,id',
            'car_type_id' => 'required|exists:car_types,id',
            'seat_number' => 'required|string',
            'seat_type' => 'required|string|in:vip,standard',
            'price' => 'required|numeric|min:0',
        ]);

        try {
            $seat = Seat::create($validated);

            return $this->sendResponse(201, 'Ghế tạo mới thành công!', $seat);
        } catch (\Throwable $th) {
            return $this->sendResponse(500, $th->getMessage());
        }
    }

    public function updateSeat(Request $request, $id)
    {
        $seat = Seat::find($id);

        if (!$seat) {
            return $this->sendResponse(404, 'Không tìm thấy ghế!');
        }

        $validateSeat = Validator::make($request->all(), [
            'cars_id' => 'required|exists:cars,id',
            'cartype_id' => 'required|exists:car_types,id',
            'seat_number' => 'required|string',
            'seat_type' => 'required|string|in:vip,standard',
            'price' => 'required|numeric|min:0',
        ]);

        if ($validateSeat->fails()) {
            return $this->sendResponse(422, 'Lỗi xác thực form', $validateSeat->errors());
        }

        try {
            $seat->cars_id = $request->cars_id;
            $seat->cartype_id = $request->cartype_id;
            $seat->seat_number = $request->seat_number;
            $seat->seat_type = $request->seat_type;
            $seat->price = $request->price;
            $seat->save();

            return $this->sendResponse(200, 'Cập nhật ghế thành công!', $seat);
        } catch (\Throwable $th) {
            return $this->sendResponse(500, $th->getMessage());
        }
    }

    public function deleteSeat($id)
    {
        $seat = Seat::find($id);

        if (!$seat) {
            return $this->sendResponse(404, 'Không tìm thấy ghế!');
        }

        $seat->delete();

        return $this->sendResponse(200, 'Ghế đã được xóa thành công!', $seat);
    }
}
