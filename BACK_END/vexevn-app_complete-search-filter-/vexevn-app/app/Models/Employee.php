<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = ['name', 'car_house_id', 'phone', 'address', 'role'];

    // Quan hệ với nhà xe (N - 1)
    public function carhouse()
    {
        return $this->belongsTo(Carhouse::class);
    }

    // Quan hệ với các chuyến xe (N-N)
    public function carTrips()
    {
        return $this->belongsToMany(CarTrip::class, 'car_trip_employees', 'employee_id', 'car_trip_id');
    }
}