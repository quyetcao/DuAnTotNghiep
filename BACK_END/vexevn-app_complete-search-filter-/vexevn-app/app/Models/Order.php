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
        'name',
        'phone',
        'email',
        'car_trip_pickup_point_id',
        'car_trip_dropoff_point_id',
    ];

    /**
     * Khởi tạo sự kiện khi tạo và cập nhật đơn hàng
     */
    protected static function booted()
    {
        static::created(function ($order) {
            OrderHistory::create([
                'order_id' => $order->id,
                'user_id' => $order->user_id,
                'status' => $order->status,
                'description' => 'Đơn hàng được tạo với trạng thái: ' . $order->status,
                'name' => $order->name, 
                'phone' => $order->phone, 
                'email' => $order->email, 
            ]);
        });

        static::updated(function ($order) {
            if ($order->isDirty('status') && $order->status === 'cancelled') {
                OrderHistory::create([
                    'order_id' => $order->id,
                    'user_id' => $order->user_id,
                    'status' => 'cancelled',
                    'description' => 'Đơn hàng bị hủy và ghế đã được giải phóng.',
                    'name' => $order->name, 
                    'phone' => $order->phone, 
                    'email' => $order->email,
                ]);
            }
        });
    }


    /**
     * Quan hệ với lịch sử đơn hàng
     */
    public function histories()
    {
        return $this->hasMany(OrderHistory::class);
    }

    /**
     * Quan hệ với ghế trong đơn hàng (có thể sửa lại theo cấu trúc dữ liệu)
     */
    public function seats()
    {
        return $this->hasManyThrough(Seat::class, SeatCarTrip::class, 'car_trip_id', 'id', 'car_trip_id', 'seat_id');
    }

    /**
     * Quan hệ với chuyến xe
     */
    public function carTrip()
    {
        return $this->belongsTo(CarTrip::class);
    }

    /**
     * Quan hệ với xe
     */
    public function car()
    {
        return $this->belongsTo(Car::class);
    }

    /**
     * Quan hệ với tuyến xe
     */
    public function carRoute()
    {
        return $this->belongsTo(CarRoute::class);
    }

    public function pickupPoint()
    {
        return $this->belongsTo(\App\Models\PickupPoint::class, 'car_trip_pickup_point_id');
    }

    public function dropoffPoint()
    {
        return $this->belongsTo(\App\Models\DropoffPoint::class, 'car_trip_dropoff_point_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
