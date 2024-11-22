<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id(); // ID giao dịch
            $table->unsignedBigInteger('order_id'); // ID đơn hàng
            $table->unsignedBigInteger('user_id'); // ID người dùng
            $table->decimal('amount', 10, 2); // Số tiền thanh toán
            $table->string('payment_method'); // Phương thức thanh toán (e.g., credit_card, paypal, bank_transfer)
            $table->enum('status', ['pending', 'completed', 'failed'])->default('pending'); // Trạng thái thanh toán
            $table->string('transaction_id')->nullable(); // Mã giao dịch từ cổng thanh toán
            $table->timestamps();

            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('payments');
    }
};

