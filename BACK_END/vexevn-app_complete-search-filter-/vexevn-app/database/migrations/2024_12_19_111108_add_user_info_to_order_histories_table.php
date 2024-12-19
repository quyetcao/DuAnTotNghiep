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
        Schema::table('order_histories', function (Blueprint $table) {
            $table->string('name')->nullable()->after('user_id'); // Thêm cột tên
            $table->string('phone')->nullable()->after('name'); // Thêm cột số điện thoại
            $table->string('email')->nullable()->after('phone'); // Thêm cột email
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('order_histories', function (Blueprint $table) {
            //
        });
    }
};
