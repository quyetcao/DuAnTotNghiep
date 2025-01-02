<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = ['name', 'car_id', 'car_house_id', 'phone', 'address', 'role'];

    // Quan hệ với nhà xe (N - 1)
    public function carhouse()
    {
        return $this->belongsTo(Carhouse::class);
    }

    public function car() {
        return $this->belongsTo(Car::class);
    }
}