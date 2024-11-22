<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\OrderHistory;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'trip_id',
        'seat_ids',
        'total_price',
        'status',
    ];

    /**
     */
    protected static function booted()
    {
        
        static::created(function ($order) {
            OrderHistory::create([
                'order_id' => $order->id,
                'user_id' => $order->user_id,
                'status' => $order->status,
                'description' => 'Đơn hàng được tạo với trạng thái: ' . $order->status,
            ]);
        });

        
        static::updated(function ($order) {
            // Kiểm tra nếu trạng thái thay đổi và chuyển thành "cancelled"
            if ($order->isDirty('status') && $order->status === 'cancelled') {
                // Tạo lịch sử đơn hàng
                OrderHistory::create([
                    'order_id' => $order->id,
                    'user_id' => $order->user_id,
                    'status' => 'cancelled',
                    'description' => 'Đơn hàng bị hủy và ghế đã được giải phóng.',
                ]);
            }
        });
    }


    /**
     */
    public function histories()
    {
        return $this->hasMany(OrderHistory::class);
    }
}
