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
        Schema::table('orders', function (Blueprint $table) {
            $table->unsignedBigInteger('car_trip_pickup_point_id')->nullable();
            $table->unsignedBigInteger('car_trip_dropoff_point_id')->nullable();
            $table->foreign('car_trip_pickup_point_id')->references('id')->on('pickup_points')->onDelete('set null');
            $table->foreign('car_trip_dropoff_point_id')->references('id')->on('dropoff_points')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            //
        });
    }
};
