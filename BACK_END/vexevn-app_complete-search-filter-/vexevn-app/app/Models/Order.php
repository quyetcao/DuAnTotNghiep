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
        'car_trip_id',
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

    public function seats()
    {
        return $this->hasMany(Seat::class);
    }

    public function carTrip()
    {
        return $this->belongsTo(CarTrip::class);
    }

    public function car() {
        return $this->belongsTo(Car::class);
    }

    public function carRoute() {
        return $this->belongsTo(CarRoute::class);
    }

    public function pickupPoints() {
        return $this->belongsToMany(PickupPoint::class, 'car_trip_pickup_points')
                    ->withPivot('pickup_time')
                    ->withTimestamps();
    }

    public function dropoffPoints() {
        return $this->belongsToMany(DropoffPoint::class, 'car_trip_dropoff_points')
                    ->withPivot('dropoff_time')
                    ->withTimestamps();
        
    }
}
