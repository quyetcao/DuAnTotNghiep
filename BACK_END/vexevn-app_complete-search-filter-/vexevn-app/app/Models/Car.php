<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'car_house_id', 'car_type_id', 'license_plate', 'model'];

    public function carType () {
        return $this->belongsTo(CarType::class);
    }

    public function carHouse () {
        return $this->belongsTo(CarHouse::class);
    }

    public function carImages() {
        return $this->hasMany(CarImage::class);
    }

    public function carTrips() {
        return $this->hasMany(CarTrip::class);
    }

    public function employees() {
        return $this->hasMany(Employee::class);
    }
}


