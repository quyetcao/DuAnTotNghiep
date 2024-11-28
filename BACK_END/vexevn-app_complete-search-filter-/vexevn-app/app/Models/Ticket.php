<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'orders_id',
        'car_trip_id',
        'car_id',
        'car_route_id',
        'seats_id',
        'pickup_points_id',
        'dropoff_points_id',
    ];
    public function carTrip()
    {
        return $this->belongsTo(CarTrip::class);
    }
    public function orders()
    {
        return $this->belongsTo(Order::class);
    }
    public function car() {
        return $this->belongsTo(Car::class);
    }

    public function carRoute() {
        return $this->belongsTo(CarRoute::class);
    }
    public function pickupPoints() {
        return $this->belongsTo(PickupPoint::class) ;
                  
    }

    public function dropoffPoints() {
        return $this->belongsTo(DropoffPoint::class) ;
                  
        
    }
    public function seats()
    {
        return $this->belongsTo(Seat::class);
    }
    
}
