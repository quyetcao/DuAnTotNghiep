<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Enums\ArticleStatus;

class Article extends Model
{
    use HasFactory;
    protected $fillable = [
        'event_id',
        'title',
        'content',
        'publication_date',
        'status'
    ];
    protected $casts = [
        'status' => ArticleStatus::class, // Chỉ định kiểu cho status
    ];

    // N article - 1 event
    public function event() {
        return $this->belongsTo(Event::class);
    }
    
    public function getImageUrlArticle() {
        return $this->image ? asset('storage/images/articles/' . $this->image) : null;
    }

    public function articleImages() {
        return $this->hasMany(ArticleImage::class);
    }
}
