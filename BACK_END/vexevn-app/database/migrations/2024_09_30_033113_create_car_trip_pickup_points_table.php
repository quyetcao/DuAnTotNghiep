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
        Schema::create('car_trip_pickup_points', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('car_trip_id');
            $table->unsignedBigInteger('pickup_point_id');
            $table->time('pickup_time');
            $table->timestamps();

            $table->foreign('car_trip_id')->references('id')->on('car_trips')->onDelete('cascade');
            $table->foreign('pickup_point_id')->references('id')->on('pickup_points')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('car_trip_pickup_points');
    }
};
