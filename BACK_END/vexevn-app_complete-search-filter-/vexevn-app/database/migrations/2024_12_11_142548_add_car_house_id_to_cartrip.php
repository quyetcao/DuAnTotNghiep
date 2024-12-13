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
            $table->foreignId('car_house_id')->nullable()->constrained('car_houses')
            ->onDelete('cascade')->after('car_route_id');
        });
    }

};
