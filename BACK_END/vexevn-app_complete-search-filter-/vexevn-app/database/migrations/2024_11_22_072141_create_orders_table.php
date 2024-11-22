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
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
