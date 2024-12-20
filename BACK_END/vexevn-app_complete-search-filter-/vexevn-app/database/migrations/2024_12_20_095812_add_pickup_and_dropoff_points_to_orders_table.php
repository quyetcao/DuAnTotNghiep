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
        Schema::table('orders', function (Blueprint $table) {
            //
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropForeign(['car_trip_pickup_point_id']);
            $table->dropForeign(['car_trip_dropoff_point_id']);
            $table->dropColumn('car_trip_pickup_point_id');
            $table->dropColumn('car_trip_dropoff_point_id');
        });
    }
};
