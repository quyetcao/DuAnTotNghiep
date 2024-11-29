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
        $ticket = Ticket::with([
            'orders', 
            'carTrip', 
            'carTrip.car', 
            'carTrip.pickupPoints', 
            'carTrip.dropoffPoints', 
            'carTrip.seats'
        ])->find($id);
    
        if (!$ticket) {
            return response()->json(['message' => 'Vé không tồn tại'], 404);
        }
    
        return response()->json([
            'status' => 200,
            'message' => 'Lấy thông tin chi tiết vé thành công!',
            'data' => $ticket
        ], 200);
    }
    // 2. Danh sách tất cả vé
    public function listTicket()
    {
        $ticket = Ticket::with([
            'orders', 
            'carTrip', 
            'carTrip.car', 
            'carTrip.pickupPoints', 
            'carTrip.dropoffPoints', 
            'carTrip.seats'
        ])->paginate(10);
    
        if ($ticket->isEmpty()) {
            return response()->json([
                'status' => 404,
                'message' => 'Kho vé đang trống!'
            ], 404);
        }
    
        return response()->json([
            'status' => 200,
            'message' => 'Hiển thị danh sách vé thành công',
            'data' => $ticket
        ], 200);
    }
    // 3. Tạo vé mới
    public function createTicket(Request $request)
    {
        //name tạo ngẫu nhiên
        $name = $request->has('name') ? $request->name : Str::random(10);
        
          $validator = Validator::make($request->all(), [
            'name' => 'nullable|string|unique:ticket,name,' . $name,
            'orders_id' => 'nullable|exists:orders,id',
            'car_trip_id' => 'nullable|exists:car_trips,id',
            'car_id' => 'nullable|exists:cars,id',
            'car_route_id' => 'nullable|exists:car_routes,id',
            'seats_id' => 'nullable|exists:seats,id',
            'pickup_points_id' => 'nullable|exists:pickup_points,id',
            'dropoff_points_id' => 'nullable|exists:dropoff_points,id',
            ]);
           
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
    
        // Tạo vé mới
        $ticket = Ticket::create([
            'name' => $name,
            'orders_id' => $request->orders_id,
            'car_trip_id' => $request->car_trip_id,
            'car_id' => $request->car_id,
            'car_route_id' => $request->car_route_id,
            'seats_id' => $request->seats_id,
            'pickup_points_id' => $request->pickup_points_id, 
            'dropoff_points_id' => $request->dropoff_points_id, 
        ]);

        //load data các bảng
        $ticket->load(['orders', 'carTrip', 'pickupPoints', 'dropoffPoints','car','carRoute','seats']);

    
        return response()->json([
            'message' => 'Tạo vé thành công',
            'ticket' => $ticket,
        ], 201);
    }
    
    
    // 4. Cập nhật thông tin vé
    public function updateTicket(Request $request, $id)
    {
        $ticket = Ticket::find($id);

        if (!$ticket) {
            return response()->json(['message' => 'Vé không tồn tại'], 404);
        }
        //tạo name ngẫu nhiên
       
        $name = $request->has('name') ? $request->name : Str::random(10);
        $validator = Validator::make($request->all(), [
            'name' => 'nullable|string|unique:ticket,name,' . $name,
            'orders_id' => 'nullable|exists:orders,id',
            'car_trip_id' => 'nullable|exists:car_trips,id',
            'car_id' => 'nullable|exists:cars,id',
            'car_route_id' => 'nullable|exists:car_routes,id',
            'seats_id' => 'nullable|exists:seats,id',
            'pickup_points_id' => 'nullable|exists:pickup_points,id',
            'dropoff_points_id' => 'nullable|exists:dropoff_points,id',
            ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $ticket->update([
            'name' => $name,
            'orders_id' => $request->orders_id,
            'car_trip_id' => $request->car_trip_id,
            'car_id' => $request->car_id,
            'car_route_id' => $request->car_route_id,
            'seats_id' => $request->seats_id,
            'pickup_points_id' => $request->pickup_points_id, 
            'dropoff_points_id' => $request->dropoff_points_id, 
        ]);

        $ticket->save();
        $ticket->load(['orders', 'carTrip', 'pickupPoints', 'dropoffPoints','car','carRoute','seats']);
        return response()->json(['message' => 'Cập nhật vé thành công', 'ticket' => $ticket]);
    }

    // 5. Xóa vé theo ID
    public function deleteTicket($id)
    {
        $ticket = Ticket::find($id);

        if (!$ticket) {
            return response()->json(['message' => 'Vé không tồn tại'], 404);
        }

        $ticket->delete();

        return response()->json(['message' => 'Xóa vé thành công']);
    }
}
