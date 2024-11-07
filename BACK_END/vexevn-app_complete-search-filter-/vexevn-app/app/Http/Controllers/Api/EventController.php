<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Event;
use App\Models\Article;

use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class EventController extends HelpController
{
    public function listEvent()
    {
        $data = Event::paginate(10);

        return $this->sendResponse(200, 'Hiển thị danh sách sự kiện thành công', $data);
    }

    public function uploadEvent(Request $request)
    {
        $rules = [
            'title' => 'required|string|max:255|unique:events,title',
            'description' => 'nullable|string',
            'start_date' => 'nullable|date|after_or_equal:today',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'status' => 'required|in:active,inactive',
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {
            $event = Event::create([
                'title' => $request->title,
                'description' => $request->description,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'status' => $request->status,
            ]);

            // Trả về thông báo success
            return $this->sendResponse(200, 'Sự kiện tạo mới thành công!', $event);
        });
    }

    public function updateEvent(Request $request, $id)
    {
        $event = Event::find($id);

        if (!$event) {
            return $this->sendNotFoundResponse('Không tìm thấy sự kiện!');
        }

        $rules = [
            'title' => 'required|string|max:255|unique:events,title,' . $event->id,
            'description' => 'nullable|string',
            'start_date' => 'nullable|date|after_or_equal:today',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'status' => 'required|in:active,inactive',
        ];


        return $this->validateAndExecute($request, $rules, function () use ($request, $event) {
            $event->update([
                'title' => $request->title ?? $event->title,
                'description' => $request->description,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'status' => $request->status ?? $event->status,
            ]);

            return $this->sendResponse(200, 'Cập nhật sự kiện thành công!', $event);
        });
    }

    public function deleteEvent($id)
    {
        return $this->handleDelete(Event::class, $id, 'Sự kiệnn đã được xóa thành công!');
    }

    // ==============ARTICLE=====================
    public function uploadArticle(Request $request)
    {
        // validation rule
        $rules = [
            'event_id' => 'required|exists:events,id',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg', // Kiểm tra ảnh nếu có
            'status' => 'required|in:published,draft',
            'publication_date' => 'nullable|date',
        ];

        // Xử lý xác thực
        return $this->validateAndExecute($request, $rules, function () use ($request) {
            // Tạo bài viết mới
            $articleData = [
                'title' => $request->title,
                'content' => $request->content,
                'event_id' => $request->event_id,
                'publication_date' => $request->publication_date,
                'status' => $request->status ?? 'draft',  // Default status là draft
            ];

            // Xử lý ảnh nếu có
            $articleData['image'] = null;
            $imageName = null;
            if ($request->hasFile('image')) {
                // Lấy file ảnh
                // $image = $request->file('image');
                $imageName = time() . '.' . $request->image->getClientOriginalExtension();  // Tạo tên file mới
                // $imagePath = public_path('storage/images/articles');  // Đường dẫn lưu ảnh

                // Khởi tạo ImageManager 
                $manager = new ImageManager(new Driver()); 

                $img = $manager->read($request->image);

                $img->resize(648,345)->toPng()->save(storage_path('app/public/images/articles/'. $imageName));
                
                $articleData['image'] = $imageName;
            }

            
            // Tạo bài viết mới
            $article = Article::create($articleData);

            // Trả về kết quả thành công
            return $this->sendResponse(201, 'Bài viết đã được tạo thành công!', $article);

        });
    }
}
