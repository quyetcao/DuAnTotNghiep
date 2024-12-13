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
        return $this->belongsToMany(PickupPoint::class, 'car_trip_pickup_points')
                    ->withPivot('pickup_time')
                    ->withTimestamps();
    }

    public function dropoffPoints() {
        return $this->belongsToMany(DropoffPoint::class, 'car_trip_dropoff_points')
                    ->withPivot('dropoff_time')
                    ->withTimestamps();
        
    }

    public function seats()
    {
        return $this->belongsTo(Seat::class);
    }
    
}
