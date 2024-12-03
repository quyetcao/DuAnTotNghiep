<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    public function seats() {
    return $this->hasMany(Seat::class, 'car_id', 'car_id');
    }

    public function car() {
        return $this->belongsTo(Car::class);
    }

    public function seatCarTrips()
    {
        return $this->hasMany(SeatCarTrip::class, 'car_trip_id');
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
    public function employees()
    {
        return $this->belongsToMany(Employee::class, 'car_trip_employees', 'car_trip_id', 'employee_id')
                    ->withTimestamps();
    }
    public function scopeNotStarted($query) {
        return $query->where('status', 'not_started');
    }
    
    public function scopeRunning($query) {
        return $query->where('status', 'running');
    }

    public function scopeCompleted($query) {
        return $query->where('status', 'completed');
    }
}
