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
            $table->id(); 
            $table->string('name');
            $table->enum('status', ['not_started', 'running', 'completed']); 
            $table->unsignedBigInteger('car_trip_id')->nullable(); 
            $table->unsignedBigInteger('car_id');
            $table->unsignedBigInteger('car_route_id')->nullable();
            $table->unsignedBigInteger('seat_car_trips_id')->nullable();
            $table->timestamps();

            // Ràng buộc khóa ngoại 
            $table->foreign('car_trip_id')->references('id')->on('car_trips')->onDelete('cascade'); 
            $table->foreign('car_id')->references('id')->on('cars')->onDelete('cascade');
            $table->foreign('car_route_id')->references('id')->on('car_routes')->onDelete('cascade');   
            $table->foreign('seat_car_trips_id')->references('id')->on('seat_car_trips')->onDelete('cascade');   
                  
                  
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tickets', function (Blueprint $table) {
            $table->dropForeign(['car_trip_id']); // Xóa ràng buộc khóa ngoại
        });

        Schema::dropIfExists('tickets');
    }
}

