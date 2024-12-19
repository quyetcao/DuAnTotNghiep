<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiscountCode extends Model
{
    use HasFactory;

    protected $table = 'discount_codes';
    protected $casts = ['is_active' => 'boolean', ];
    const DISCOUNT_TYPE_PERCENTAGE = 'percentage';
    const DISCOUNT_TYPE_FIXED = 'fixed';

    protected $fillable = [
        'code',
        'description',
        'discount_amount',
        'minimum_order_value',
        'discount_type',
        'start_date',
        'end_date',
        'usage_limit',
        'used_count',
        'is_active',
        'image',
    ];

    protected $dates = ['start_date', 'end_date'];
    
    public function isValid()
    {
        $now = now();

        $isWithinDateRange = (!$this->start_date || $this->start_date <= $now) &&
                            (!$this->end_date || $this->end_date >= $now);
        $isActive = $this->is_active;

        $isUsageLimitReached = $this->usage_limit > 0 && $this->used_count >= $this->usage_limit;
        return $isActive && $isWithinDateRange && !$isUsageLimitReached;
    }


    public function applyDiscount($amount)
    {
        if ($this->discount_type == self::DISCOUNT_TYPE_PERCENTAGE) {
            $discountedAmount = $amount * ($this->discount_amount / 100);
            return max(0, $amount - $discountedAmount);
        }

        // Giảm giá cố định
        return max(0, $amount - $this->discount_amount);
    }


    public function payments()
    {
        return $this->hasMany(Payment::class, 'discount_code_id');
    }
    public function hasReachedUsageLimit()
    {
        return $this->usage_limit > 0 && $this->used_count >= $this->usage_limit;
    }

    public function hasExpired()
    {
        $now = now();
        return ($this->end_date && $this->end_date < $now);
    }

}
