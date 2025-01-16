<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    use HasFactory;

    protected $fillable = [
        'car_id',          
        'car_type_id',     
        'seat_number',     
        'seat_type',       
        'location_seat',   
        'price',           
    ];

    public function car()
    {
        return $this->belongsTo(Car::class, 'car_id'); 
    }

    public function carType()
    {
        return $this->belongsTo(CarType::class, 'car_type_id'); 
    }
}
