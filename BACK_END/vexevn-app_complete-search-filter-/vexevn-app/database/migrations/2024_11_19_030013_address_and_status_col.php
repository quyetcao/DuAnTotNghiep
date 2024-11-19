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
        Schema::table('car_houses', function (Blueprint $table) {
            $table->text('address')->after('phone')->nullable();
            $table->enum('status', ['active', 'inactive', 'paused'])->after('phone')->default('active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('car_houses', function (Blueprint $table) {
            $table->dropColumn('address');
            $table->dropColumn('status');
        });
    }
};
