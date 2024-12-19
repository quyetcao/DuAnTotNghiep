<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\City;

class CityController extends HelpController
{
    // Hiển thị tất cả thành phố
    public function show()
    {
        return response()->json(City::all(), 200); // 200 OK
    }

    // Tạo thành phố mới
    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $city = City::create($validatedData);

        return response()->json([
            'message' => 'Thành phố được tạo thành công!',
            'data' => $city,
        ], 201); // 201 Created
    }

    // Hiển thị chi tiết thành phố theo ID
    public function showId($id)
    {
        $city = City::find($id);

        if (!$city) {
            return response()->json(['message' => 'Không tìm thấy thành phố!'], 404); // 404 Not Found
        }

        return response()->json($city, 200); // 200 OK
    }

    // Cập nhật thành phố
    public function update(Request $request, $id)
    {
        $city = City::find($id);

        if (!$city) {
            return response()->json(['message' => 'Không tìm thấy thành phố!'], 404); // 404 Not Found
        }

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $city->update($validatedData);

        return response()->json([
            'message' => 'Cập nhật thành phố thành công!',
            'data' => $city,
        ], 200); // 200 OK
    }

    // Xóa thành phố
    public function delete($id)
    {
        $city = City::find($id);

        if (!$city) {
            return response()->json(['message' => 'Không tìm thấy thành phố!'], 404); // 404 Not Found
        }

        $city->delete();

        return response()->json(['message' => 'Thành phố đã được xóa thành công!'], 200); // 200 OK
    }
}
