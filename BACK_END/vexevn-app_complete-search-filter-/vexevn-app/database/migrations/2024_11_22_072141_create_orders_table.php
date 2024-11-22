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
        Schema::create('orders', function (Blueprint $table) {
            $table->id(); 
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); 
            $table->unsignedBigInteger('trip_id'); 
            $table->json('seat_ids'); 
            $table->unsignedBigInteger('total_price'); 
            $table->enum('status', ['pending', 'paid', 'cancelled'])->default('pending'); 
            $table->timestamps();
        
            $table->foreign('trip_id')->references('id')->on('car_trips')->onDelete('cascade'); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
