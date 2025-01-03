<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SeatCarTrip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SeatCarTripController extends Controller
{
    protected function sendResponse($statusCode, $message, $data = null)
    {
        return response()->json([
            'status' => $statusCode,
            'message' => $message,
            'data' => $data,
        ], $statusCode);
    }

    public function showSeatCarTrip($id)
    {
        $data = SeatCarTrip::find($id);

        if (!$data) {
            return $this->sendResponse(404, 'Không tìm thấy thông tin seat car trip!');
        }

        return $this->sendResponse(200, 'Lấy thông tin chi tiết seat car trip thành công!', $data);
    }

    public function showSeatCarTripByCarTripId($carTripId)
    {
        $data = SeatCarTrip::where('car_trip_id', $carTripId)->get();

        if ($data->isEmpty()) {
            return $this->sendResponse(404, 'Không tìm thấy thông tin cho car_trip_id đã cho!');
        }

        return $this->sendResponse(200, 'Lấy thông tin chi tiết cho car_trip_id thành công!', $data);
    }

    public function listSeatCarTrips()
    {
        $seatCarTrips = SeatCarTrip::all();
        return $this->sendResponse(200, 'Hiển thị danh sách seat car trip thành công', $seatCarTrips);
    }

    public function createSeatCarTrip(Request $request)
    {
        $validated = $request->validate([
            'seat_id' => 'required|exists:seats,id',
            'car_id' => 'required|exists:cars,id',
            'car_trip_id' => 'required|exists:trips,id',
            'is_available' => 'boolean',
            'booking_method' => 'in:hotline,counter,web', 
        ]);

        try {
            $seatCarTrip = SeatCarTrip::create($validated);

            return $this->sendResponse(201, 'Tạo mới seat car trip thành công!', $seatCarTrip);
        } catch (\Throwable $th) {
            return $this->sendResponse(500, $th->getMessage());
        }
    }

    public function updateSeatCarTrip(Request $request, $id)
    {
        $seatCarTrip = SeatCarTrip::find($id);

        if (!$seatCarTrip) {
            return $this->sendResponse(404, 'Không tìm thấy thông tin seat car trip!');
        }

        $validateSeatCarTrip = Validator::make($request->all(), [
            'seat_id' => 'required|exists:seats,id',
            'car_id' => 'required|exists:cars,id',
            'car_trip_id' => 'required|exists:trips,id',
            'is_available' => 'boolean',
            'booking_method' => 'in:hotline,counter,web', 
        ]);

        if ($validateSeatCarTrip->fails()) {
            return $this->sendResponse(422, 'Lỗi xác thực form', $validateSeatCarTrip->errors());
        }

        try {
            $seatCarTrip->seat_id = $request->seat_id;
            $seatCarTrip->car_id = $request->car_id;
            $seatCarTrip->car_trip_id = $request->car_trip_id;
            $seatCarTrip->is_available = $request->is_available;
            $seatCarTrip->booking_method = $request->booking_method; // Cập nhật booking_method
            $seatCarTrip->save();

            return $this->sendResponse(200, 'Cập nhật seat car trip thành công!', $seatCarTrip);
        } catch (\Throwable $th) {
            return $this->sendResponse(500, $th->getMessage());
        }
    }

    public function deleteSeatCarTrip($id)
    {
        $seatCarTrip = SeatCarTrip::find($id);

        if (!$seatCarTrip) {
            return $this->sendResponse(404, 'Không tìm thấy thông tin seat car trip!');
        }

        $seatCarTrip->delete();

        return $this->sendResponse(200, 'Xóa seat car trip thành công!', $seatCarTrip);
    }
}
