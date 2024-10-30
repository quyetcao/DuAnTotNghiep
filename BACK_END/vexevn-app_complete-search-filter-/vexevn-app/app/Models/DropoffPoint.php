<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DropoffPoint extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'address', 'car_house_id', 'is_public'];

    // public function city () {
    //     return $this->belongsTo(City::class);
    // }

    public function carHouse () {
        return $this->belongsTo(CarHouse::class);
    }
}
