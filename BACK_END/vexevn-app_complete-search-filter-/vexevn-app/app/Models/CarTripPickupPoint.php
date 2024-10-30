<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarTripPickupPoint extends Model
{
    use HasFactory;

    protected $fillable = ['car_trip_id', 'pickup_point_id', 'pickup_time'];
}
