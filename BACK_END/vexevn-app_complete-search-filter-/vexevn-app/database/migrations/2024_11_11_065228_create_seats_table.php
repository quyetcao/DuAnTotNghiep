<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeatsTable extends Migration
{
    /**
     * Chạy các migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seats', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('car_id');
            $table->unsignedBigInteger('car_type_id'); 
            $table->string('seat_number');
            $table->enum('seat_type', ['vip', 'standard']);
            $table->unsignedBigInteger('price');
            $table->timestamps();

            $table->foreign('car_id')->references('id')->on('cars')->onDelete('cascade');
            $table->foreign('car_type_id')->references('id')->on('car_types')->onDelete('cascade'); 
        });
    }

    /**
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seats');
    }
}
