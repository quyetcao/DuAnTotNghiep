<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\{
    Article,
    ArticleImage,
};

class ArticleController extends HelpController
{
    public function index(Request $request)
    {
        if ($request->query('all') === 'true') {
            $data = Article::with('event', 'articleImages')->get();
            return $this->sendResponse(200, 'Hiển thị danh sách bài viết thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);
        $data = Article::with('event', 'articleImages')->paginate((int)$perPage);
        return $this->sendResponse(200, "Hiển thị danh sách bài viết thành công! Với {$perPage} đối tượng mỗi trang", $data);
    }


    public function show($id)
    {
        $data = Article::with('event', 'articleImages')->find($id);

        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy bài viết!');
        }

        return $this->sendResponse(200, 'Lấy thông tin chi tiết bài viết thành công!', $data);
    }


    public function store(Request $request)
    {
        // validation rule
        $rules = [
            'event_id' => 'required|exists:events,id',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg', // Kiểm tra ảnh nếu có
            'status' => 'required|in:published,draft',
            'publication_date' => 'nullable|date|after_or_equal:today',
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


                foreach ($request->file('images') as $image) {
                    // name img
                    $imageName = time() . '-' . $image->getClientOriginalName();

                    $image->move(public_path('images/articles'), $imageName);
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
            return $this->sendResponse(201, 'Tạo mới bài viết thành công!', $responseData);
        });
    }


    public function update(Request $request, $id)
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
            'publication_date' => 'nullable|date|after_or_equal:today',
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
                        $image_path = public_path('images/articles/' . $image->image);
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

                foreach ($request->file('images') as $image) {
                    $imageNameOrg = $image->getClientOriginalName();

                    // Kiểm tra tên ảnh có trong DB hay chưa
                    if (!in_array($imageNameOrg, $existingImages)) {
                        $imageName = time() . '-' . $image->getClientOriginalName();

                        $image->move(public_path('images/articles'), $imageName);

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


    public function destroy($id)
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
                $imagePath = public_path('images/articles/' . $image->image);

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
            return $this->sendResponse(200, 'Xoá bài viết thành công!');
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
                'status' => 500,
                'message' => 'Lỗi hệ thống!',
                'error' => $th->getMessage()
            ], 500);
        }
    }
}
