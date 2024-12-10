<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiscountCodesTable extends Migration
{
    public function up()
    {
        Schema::create('discount_codes', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique(); 
            $table->string('description')->nullable(); 
            $table->unsignedBigInteger('discount_amount'); 
            $table->enum('discount_type', ['fixed', 'percentage']); 
            $table->dateTime('start_date'); 
            $table->dateTime('end_date'); 
            $table->unsignedInteger('usage_limit')->default(0); 
            $table->boolean('is_active')->default(true); 
            $table->timestamps(); 
        });
    }

    public function down()
    {
        Schema::dropIfExists('discount_codes');
    }
}
