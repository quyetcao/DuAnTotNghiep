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
     * Quan hệ với đơn hàng.
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * Quan hệ với người dùng.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Kiểm tra thanh toán thành công.
     */
    public function isCompleted()
    {
        return $this->status === 'completed';
    }
}
