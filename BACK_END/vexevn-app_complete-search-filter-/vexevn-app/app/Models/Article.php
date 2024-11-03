<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'title',
        'content',
        'image_url',
        'publication_date',
        'status'
    ];

    // N article - 1 event
    public function event() {
        return $this->belongsTo(Event::class);
    }
}
