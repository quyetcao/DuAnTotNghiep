<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\{
    CarHouse,
    Car,
};
use Illuminate\Http\Request;

use App\Models\Employee;

class EmployeeController extends HelpController
{
    public function index() {
        $data = Employee::paginate(10);

        return $this->sendResponse(200, 'Hiển thị danh sách nhân viên thành công!', $data);
    }


    public function show($id) {
        $data = Employee::find($id);
    
        if(!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy nhân viên!');
        }

        return $this->sendResponse(200, 'Lấy thông tin chi tiết nhân viên thành công!', $data);
    }


    public function getEmployeeByCarHouse($id)
    {

        $data = Employee::where('car_house_id', $id)->get();

        if ($data->isEmpty()) {
            return $this->sendNotFoundResponse('Không tìm thấy nhân viên phụ trách nhà xe này!');
        }

        return $this->sendResponse(200, 'Lấy thông tin nhân viên theo nhà xe thành công!', $data);
    }


    public function getEmployeeByCar($id) {
        $data = Employee::where('car_id', $id)->get();
        
        if ($data->isEmpty()) {
            return $this->sendNotFoundResponse('Không tìm thấy nhân viên phụ trách xe này!');
        }

        return $this->sendResponse(200, 'Lấy thông tin nhân viên theo xe thành công!', $data);
    }


    public function store(Request $request) {
        $rules = [
            'name' => 'required|string',
            'car_id' => 'nullable|exists:cars,id',
            'car_house_id' => 'required|exists:car_houses,id',
            'phone' => 'required|unique:employees,phone|regex:/^0[0-9]{10}$/',
            'address' => 'nullable|string',
            'role' => 'required|in:0,1',
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {
            if (!$request->car_id == null) {
                $car = Car::find($request->car_id);
                $carHouse = CarHouse::find($request->car_house_id);

                if ($car->car_house_id != $request->car_house_id) {
                    return $this->sendResponse(422, "Xe {$car->name} không thuộc nhà xe {$carHouse->name}!");
                }
            }
            
            $employee = Employee::create([
                'name' => $request->name,
                'car_id' => $request->car_id,
                'car_house_id' => $request->car_house_id,
                'phone' => $request->phone,
                'address' => $request->address,
                'role' => $request->role,
            ]);

            // Trả về thông báo success
            return $this->sendResponse(201, 'Nhân viên tạo mới thành công!', $employee);
        });

    }


    public function update(Request $request, $id) {
        $employee = Employee::find($id);

        if (!$employee) {
            return $this->sendNotFoundResponse('Không tìm thấy nhân viên!');
        }

        $rules = [
            'name' => 'required|string',
            'car_id' => 'nullable|exists:cars,id',
            'car_house_id' => 'required|exists:car_houses,id',
            'phone' => 'required|unique:employees,phone,' .$id.'|regex:/^[0-9]{10}$/',
            'address' => 'nullable|string',
            'role' => 'required|in:0,1'
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request, $employee) {
            if (!$request->car_id == null) {
                $car = Car::find($request->car_id);
                $carHouse = CarHouse::find($request->car_house_id);

                if ($car->car_house_id != $request->car_house_id) {
                    return $this->sendResponse(422, "Xe {$car->name} không thuộc nhà xe {$carHouse->name}!");
                }
            }

            $employee->update([
                'name' => $request->name ?? $employee->name,
                'car_id' => $request->car_id ?? $employee->car_id,
                'car_house_id' => $request->car_house_id ?? $employee->car_house_id,
                'phone' => $request->phone ?? $employee->phone,
                'address' => $request->address,
                'role' => $request->role ?? $employee->role,
            ]);

            return $this->sendResponse(200, 'Cập nhật nhân viên thành công!', $employee);
        });
    }


    public function destroy($id) {
        return $this->handleDelete(Employee::class, $id, 'Nhân viên đã được xóa thành công!');
    }
}