<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiscountCode extends Model
{
    use HasFactory;

    protected $table = 'discount_codes';
    const DISCOUNT_TYPE_PERCENTAGE = 'percentage';
    const DISCOUNT_TYPE_FIXED = 'fixed';

    protected $fillable = [
        'code',
        'description',
        'discount_amount',
        'discount_type',
        'start_date',
        'end_date',
        'usage_limit',
        'is_active'
    ];

    protected $dates = ['start_date', 'end_date'];

    public function isValid()
    {
        $now = now();
        $isWithinDateRange = $this->start_date <= $now && $this->end_date >= $now;
        $isActive = $this->is_active;

        $isUsageLimitReached = $this->usage_limit && $this->payments()->count() >= $this->usage_limit;

        return $isActive && $isWithinDateRange && !$isUsageLimitReached;
    }


    public function applyDiscount($amount)
    {
        if ($this->discount_type == self::DISCOUNT_TYPE_PERCENTAGE) {
            return $amount - ($amount * $this->discount_amount / 100);
        }

        return $amount - $this->discount_amount;
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
