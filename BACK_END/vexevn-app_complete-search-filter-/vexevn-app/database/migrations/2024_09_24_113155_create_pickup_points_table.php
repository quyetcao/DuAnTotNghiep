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
        Schema::create('pickup_points', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique(); //tên địa điểm
            $table->string('address')->nullable(); // địa điểm cụ thể
            // $table->unsignedBigInteger('city_id');
            $table->unsignedBigInteger('car_house_id')->nullable();
            $table->boolean('is_public')->default(true);
            $table->timestamps();

            // Lý do chọn cascade mà eo phải set-null như carhouse id?
            /* 
            1. Địa điểm không thành phố chả khác nào rồng mất đầu, chả biết rắn hay rồng.
            2. Dự liệu sẽ ko đồng bộ - sai sót vì mục đích là chọn địa điểm theo tp, tp mất hàm lỗi
            3. Trường hợp xoá thành phố là khó xảy ra -> vì nó là dữ liệu địa lý quan trọng.
            */
            // $table->foreign('city_id')->references('id')->on('cities')->onDelete('cascade');

            // Lý do chọn setnull thay vì cascade - restrict?
            /* 
            1. Lưu trữ lịch sử của các chuyến xe 
            2. Có những địa điểm ko chỉ thuộc về riêng 1 nhà xe, nếu 1 nhà xe sụp thì nó sẽ thuộc về nhà xe khác trong tương lai
            */
            $table->foreign('car_house_id')->references('id')->on('car_houses')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pickup_points');
    }
};
