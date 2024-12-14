<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarRoute extends Model
{
    use HasFactory; 
    protected $fillable = ['city_from', 'city_to', 'description'];

    public function carRoute()
    {
        return $this->belongsTo(CarRoute::class, 'car_route_id');
    }
    public function carTrips() {
        return $this->hasMany(CarTrip::class);
    }
}
