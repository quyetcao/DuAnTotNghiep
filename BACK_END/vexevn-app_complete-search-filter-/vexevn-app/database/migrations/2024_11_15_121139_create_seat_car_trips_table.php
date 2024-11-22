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
        Schema::create('orders', function (Blueprint $table) {
            $table->id(); // ID đơn hàng
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Khách hàng đặt
            $table->unsignedBigInteger('trip_id'); // ID chuyến xe
            $table->json('seat_ids'); // Danh sách các ghế đặt, lưu dưới dạng JSON
            $table->unsignedBigInteger('total_price'); // Tổng giá tiền của đơn hàng
            $table->enum('status', ['pending', 'paid', 'cancelled'])->default('pending'); // Trạng thái đơn hàng
            $table->timestamps();
        
            $table->foreign('trip_id')->references('id')->on('car_trips')->onDelete('cascade'); // Liên kết với car_trips
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
