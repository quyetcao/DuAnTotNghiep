<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeatCarTripsTable extends Migration
{
    /**
     * Chạy các migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seat_car_trips', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('seat_id');
            $table->unsignedBigInteger('car_id');
            $table->unsignedBigInteger('trip_id');
            $table->boolean('is_available')->default(true);
            $table->timestamps();

            $table->foreign('seat_id')->references('id')->on('seats')->onDelete('cascade');
            $table->foreign('car_id')->references('id')->on('cars')->onDelete('cascade');
            $table->foreign('trip_id')->references('id')->on('car_trips')->onDelete('cascade');
        });
    }

    /**
     * @return void
     */ 
    public function down()
    {
        Schema::dropIfExists('seat_car_trips');
    }
}
