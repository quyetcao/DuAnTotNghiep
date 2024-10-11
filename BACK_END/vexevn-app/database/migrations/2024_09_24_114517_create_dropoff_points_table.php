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
        Schema::create('dropoff_points', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('address')->nullable();
            // $table->unsignedBigInteger('city_id');
            $table->unsignedBigInteger('car_house_id')->nullable();
            $table->boolean('is_public')->default(true);
            $table->timestamps();

            // $table->foreign('city_id')->references('id')->on('cities')->onDelete('cascade');
            $table->foreign('car_house_id')->references('id')->on('car_houses')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dropoff_points');
    }
};
