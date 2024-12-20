<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarTripDropoffPoint extends Model
{
    use HasFactory;

    protected $fillable = ['car_trip_id', 'dropoff_point_id', 'dropoff_time'];
    public function dropoffPoint()
    {
        return $this->belongsTo(DropoffPoint::class, 'dropoff_point_id');
    }
}
