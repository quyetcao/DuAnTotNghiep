<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id(); // ID vé
            $table->string('name');//tên vé
            $table->unsignedBigInteger('car_id'); // Liên kết với xe
            $table->unsignedBigInteger('car_trip_id'); // Liên kết với chuyến xe
            $table->enum('status', ['not_started','running','completed']); // Trạng thái vé
            $table->timestamps();

            // Thiết lập khóa ngoại cho car_trip_id để liên kết với bảng car_trips
            $table->foreign('car_id')->references('id')->on('cars')->onDelete('cascade');
            $table->foreign('car_trip_id')->references('id')->on('car_trips')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
}


