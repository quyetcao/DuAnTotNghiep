<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\CarHouse;

class CarHouseController extends HelpController
{
    public function index(Request $request)
    {
        if ($request->query('all') === 'true') {
            $data = CarHouse::all();
            return $this->sendResponse(200, 'Hiển thị danh sách nhà xe thành công!', $data);
        }

        $perPage = $request->query('per_page', '5');
        $data = CarHouse::paginate((int)$perPage);
        return $this->sendResponse(200, "Hiển thị danh sách nhà xe thành công! Với {$perPage} đối tượng mỗi trang", $data);
    }


    public function show($id)
    {
        $data = CarHouse::find($id);
        // $data = CarHouse::with('carImages', 'carHouse', 'carType')


        if (!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy nhà xe!');
        }

        return $this->sendResponse(200, 'Lấy thông tin chi tiết nhà xe thành công!', $data);
    }


    public function store(Request $request)
    {
        $rules =  [
            'name' => 'required|unique:car_houses,name',
            'phone' => 'required|unique:car_houses,phone|regex:/^0[0-9]{9}$/',
            'address' => 'required|string',
            'status' => 'required|in:active,inactive,paused'
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {
            $carHouse = CarHouse::create([
                'name' => $request->name,
                'phone' => $request->phone,
                'address' => $request->address,
                'status' => $request->status ?? 'active'
            ]);

            // Trả về thông báo success
            return $this->sendResponse(201, 'Tạo mới nhà xe thành công!', $carHouse);
        });
    }


    public function update(Request $request, $id)
    {
        $carHouse = CarHouse::find($id);

        if (!$carHouse) {
            return $this->sendNotFoundResponse('Không tìm thấy nhà xe!');
        }


        $rules =  [
            'name' => 'required|unique:car_houses,name,' . $id,
            'phone' => 'required|unique:car_houses,phone,' . $id . '|regex:/^[0-9]{10}$/',
            'address' => 'nullable|string',
            'status' => 'required|in:active,inactive,paused'
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request, $carHouse) {
            $carHouse->update([
                'name' => $request->name ?? $carHouse->name,
                'phone' => $request->phone ?? $carHouse->phone,
                'address' => $request->address ?? $carHouse->address,
                'status' => $request->status ?? $carHouse->status,
            ]);

            // Trả về thông báo success
            return $this->sendResponse(201, 'Cập nhật nhà xe thành công!', $carHouse);
        });
    }


    public function destroy($id)
    {
        $carHouse = CarHouse::find($id);

        if (!$carHouse) {
            return $this->sendNotFoundResponse('Không tìm thấy nhà xe!');
        }

        $relations = ['users', 'employee', 'pickupPoints', 'dropoffPoints', 'cars'];

        foreach ($relations as $relation) {
            if ($carHouse->{$relation}()->exists()) {
                return $this->sendResponse(400, "Không thể xoá nhà xe vì đang được sử dụng trong bảng {$relation}!");
            }
        }

        $carHouse->delete();
        return $this->sendResponse(200, 'Xoá nhà xe thành công!');
    }
}
