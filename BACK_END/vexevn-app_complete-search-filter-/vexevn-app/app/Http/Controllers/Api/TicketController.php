<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ticket;
use Illuminate\Support\Facades\Validator;

class TicketController extends HelpController
{
    // 1. Hiển thị thông tin vé theo ID
    public function showTicket($id)
    {
        $data = Ticket::with(['carTrip','car','pickupPoints', 'dropoffPoints'])->find($id);
    
        if (!$data) {
            return response()->json(['message' => 'Vé không tồn tại'], 404);
        }
    
        return response()->json($data);
    }
    

    // 2. Danh sách tất cả vé
    public function listTicket()
    {
        $data = Ticket::with(['carTrip','car','pickupPoints', 'dropoffPoints'])->paginate(10);
    
        if ($data->isEmpty()) { //isEmpty kiểm tra data
            return response()->json([
                'status' => 404,
                'message' => 'Kho vé đang trống!'
            ], 404);
        }
    
        return $this->sendResponse(
            200, 'Hiển thị danh sách vé thành công', $data
        );
    }
    

    // 3. Tạo vé mới
    public function createTicket(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'status' => 'required|in:not_started,running,completed',
            'car_trip_id' => 'nullable|exists:car_trips,id',
            'car_id' => 'nullable|exists:cars,id',
            'car_route_id' => 'nullable|exists:car_routes,id',

            'pickup_points.*.id' => 'required|exists:pickup_points,id',
            'pickup_points.*.pickup_time' => 'required|date_format:H:i',
            'dropoff_points.*.id' => 'required|exists:dropoff_points,id',
            'dropoff_points.*.dropoff_time' => 'required|date_format:H:i',
        ]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
    
        $ticket = Ticket::create([
            'name' => $request->name,
            'status' => $request->status,
            'car_trip_id' => $request->car_trip_id,
            'car_id' => $request->car_id,
            'car_route_id' => $request->car_route_id,
        ]);
    
        return response()->json(['message' => 'Tạo vé thành công', 'ticket' => $ticket], 201);
    }
    
    // 4. Cập nhật thông tin vé
    public function updateTicket(Request $request, $id)
    {
        $data = Ticket::find($id);

        if (!$data) {
            return response()->json(['message' => 'Vé không tồn tại'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'nullable|string',
            'status' => 'nullable|in:not_started,running,completed',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        if ($request->has('name')) {
            $data->name = $request->name;
        }
        if ($request->has('status')) {
            $data->status = $request->status;
        }

        $data->save();

        return response()->json(['message' => 'Cập nhật vé thành công', 'ticket' => $data]);
    }

    // 5. Xóa vé theo ID
    public function deleteTicket($id)
    {
        $data = Ticket::find($id);

        if (!$data) {
            return response()->json(['message' => 'Vé không tồn tại'], 404);
        }

        $data->delete();

        return response()->json(['message' => 'Xóa vé thành công']);
    }
}
