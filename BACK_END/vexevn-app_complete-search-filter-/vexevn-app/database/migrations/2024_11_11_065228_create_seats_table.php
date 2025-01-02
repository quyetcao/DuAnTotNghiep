<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeatsTable extends Migration
{
    public function up()
    {
        Schema::create('seats', function (Blueprint $table) {
            $table->id(); 
            $table->unsignedBigInteger('car_id'); 
            $table->unsignedBigInteger('car_type_id'); 
            $table->string('seat_number');
            $table->enum('seat_type', ['vip', 'standard']); 
            $table->unsignedBigInteger('price'); 
            $table->enum('location_seat', ['0', '1', '2'])->default(1) 
                  ->comment('0: Ghế đầu, 1: Ghế giữa, 2: Ghế cuối'); 
            $table->timestamps(); 
            
            $table->foreign('car_id')->references('id')->on('cars')->onDelete('cascade');
            $table->foreign('car_type_id')->references('id')->on('car_types')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('seats');
    }
}
