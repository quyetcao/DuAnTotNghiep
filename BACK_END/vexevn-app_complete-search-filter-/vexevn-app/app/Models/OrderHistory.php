<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'user_id',
        'status',
        'description',
        'name',
        'phone', 
        'email', 
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
