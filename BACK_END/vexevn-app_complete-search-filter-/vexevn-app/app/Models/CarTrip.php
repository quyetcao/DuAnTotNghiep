<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;

use DateTime;
use DateInterval;

class CarTrip extends Model
{
    use HasFactory;

    protected $fillable = [
        'car_id',
        'car_route_id',
        'departure_date',
        'arrival_date',
        'return_date',
        'price',
        'status'
    ];

    public function seats()
    {
        return $this->hasMany(Seat::class, 'car_id', 'car_id');
    }

    public function car()
    {
        return $this->belongsTo(Car::class);
    }

    public function seatCarTrips()
    {
        return $this->hasMany(SeatCarTrip::class);
    }

    public function carRoute()
    {
        return $this->belongsTo(CarRoute::class);
    }

    public function pickupPoints()
    {
        return $this->belongsToMany(PickupPoint::class, 'car_trip_pickup_points')
            ->withPivot('id', 'pickup_time')
            ->withTimestamps();
    }

    public function dropoffPoints()
    {
        return $this->belongsToMany(DropoffPoint::class, 'car_trip_dropoff_points')
            ->withPivot('id', 'dropoff_time')
            ->withTimestamps();
    }


    public function scopeStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    // Scope for not_started
    public function scopeNotStarted($query)
    {
        return $query->where('status', 'not_started');
    }

    // Scope for running
    public function scopeRunning($query)
    {
        return $query->where('status', 'running');
    }

    // Scope for completed
    public function scopeCompleted($query)
    {
        return $query->where('status', 'completed');
    }

    public static function resetCompletedTrips()
    {
        $completedTrips = self::where('status', 'completed')->get();

        foreach ($completedTrips as $trip) {
            $originalDepartureDate = Carbon::parse($trip->departure_date);
            $originalArrivalDate = Carbon::parse($trip->arrival_date);
            $originalReturnDate = $trip->return_date ? Carbon::parse($trip->return_date) : null;

            // Khoảng cách ban đầu
            $arrivalOffset = $originalDepartureDate->diffInDays($originalArrivalDate);
            $returnOffset = $originalReturnDate ? $originalArrivalDate->diffInDays($originalReturnDate) : null;

            // Ngày mới cho ngày đi
            $newDepartureDate = $originalReturnDate ? $originalReturnDate->copy()->addDays(1) : $originalArrivalDate->copy()->addDays(1);

            // Ngày mới cho chuyến đến
            $newArrivalDate = $newDepartureDate->copy()->addDays($arrivalOffset);

            // Ngày mới cho chuyến về
            if ($originalReturnDate) {
                $newReturnDate = $newArrivalDate->copy()->addDays($returnOffset);
            } else {
                $newReturnDate = null;
            }

            // Cập nhật trạng thái và các ngày
            $trip->status = 'not_started';
            $trip->departure_date = $newDepartureDate;
            $trip->arrival_date = $newArrivalDate;
            $trip->return_date = $newReturnDate;
            $trip->save();

            // Reset trạng thái ghế
            foreach ($trip->seatCarTrips as $seatCarTrip) {
                $seatCarTrip->is_available = true;
                $seatCarTrip->save();
            }
        }
    }


    public static function updateStatuses()
    {
        // Lấy ngày và giờ hiện tại
        $now = Carbon::now();

        // Cập nhật trạng thái "running" cho các chuyến xe đã đến ngày đi
        CarTrip::where('status', 'not_started')
            ->whereDate('departure_date', '=', $now->toDateString())
            ->update(['status' => 'running']);

        // Cập nhật trạng thái "completed" cho các chuyến xe không có return_date
        CarTrip::where('status', 'running')
            ->whereNull('return_date')
            ->whereDate('arrival_date', '<', $now->toDateString())
            ->update(['status' => 'completed']);

        // Cập nhật trạng thái "completed" cho các chuyến xe có return_date
        CarTrip::where('status', 'running')
            ->whereNotNull('return_date')
            ->whereDate('return_date', '<', $now->toDateString())
            ->update(['status' => 'completed']);
    }
}
