<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderHistoriesTable extends Migration
{
    public function up()
    {
        Schema::create('order_histories', function (Blueprint $table) {
            $table->id(); // ID của lịch sử
            $table->unsignedBigInteger('order_id'); // Liên kết đến đơn hàng
            $table->unsignedBigInteger('user_id'); // Người thực hiện thay đổi
            $table->string('status'); // Trạng thái đơn hàng (pending, paid, cancelled, etc.)
            $table->text('description')->nullable(); // Mô tả thêm về thay đổi
            $table->timestamps();

            // Khóa ngoại
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('order_histories');
    }
};
