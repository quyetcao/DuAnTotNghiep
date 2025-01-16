<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDatesToOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->date('departure_date')->nullable()->after('car_trip_dropoff_point_id'); 
            $table->date('arrival_date')->nullable()->after('departure_date'); 
            $table->date('return_date')->nullable()->after('arrival_date'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn(['departure_date', 'arrival_date', 'return_date']);
        });
    }
}

