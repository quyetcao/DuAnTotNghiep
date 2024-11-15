<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Models\CarType;
use App\Models\CarHouse;
use App\Models\Car;
use App\Models\CarImage;
use App\Models\PickupPoint;
use App\Models\DropoffPoint;
use App\Models\BusRoute;
use App\Models\CarTrip;
use App\Models\CarTripDropoffPoint;
use App\Models\CarTripPickupPoint;
use Illuminate\Support\Facades\Validator;

class TicketController extends HelpController
{
    // 1. Hiển thị thông tin vé theo ID
    public function showTicket($id)
    {
        $data = Ticket::find($id);

        if (!$data) {
            return response()->json(['message' => 'Vé không tồn tại'], 404);
        }

        return response()->json($data);
    }

    // 2. Danh sách tất cả vé
    public function listTicket()
    {
        $data = Ticket::all(); //show 10 vé
        return $this->sendResponse(
        200, 'Hiển thị danh sách vé thành công', $data);

    }

    // 3. Tạo vé mới
    public function createTicket(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'car_trip_id' => 'required|exists:car_trips,id',
            'price' => 'required|numeric',
            'seat_number' => 'required|string',
            'status' => 'required|in:not_started,running,completed',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $ticket = new Ticket();
        $ticket->car_trip_id = $request->car_trip_id;
        $ticket->price = $request->price;
        $ticket->seat_number = $request->seat_number;
        $ticket->status = $request->status;
        $ticket->save();

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
            'price' => 'nullable|numeric',
            'status' => 'nullable|in:not_started,running,completed',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        if ($request->has('price')) {
            $data->price = $request->price;
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
