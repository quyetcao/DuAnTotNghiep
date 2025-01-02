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
        Schema::table('car_trips', function (Blueprint $table) {
            $table->dropForeign(['car_house_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('car_trips', function (Blueprint $table) {
            $table->foreign('car_house_id')->references('id')->on('car_houses');
        });
    }
};
