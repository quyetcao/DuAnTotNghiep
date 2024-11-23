<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'user_id',
        'amount',
        'payment_method',
        'status',
        'transaction_id',
    ];

    /**
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    /**
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     */
    public function isCompleted()
    {
        return $this->status === 'completed';
    }
}
