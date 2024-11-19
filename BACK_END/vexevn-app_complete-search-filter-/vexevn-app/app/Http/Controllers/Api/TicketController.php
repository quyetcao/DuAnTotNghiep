<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ticket;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str; //string ramdom
class TicketController extends HelpController
{
    // 1. Hiển thị thông tin vé theo ID
    public function showTicket($id)
    {
        $data = Ticket::with([
            'carTrip', 
            'carTrip.car', 
            'carTrip.pickupPoints', 
            'carTrip.dropoffPoints', 
            'carTrip.seats'
        ])->find($id);
    
        if (!$data) {
            return response()->json(['message' => 'Vé không tồn tại'], 404);
        }
    
        return response()->json([
            'status' => 200,
            'message' => 'Lấy thông tin chi tiết vé thành công!',
            'data' => $data
        ], 200);
    }
    // 2. Danh sách tất cả vé
    public function listTicket()
    {
        $data = Ticket::with([
            'carTrip', 
            'carTrip.car', 
            'carTrip.pickupPoints', 
            'carTrip.dropoffPoints', 
            'carTrip.seats'
        ])->paginate(10);
    
        if ($data->isEmpty()) {
            return response()->json([
                'status' => 404,
                'message' => 'Kho vé đang trống!'
            ], 404);
        }
    
        return response()->json([
            'status' => 200,
            'message' => 'Hiển thị danh sách vé thành công',
            'data' => $data
        ], 200);
    }
    // 3. Tạo vé mới
    public function createTicket(Request $request)
    {
        //name tạo ngẫu nhiên
        $name = $request->has('name') ? $request->name : Str::random(10);
        
          $validator = Validator::make($request->all(), [
            'name' => 'nullable|string|unique:tickets,name,' . $name,
            'status' => 'required|in:not_started,running,completed',
            'car_trip_id' => 'nullable|exists:car_trips,id',
            'car_id' => 'nullable|exists:cars,id',
            'car_route_id' => 'nullable|exists:car_routes,id',
            'seat_car_trips_id' => 'nullable|exists:seat_car_trips,id',
            'pickup_points_id' => 'nullable|exists:pickup_points,id',
            'dropoff_points_id' => 'nullable|exists:dropoff_points,id',
            ]);
           
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
    
        // Tạo vé mới
        $ticket = Ticket::create([
            'name' => $name,
            'status' => $request->status,
            'car_trip_id' => $request->car_trip_id,
            'car_id' => $request->car_id,
            'car_route_id' => $request->car_route_id,
            'seat_car_trips_id' => $request->seat_car_trips_id,
            'pickup_points_id' => $request->pickup_points_id, 
            'dropoff_points_id' => $request->dropoff_points_id, 
        ]);
        
    
        // Lấy thông tin của CarTrip nếu car_trip_id được cung cấp
        $carTrip = null;
        if ($request->car_trip_id) {
            $carTrip = $ticket->carTrip; // Quan hệ 'carTrip' được định nghĩa trong model Ticket
        }
    
        return response()->json([
            'message' => 'Tạo vé thành công',
            'ticket' => $ticket,
            'car_trip' => $carTrip // Trả về thông tin của CarTrip (nếu có)
        ], 201);
    }
    
    
    // 4. Cập nhật thông tin vé
    public function updateTicket(Request $request, $id)
    {
        $data = Ticket::find($id);

        if (!$data) {
            return response()->json(['message' => 'Vé không tồn tại'], 404);
        }
        //tạo name ngẫu nhiên
       
        $name = $request->has('name') ? $request->name : Str::random(10);
        $validator = Validator::make($request->all(), [
           'name' => 'nullable|string|unique:tickets,name,' . $name,
            'status' => 'required|in:not_started,running,completed',
            'car_trip_id' => 'nullable|exists:car_trips,id',
            'car_id' => 'nullable|exists:cars,id',
            'car_route_id' => 'nullable|exists:car_routes,id',
            'seat_car_trips_id' => 'nullable|exists:seat_car_trips,id',
            'pickup_points_id' => 'nullable|exists:pickup_points,id',
            'dropoff_points_id' => 'nullable|exists:dropoff_points,id',
            
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $data->update([
            'name' => $name,
            'status' => $request->status,
            'car_trip_id' => $request->car_trip_id,
            'car_id' => $request->car_id,
            'car_route_id' => $request->car_route_id,
            'seat_car_trips_id' => $request->seat_car_trips_id,
            'pickup_points_id' => $request->pickup_points_id, 
            'dropoff_points_id' => $request->dropoff_points_id, 
        ]);

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
