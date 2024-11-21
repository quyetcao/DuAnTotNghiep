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
            $table->string('driver_1')->nullable();
            $table->string('driver_2')->nullable();
            $table->string('assistant_1')->nullable();
            $table->string('assistant_2')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('car_trips', function (Blueprint $table) {
            $table->dropColumn('driver_1');
            $table->dropColumn('driver_2');
            $table->dropColumn('assistant_1');
            $table->dropColumn('assistant_2');
        });
    }
};
