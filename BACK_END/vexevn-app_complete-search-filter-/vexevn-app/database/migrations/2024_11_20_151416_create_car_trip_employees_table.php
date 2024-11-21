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
        Schema::create('car_trip_employees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('car_trip_id')->constrained('car_trips')->onDelete('cascade');
            $table->foreignId('employee_id')->constrained('employees')->onDelete('cascade');
            $table->timestamps();

            // Đảm bảo một tài xế hoặc nhân viên không trùng lặp trong cùng chuyến xe
            $table->unique(['car_trip_id', 'employee_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('car_trip_employees');
    }
};
