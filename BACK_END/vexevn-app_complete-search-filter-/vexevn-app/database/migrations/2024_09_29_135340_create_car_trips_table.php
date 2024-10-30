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
            $table->unsignedBigInteger('car_id'); // Xe chạy chuyến
            $table->unsignedBigInteger('car_route_id')->nullable(); // Liên kết với tuyến xe (có thể null)
            $table->date('departure_date'); // Ngày khởi hành
            $table->date('arrival_date');
            $table->date('return_date')->nullable(); // Ngày về (nếu có)
            $table->unsignedBigInteger('price'); // Giá vé
            $table->enum('status', ['not_started', 'running', 'completed']); // Trạng thái chuyến xe
            $table->timestamps();


            // Foreign key tham chiếu tới bảng cars
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
