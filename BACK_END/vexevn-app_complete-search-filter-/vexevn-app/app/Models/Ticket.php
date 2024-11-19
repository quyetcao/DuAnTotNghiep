<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'status',
        'car_trip_id',
        'car_id',
        'car_route_id',
        'seat_car_trips_id',
    ];
    
    public function carTrip()
    {
        return $this->belongsTo(CarTrip::class);
    }
    public function car() {
        return $this->belongsTo(Car::class);
    }

    public function carRoute() {
        return $this->belongsTo(CarRoute::class);
    }
    public function seatCarTrip()
    {
        return $this->belongsTo(SeatCarTrip::class);
    }
    
}
