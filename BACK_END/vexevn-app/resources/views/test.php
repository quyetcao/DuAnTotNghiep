<?php 

// use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Schema;

// return new class extends Migration
// {
//     /**
//      * Run the migrations.
//      */
//     public function up(): void
//     {
//         Schema::create('cars', function (Blueprint $table) {
//             $table->id();
//             $table->unsignedBigInteger('car_house_id');
//             $table->unsignedBigInteger('car_type_id');
//             $table->string('license_plate')->unique();
//             $table->string('model')->nullable();
//             $table->integer('quantity_seat');
//             $table->timestamps();

//             $table->foreign('car_house_id')->references('id')->on('car_houses')->onDelete('cascade');
//             $table->foreign('car_type_id')->references('id')->on('car_types')->onDelete('cascade');
//         });
//     }

//     /**
//      * Reverse the migrations.
//      */
//     public function down(): void
//     {
//         Schema::dropIfExists('cars');
//     }
// };




//  PICK UP POINTS
// <?php

// use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Schema;

// return new class extends Migration
// {
//     /**
//      * Run the migrations.
//      */
//     public function up(): void
//     {
//         Schema::create('pickup_points', function (Blueprint $table) {
//             $table->id();
//             $table->string('name'); //tên địa điểm
//             $table->string('address'); // địa điểm cụ thể
//             $table->unsignedBigInteger('city_id');
//             $table->unsignedBigInteger('car_house_id')->nullable();
//             $table->boolean('is_public')->default(true);
//             $table->timestamps();

//             $table->foreign('city_id')->references('id')->on('cities')->onDelete('cascade');
//         });
        
//     }

//     /**
//      * Reverse the migrations.
//      */
//     public function down(): void
//     {
//         Schema::dropIfExists('pickup_points');
//     }
// };

