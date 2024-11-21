<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

use App\Models\Event;
use App\Models\Article;
use App\Models\ArticleImage;
use Intervention\Image\ImageManager;
use Intervention\Image\File;
use Intervention\Image\Drivers\Gd\Driver;


class EventController extends HelpController
{
    public function showEvent($id) {
        $data = Event::find($id);
    
            if(!$data) {
                return $this->sendNotFoundResponse('Không tìm thấy sự kiện!');
            }
    
            return $this->sendResponse(200, 'Lấy thông tin chi tiết sự kiện thành công!', $data);
    }
    public function listEvent()
    {
        $data = Event::paginate(10);

        return $this->sendResponse(200, 'Hiển thị danh sách sự kiện thành công!', $data);
    }

    public function createEvent(Request $request)
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
            return $this->sendResponse(201, 'Sự kiện tạo mới thành công!', $event);
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
        return $this->handleDelete(Event::class, $id, 'Sự kiện đã được xóa thành công!');
    }

    // ==============ARTICLE=====================
    public function showArticle($id)
    {
        $data = Article::find($id);

        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy bài viết!');
        }

        return $this->sendResponse(200, 'Lấy thông tin chi tiết bài viết thành công!', $data);
    }
    public function listArticle()
    {
        $data = Article::paginate(10);

        return $this->sendResponse(200, 'Hiển thị danh sách bài viết thành công!', $data);
    }
    public function createArticle(Request $request)
    {
        // validation rule
        $rules = [
            'event_id' => 'required|exists:events,id',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg', // Kiểm tra ảnh nếu có
            'status' => 'required|in:published,draft',
            'publication_date' => 'nullable|date',
        ];

        // Xử lý xác thực
        return $this->validateAndExecute($request, $rules, function () use ($request) {
            // Tạo bài viết mới
            $article = Article::create([
                'title' => $request->title,
                'content' => $request->content,
                'event_id' => $request->event_id,
                'publication_date' => $request->publication_date,
                'status' => $request->status ?? 'draft',  // Default status là draft
            ]);

            // Xử lý ảnh nếu có
            $imageName = null;
            if ($request->hasFile('images')) {
                $images = [];

                // Khởi tạo ImageManager 
                $manager = new ImageManager(new Driver());

                foreach ($request->file('images') as $image) {
                    // name img
                    $imageName = time() . '-' . $image->getClientOriginalName();

                    $image = $manager->read($image);
                    $image->resize(648, 345)->toPng()->save(storage_path('app/public/images/articles/' . $imageName));

                    // Save
                    ArticleImage::create([
                        'article_id' => $article->id,
                        'image' => $imageName,
                    ]);

                    $images[] = $imageName;
                }
            }

            // Gộp dữ liệu
            $responseData = [
                'article' => $article,
                'images' => $images
            ];

            // Trả về kết quả thành công
            return $this->sendResponse(201, 'Bài viết đã được tạo thành công!', $responseData);
        });
    }
    public function updateArticle(Request $request, $id)
    {
        $article = Article::find($id);

        if (!$article) {
            return $this->sendNotFoundResponse('Không tìm thấy bài viết!');
        }

        $rules = [
            'event_id' => 'required|exists:events,id',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg', // Kiểm tra ảnh nếu có
            'status' => 'required|in:published,draft',
            'publication_date' => 'nullable|date',
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request, $rules, $article) {
            $article->update([
                'title' => $request->title ?? $article->title,
                'content' => $request->content ?? $article->content,
                'event_id' => $request->event_id ?? $article->event_id,
                'publication_date' => $request->publication_date ?? $article->publication_date,
                'status' => $request->status ?? $article->status,
            ]);

            // Xử lý ảnh
            // 1. Xoá các ảnh được chọn
            // Khởi tạo biến $imageDeleteName mặc định là array rỗng
            $imageDeleteName = [];
            if ($request->has('delete_images')) {
                $deleteImages = $request->delete_images;

                foreach ($deleteImages as $imageId) {
                    // Tìm ảnh bằng id để xoá
                    $image = ArticleImage::find($imageId);
                    if ($image) {
                        $imageDeleteName[] = $image->image;

                        // Delete path
                        $image_path = storage_path('app/public/images/articles/' . $image->image);
                        if (file_exists($image_path)) {
                            unlink($image_path);
                        }

                        // delete img
                        $image->delete();
                    }
                }
            }

            // 2. Thêm ảnh mới (nếu có)
            // Khởi tạo biến $images mặc định là array rỗng
            $images = [];
            // lấy danh sách ảnh có trong DB    
            $existingImages = $article->articleImages->pluck('name')->toArray();

            // Ktr xem có ảnh nào mới không
            if ($request->hasFile('images')) {

                // Khởi tạo ImageManager 
                $manager = new ImageManager(new Driver());

                foreach ($request->file('images') as $image) {
                    $imageNameOrg = $image->getClientOriginalName();

                    // Kiểm tra tên ảnh có trong DB hay chưa
                    if (!in_array($imageNameOrg, $existingImages)) {
                        $imageName = time() . '-' . $image->getClientOriginalName();

                        $image = $manager->read($image);
                        $image->resize(648, 345)->toPng()->save(storage_path('app/public/images/articles/' . $imageName));

                        // Save
                        ArticleImage::create([
                            'article_id' => $article->id,
                            'image' => $imageName,
                        ]);

                        $images[] = $imageName;
                    }
                }
            }

            // Gộp dữ liệu
            $responseData = [
                'article' => $article,
                'images' => $images
            ];


            return $this->sendResponse(200, 'Cập nhật bài viết thành công!', $responseData);
        });
    }
    public function deleteArticle($id)
    {
        $article = Article::find($id);

        if (!$article) {
            return $this->sendNotFoundResponse('Không tìm thấy bài viết!');
        }

        try {
            DB::beginTransaction();
            // delete img first
            $articleImages = $article->articleImages;

            $deleteImages = [];
            foreach ($articleImages as $image) {
                // Truy tới đường dẫn ảnh
                $imagePath = storage_path('app/public/images/articles/' . $image->image);

                // Kiểm tra nếu file tồn tại thì xóa
                if (file_exists($imagePath)) {
                    unlink($imagePath);
                }

                // Xóa bản ghi 
                $image->delete();
            }
            // Xóa bài viết khỏi database
            $article->delete();

            DB::commit();

            // Trả về kết quả thành công
            return $this->sendResponse(200, 'Bài viết và hình ảnh đã được xóa thành công!');

        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
