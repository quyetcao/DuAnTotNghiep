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
        $validated = $request->validate([
            'code' => 'required|string|unique:discount_codes,code',
            'description' => 'nullable|string',
            'discount_amount' => 'required|numeric|min:0',
            'discount_type' => 'required|string|in:percentage,flat',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'is_active' => 'required',
            'usage_limit' => 'required|integer|min:0',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]);
    
        $validated['is_active'] = filter_var($request->input('is_active'), FILTER_VALIDATE_BOOLEAN);
    
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
            'discount_type' => 'nullable|string|in:percentage,flat',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after:start_date',
            'is_active' => 'nullable|boolean',
            'usage_limit' => 'nullable|integer|min:0',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]);

        $discountCode = DiscountCode::find($id);

        if (!$discountCode) {
            return response()->json([
                'status' => 404,
                'message' => 'Mã giảm giá không tìm thấy.',
            ]);
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
}
