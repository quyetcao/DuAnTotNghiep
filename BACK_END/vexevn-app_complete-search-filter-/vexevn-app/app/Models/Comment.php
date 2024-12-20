<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'users_id',
        'car_trips_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class,'users_id');
    }

    public function carTrip()
    {
        return $this->belongsTo(CarTrip::class, 'car_trips_id'); 
    }
}
