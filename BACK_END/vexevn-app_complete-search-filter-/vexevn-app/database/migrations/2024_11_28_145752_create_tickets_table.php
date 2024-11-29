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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id(); 
            $table->string('name');
            $table->unsignedBigInteger('orders_id')->nullable(); 
            $table->unsignedBigInteger('car_trip_id')->nullable(); 
            $table->unsignedBigInteger('car_id');
            $table->unsignedBigInteger('car_route_id')->nullable();
            $table->unsignedBigInteger('seats_id')->nullable();
            $table->unsignedBigInteger('pickup_points_id')->nullable();
            $table->unsignedBigInteger('dropoff_points_id')->nullable();
            $table->timestamps();
        
            // Ràng buộc khóa ngoại 
            $table->foreign('orders_id')->references('id')->on('orders')->onDelete('cascade'); 
            $table->foreign('car_trip_id')->references('id')->on('car_trips')->onDelete('cascade'); 
            $table->foreign('car_id')->references('id')->on('cars')->onDelete('cascade');
            $table->foreign('car_route_id')->references('id')->on('car_routes')->onDelete('cascade');   
            $table->foreign('seats_id')->references('id')->on('seats')->onDelete('cascade');     
            $table->foreign('pickup_points_id')->references('id')->on('pickup_points')->onDelete('cascade');     
            $table->foreign('dropoff_points_id')->references('id')->on('dropoff_points')->onDelete('cascade');  
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
