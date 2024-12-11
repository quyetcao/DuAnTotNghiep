<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddImageToDiscountCodes extends Migration
{
    public function up()
    {
        Schema::table('discount_codes', function (Blueprint $table) {
            $table->string('image')->nullable()->after('is_active');
        });
    }
}
