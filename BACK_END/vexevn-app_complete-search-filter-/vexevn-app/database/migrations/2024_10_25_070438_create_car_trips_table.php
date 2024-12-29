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
        Schema::create('car_trips', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('car_id');
            $table->unsignedBigInteger('car_route_id')->nullable();
            $table->date('departure_date');
            $table->date('arrival_date');
            $table->date('return_date')->nullable();
            $table->unsignedBigInteger('price'); // Giá vé
            $table->enum('status', ['not_started', 'running', 'completed'])->default('not_started');
            $table->timestamps();
    
            $table->foreign('car_id')->references('id')->on('cars')->onDelete('cascade');
            $table->foreign('car_route_id')->references('id')->on('car_routes')->onDelete('cascade');
        });
    }
    


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('car_trips');
    }
};
