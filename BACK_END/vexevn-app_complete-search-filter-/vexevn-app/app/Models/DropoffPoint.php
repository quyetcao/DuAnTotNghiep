<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DropoffPoint extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'address', 'car_house_id', 'is_public'];

    public function carTrips()
    {
        return $this->belongsToMany(CarTrip::class, 'car_trip_dropoff_points')
                    ->withPivot('id', 'dropoff_time')
                    ->withTimestamps();
    }
    public function carHouse () {
        return $this->belongsTo(CarHouse::class);
    }
}
