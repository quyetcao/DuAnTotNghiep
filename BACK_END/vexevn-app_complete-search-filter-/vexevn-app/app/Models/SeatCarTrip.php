<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeatCarTrip extends Model
{
    use HasFactory;

    /**
     * @var array
     */
    protected $fillable = [
        'seat_id',
        'car_id',
        'trip_id',
        'is_available',
    ];

    public function seat()
    {
        return $this->belongsTo(Seat::class);
    }

    public function car()
    {
        return $this->belongsTo(Car::class);
    }

    public function trip()
    {
        return $this->belongsTo(Trip::class);
    }
}