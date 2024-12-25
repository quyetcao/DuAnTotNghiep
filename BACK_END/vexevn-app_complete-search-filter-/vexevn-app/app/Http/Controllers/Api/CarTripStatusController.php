<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Carbon\Carbon;

use App\Models\CarTrip;

class CarTripStatusController extends Controller
{
    public function updateStatuses()
    {
        // Lấy ngày và giờ hiện tại
        $now = Carbon::now();

        // Cập nhật trạng thái "running" cho các chuyến xe đã đến ngày đi
        $running = CarTrip::where('status', 'not_started')
                            ->whereDate('departure_date', '=', $now->toDateString())
                            ->update(['status' => 'running']);

        // Cập nhật trạng thái "completed" cho các chuyến xe đã kết thúc
        $completed = CarTrip::where('status', 'running')
                            ->whereDate('arrival_date', '<', $now->toDateString())
                            ->update(['status' => 'completed']);

        return response()->json([
            'status' => 200,
            'message' => 'Số chuyến xe lần lượt ở status running và complete',
            'running_updated' => $running,
            'completed_updated' => $completed,
        ], 200);
    }
}
