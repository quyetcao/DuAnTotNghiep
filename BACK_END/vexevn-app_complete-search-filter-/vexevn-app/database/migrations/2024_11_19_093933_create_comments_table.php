<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->text('content'); // Nội dung bình luận
            $table->unsignedBigInteger('users_id')->nullable();
           // $table->unsignedBigInteger('post_id')->nullable(); // Nếu có liên kết với bài viết
            $table->timestamps();

            // Ràng buộc khóa ngoại (nếu có)
            $table->foreign('users_id')->references('id')->on('users')->onDelete('cascade');
            // $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
