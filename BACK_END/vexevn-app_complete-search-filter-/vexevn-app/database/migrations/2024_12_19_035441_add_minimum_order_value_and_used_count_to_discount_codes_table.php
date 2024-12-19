<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMinimumOrderValueAndUsedCountToDiscountCodesTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('discount_codes', function (Blueprint $table) {
            $table->unsignedBigInteger('minimum_order_value')->nullable()->after('discount_amount');
            $table->integer('used_count')->default(0)->after('usage_limit');
        });
    }

}
