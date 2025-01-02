<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\CarType;

class CarTypeController extends HelpController
{
    public function index(Request $request)
    {
        if ($request->query('all') === 'true') {
            $data = CarType::all();
            return $this->sendResponse(200, 'Hiển thị danh sách loại xe không phân trang thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);

        $data = CarType::paginate((int)$perPage);
        return $this->sendResponse(200, 'Hiển thị danh sách loại xe thành công!', $data);
    }


    public function show($id)
    {
        $data = CarType::find($id);
        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy loại xe!');
        }
        return $this->sendResponse(200, 'Lấy thông tin chi tiết loại xe thành công!', $data);
    }


    public function store(Request $request)
    {
        $rules = [
            'name' => 'required|string|unique:car_types,name',
            'quantity_seat' => 'required|integer|min:1',
            'image' => 'nullable|image|mimes:jpeg,png,jpg',
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {

            $imageName = null;
            if ($request->hasFile('image')) {
                $carTypeID = $request->name;
                $imageName = time() . '.' . $request->image->extension();

                $request->image->move(public_path('images/cartypes'), $imageName);
            }

            $carType = CarType::create([
                'name' => $request->name,
                'quantity_seat' => $request->quantity_seat,
                'image' => $imageName
            ]);

            return $this->sendResponse(201, 'Thêm mới loại xe thành công!', $carType);
        });
    }


    public function update(Request $request, $id)
    {
        $carType = CarType::find($id);

        if (!$carType) {
            return $this->sendNotFoundResponse('Không tìm thấy loại xe!');
        }

        $rules = [
            'name' => 'required|unique:car_types,name,' . $id,
            'quantity_seat' => 'required|integer|min:1',
            'image' => 'nullable|image|mimes:jpeg,png,jpg',
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request, $carType) {

            if ($request->hasfile('image')) {
                $old_img_path = public_path('images/cartypes/' . $carType->image);
                if (file_exists($old_img_path && is_file($old_img_path))) {
                    unlink($old_img_path);
                }

                $imageName = time() . '.' . $request->image->extension();

                $request->image->move(public_path('images/cartypes'), $imageName);

                $carType->image = $imageName;
            }

            $carType->update([
                'name' => $request->name,
                'quantity_seat' => $request->quantity_seat,
                'image' => $imageName ?? $carType->image
            ]);

            return $this->sendResponse(200, 'Cập nhật loại xe thành công!', $carType);
        });
    }


    public function destroy($id)
    {
        $carType = CarType::find($id);

        if (!$carType) {
            return $this->sendNotFoundResponse('Không tìm thấy loại xe!');
        }

        if ($carType->cars()->count() > 0) {
            return $this->sendResponse(400, 'Không thể xoá loại xe vì đang được sử dụng!');
        }

        if ($carType->image) {
            $imagePath = public_path('images/cartypes/') . $carType->image;

            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }
        return $this->handleDelete(CarType::class, $id, 'Xoá loại xe thành công!');
    }
}
