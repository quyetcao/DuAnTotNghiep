<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'user_id', 
        // 'post_id'  // Nếu có quan hệ với bài viết hoặc một thực thể khác
    ];

    // Ví dụ về các quan hệ
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // public function post()
    // {
    //     return $this->belongsTo(Post::class); // Nếu comment liên quan đến bài viết
    // }
}
