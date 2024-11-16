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
        'car_route_id'
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
