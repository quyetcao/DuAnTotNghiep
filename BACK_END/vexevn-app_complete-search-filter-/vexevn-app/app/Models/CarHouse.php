<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarHouse extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'phone', 'status', 'address'];

    public function cars () {
        return $this->hasMany(Car::class);
    }
    public function employee() {
        return $this->hasMany(Employee::class);
    }
    public function pickupPoints () {
        return $this->hasMany(PickupPoint::class);
    }

    public function dropoffPoints () {
        return $this->hasMany(DropoffPoint::class);
    }
}


