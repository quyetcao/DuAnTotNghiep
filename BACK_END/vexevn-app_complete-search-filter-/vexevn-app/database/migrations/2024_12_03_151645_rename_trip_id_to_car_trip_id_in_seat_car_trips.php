<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameTripIdToCarTripIdInSeatCarTrips extends Migration
{
    public function up()
    {
        Schema::table('seat_car_trips', function (Blueprint $table) {
            $table->renameColumn('trip_id', 'car_trip_id');
        });
    }

}
