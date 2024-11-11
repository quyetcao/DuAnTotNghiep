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
            $table->unsignedBigInteger('cars_id');
            $table->string('seat_number');
            $table->string('position');
            $table->decimal('price', 10, 2);
            $table->boolean('is_sold')->default(false);
            $table->string('status')->default('available');
            $table->timestamps();

            $table->foreign('cars_id')->references('id')->on('cars')->onDelete('cascade');
        });
    }

    /**
     * Hoàn tác các migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seats');
    }
}