<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->text('content');
            $table->unsignedBigInteger('users_id')->nullable();
            $table->unsignedBigInteger('car_trips_id'); 
            $table->timestamps();
            
            $table->foreign('car_trips_id')->references('id')->on('car_trips')->onDelete('cascade');
            $table->foreign('users_id')->references('id')->on('users')->onDelete('cascade');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
