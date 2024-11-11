<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    use HasFactory;

    protected $fillable = [
        'cars_id',
        'seat_number',
        'position',
        'price',
        'is_sold',
        'status',
    ];
}