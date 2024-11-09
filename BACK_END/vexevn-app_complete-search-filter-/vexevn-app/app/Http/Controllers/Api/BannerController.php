<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BannerController extends HelpController
{
    public function showBanner($id)
        {
            $data = Banner::find($id);
    
            if (!$data) {
                return $this->sendNotFoundResponse('Không tìm thấy banner!');
            }
    
            return $this->sendResponse(200, 'Lấy thông tin chi tiết banner thành công!', $data);
        }
    public function listBanner()
    {
        $data = Banner::all();

        return response()->json([
            'status' => 200,
            'message' => 'Hiển thị danh sách Banner thành công',
            'data' => $data
        ], 200);
    }
    public function uploadBanner(Request $request)
    {
        // Xác thực dữ liệu đầu vào
        $validateBanner = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg',
            'alt_text' => 'nullable|string|max:255',
        ]);

        // Nếu có lỗi xác thực, trả về thông báo lỗi
        if ($validateBanner->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form',
                'data' => $validateBanner->errors(),
            ], 422);
        }

         // Xét ảnh
         $imageName = null;
         if ($request->hasFile('image')) {
            // Tạo tên file 
            $imageName = time() . '.' . $request->image->extension();

            // Di chuyển ảnh từ tm tạm thời vào thư mục riêng của ảnh xe
            $request->image->move(public_path('images/banners'), $imageName);
         }

        // Tạo mới banner và lưu đường dẫn ảnh
        $inputData = array(
            'image' => $imageName,
            'alt_text' => $request->alt_text,
        );
        $banner = Banner::create($inputData);

        return response()->json([
            'status' => 201,
            'message' => 'Banner đã được thêm thành công!',
            'data' => $banner,
        ], 201);
    }
    public function updateBanner(Request $request, $id)
    {
        // Tìm banner theo ID
        $banner = Banner::find($id);

        // Kiểm tra xem banner có tồn tại không
        if (!$banner) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy banner với ID đã cho!',
            ], 404);
        }

        // Xác thực dữ liệu đầu vào
        $validateBanner = Validator::make($request->all(), [
            'image' => 'nullable|image|mimes:jpeg,png,jpg',
            'alt_text' => 'nullable|string|max:255',
        ]);

        // Nếu có lỗi xác thực, trả về thông báo lỗi
        if ($validateBanner->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form',
                'data' => $validateBanner->errors(),
            ], 422);
        }

        // Xử lý hình ảnh mới nếu có
        if ($request->hasFile('image')) {
            // Xóa ảnh cũ nếu có
            $oldImgPath = public_path('images/banners/' . $banner->image);
            if (file_exists($oldImgPath) && is_file($oldImgPath)) {
                unlink($oldImgPath);
            }

            // Tạo tên file hình ảnh mới
            $imageName = time() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move(public_path('images/banners'), $imageName);

            // Cập nhật đường dẫn hình ảnh
            $banner->image = $imageName;
        }

        // Cập nhật alt_text nếu có
        if ($request->has('alt_text')) {
            $banner->alt_text = $request->alt_text;
        }

        try {
            // Lưu banner đã cập nhật
            $banner->save();

            return response()->json([
                'status' => 200,
                'message' => 'Banner đã được cập nhật thành công!',
                'data' => $banner,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function deleteBanner($id)
    {
        // Tìm id 
        $banner = Banner::find($id);

        // Neu tim ko thay
        if (!$banner) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy banner',
            ], 404);
        }

        // Xoa anh && xoa san pham
        if ($banner->image) {
            $imagePath = public_path('images/banners/') . $banner->image;

            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }
        $banner->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Banner đã được xoá thành công',
        ], 200);
    }
}
// {
//     $banner = Banner::find($id);

//     // Xóa hình ảnh khỏi thư mục
//     if ($banner->image_url) {
//         $imagePath = public_path('images/banners/' . basename($banner->image_url));
//         if (file_exists($imagePath)) {
//             unlink($imagePath);
//         }
//     }
//     $banner->delete();

//     return response()->json(['message' => 'Banner deleted successfully.'], 204);
// }
