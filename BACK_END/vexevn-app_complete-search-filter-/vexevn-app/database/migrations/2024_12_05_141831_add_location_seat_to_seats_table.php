<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLocationSeatToSeatsTable extends Migration
{
    public function up()
    {
        Schema::table('seats', function (Blueprint $table) {
            $table->enum('location_seat', ['0', '1', '2'])->default(1)->after('price')
                ->comment('0: Ghế đầu, 1: Ghế giữa, 2: Ghế cuối');
        });
    }
}

