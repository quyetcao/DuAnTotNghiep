<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DiscountCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class DiscountCodeController extends Controller
{
    public function createDiscountCode(Request $request)
    {
        // Xác thực ban đầu cho các trường
        $validated = $request->validate([
            'code' => 'required|string|unique:discount_codes,code',
            'description' => 'nullable|string',
            'discount_amount' => 'required|numeric|min:0',
            'minimum_order_value' => 'nullable|numeric|min:0',
            'discount_type' => 'required|string|in:percentage,fixed',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'is_active' => 'required',
            'usage_limit' => 'required|integer|min:0',
            'used_count' => 'nullable|integer|min:0',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]);
    
        // Kiểm tra logic giá trị của discount_amount dựa trên discount_type
        if ($validated['discount_type'] === 'percentage') {
            if ($validated['discount_amount'] < 1 || $validated['discount_amount'] > 100) {
                return response()->json([
                    'status' => 422,
                    'message' => 'Discount amount for percentage must be between 1 and 100.',
                ], 422);
            }
        } elseif ($validated['discount_type'] === 'fixed') {
            if ($validated['discount_amount'] < 1000) {
                return response()->json([
                    'status' => 422,
                    'message' => 'Discount amount for fixed type must be at least 1000.',
                ], 422);
            }
        }
    
        // Chuyển đổi is_active thành boolean
        $validated['is_active'] = filter_var($request->input('is_active'), FILTER_VALIDATE_BOOLEAN);
    
        // Xử lý hình ảnh nếu có
        $imageName = null;
        if ($request->hasFile('image')) {
            $directory = public_path('images/discount_codes');
            if (!File::exists($directory)) {
                File::makeDirectory($directory, 0777, true);
            }
    
            $imageName = uniqid() . '.' . $request->image->extension();
            $request->image->move($directory, $imageName);
        }
    
        $validated['image'] = $imageName;
    
        // Tạo mã giảm giá
        $discountCode = DiscountCode::create($validated);
    
        return response()->json([
            'status' => 201,
            'message' => 'Mã giảm giá đã được tạo thành công.',
            'data' => $discountCode
        ]);
    }
    


    public function showDiscountCode($id)
    {
        $discountCode = DiscountCode::find($id);

        if (!$discountCode) {
            return response()->json([
                'status' => 404,
                'message' => 'Mã giảm giá không tìm thấy.',
            ]);
        }

        return response()->json([
            'status' => 200,
            'message' => 'Thông tin mã giảm giá.',
            'data' => $discountCode
        ]);
    }

    public function listDiscountCodes()
    {
        $discountCodes = DiscountCode::all();
    
        return response()->json([
            'status' => 200,
            'message' => 'Danh sách mã giảm giá.',
            'data' => $discountCodes
        ]);
    }

    public function updateDiscountCode(Request $request, $id)
    {
        $validated = $request->validate([
            'code' => 'nullable|string|unique:discount_codes,code,' . $id,
            'description' => 'nullable|string',
            'discount_amount' => 'nullable|numeric|min:0',
            'minimum_order_value' => 'nullable|numeric|min:0',
            'discount_type' => 'nullable|string|in:percentage,fixed',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after:start_date',
            'is_active' => 'nullable|boolean',
            'usage_limit' => 'nullable|integer|min:0',
            'used_count' => 'nullable|integer|min:0',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]);
    
        $discountCode = DiscountCode::find($id);
    
        if (!$discountCode) {
            return response()->json([
                'status' => 404,
                'message' => 'Mã giảm giá không tìm thấy.',
            ]);
        }
    
        // Kiểm tra logic giá trị của discount_amount dựa trên discount_type
        if ($request->has('discount_type')) {
            if ($request->input('discount_type') === 'percentage') {
                if ($request->input('discount_amount') < 1 || $request->input('discount_amount') > 100) {
                    return response()->json([
                        'status' => 422,
                        'message' => 'Discount amount for percentage must be between 1 and 100.',
                    ], 422);
                }
            } elseif ($request->input('discount_type') === 'fixed') {
                if ($request->input('discount_amount') < 1000) {
                    return response()->json([
                        'status' => 422,
                        'message' => 'Discount amount for fixed type must be at least 1000.',
                    ], 422);
                }
            }
        }
    
        // Kiểm tra và xử lý ảnh nếu có tải lên
        if ($request->hasFile('image')) {
            $directory = public_path('images/discount_codes');
            if (!File::exists($directory)) {
                File::makeDirectory($directory, 0777, true);
            }
    
            $imageName = uniqid() . '.' . $request->image->extension();
            $request->image->move($directory, $imageName);
    
            // Gán tên ảnh mới vào mảng validated
            $validated['image'] = $imageName;
    
            // Xóa ảnh cũ nếu cần
            if ($discountCode->image) {
                $oldImagePath = $directory . '/' . $discountCode->image;
                if (File::exists($oldImagePath)) {
                    File::delete($oldImagePath);
                }
            }
        } else {
            // Nếu không có ảnh mới, giữ nguyên ảnh cũ
            $validated['image'] = $discountCode->image;
        }
    
        $discountCode->update($validated);
    
        return response()->json([
            'status' => 200,
            'message' => 'Mã giảm giá đã được cập nhật.',
            'data' => $discountCode
        ]);
    }

    public function deleteDiscountCode($id)
    {
        $discountCode = DiscountCode::find($id);

        if (!$discountCode) {
            return response()->json([
                'status' => 404,
                'message' => 'Mã giảm giá không tìm thấy.',
            ]);
        }

        $discountCode->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Mã giảm giá đã bị xóa.',
        ]);
    }

    public function applyDiscountCode(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|string',
            'order_total' => 'required|numeric|min:0',
        ]);

        $discountCode = DiscountCode::where('code', $validated['code'])->first();

        if (!$discountCode || !$discountCode->is_active) {
            return response()->json([
                'status' => 404,
                'message' => 'Mã giảm giá không hợp lệ hoặc không còn hoạt động.',
            ]);
        }

        $now = now();
        if ($now < $discountCode->start_date || $now > $discountCode->end_date) {
            return response()->json([
                'status' => 422,
                'message' => 'Mã giảm giá đã hết hạn hoặc chưa được kích hoạt.',
            ]);
        }

        if ($discountCode->usage_limit > 0 && $discountCode->usage_limit <= $discountCode->used_count) {
            return response()->json([
                'status' => 422,
                'message' => 'Mã giảm giá đã đạt giới hạn sử dụng.',
            ]);
        }

        if ($discountCode->minimum_order_value && $validated['order_total'] < $discountCode->minimum_order_value) {
            return response()->json([
                'status' => 422,
                'message' => 'Giá trị đơn hàng không đủ để áp dụng mã giảm giá.',
            ], 422);
        }

        $discount = 0;
        if ($discountCode->discount_type === 'percentage') {
            $discount = $validated['order_total'] * ($discountCode->discount_amount / 100);
        } elseif ($discountCode->discount_type === 'fixed') {
            $discount = $discountCode->discount_amount;
        }

        $discountedTotal = max(0, $validated['order_total'] - $discount);

        $discountCode->increment('used_count');

        return response()->json([
            'status' => 200,
            'message' => 'Áp dụng mã giảm giá thành công.',
            'data' => [
                'original_price' => $validated['order_total'],
                'discount' => $discount,
                'discounted_price' => $discountedTotal,
            ],
        ]);
    }
}
