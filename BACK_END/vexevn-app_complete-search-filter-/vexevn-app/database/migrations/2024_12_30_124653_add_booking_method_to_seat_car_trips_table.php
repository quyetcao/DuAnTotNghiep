<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('seat_car_trips', function (Blueprint $table) {
            $table->enum('booking_method', ['hotline', 'counter', 'web'])->default('web')->after('is_available');
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('seat_car_trips', function (Blueprint $table) {
            //
        });
    }
};
