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
            $table->string('seat_number'); // Số ghế
            $table->string('position'); // Vị trí của ghế (ghế cuối, ghế giữa, hoặc ghế đầu)
            $table->decimal('price', 10, 2); // Giá của ghế
            $table->boolean('is_sold')->default(false); // Trạng thái ghế đã bán hay chưa
            $table->string('status')->default('available'); // Trạng thái: có sẵn, đang chọn, hoặc không bán
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