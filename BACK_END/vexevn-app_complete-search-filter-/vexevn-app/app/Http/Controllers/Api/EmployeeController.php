<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Employee;

class EmployeeController extends HelpController
{
    public function showEmployee($id) {
        $data = Employee::find($id);
    
        if(!$data) {
            return $this->sendNotFoundResponse('Không tìm thấy nhân viên!');
        }

        return $this->sendResponse(200, 'Lấy thông tin chi tiết nhân viên thành công!', $data);
    }
    public function listEmployee() {
        $data = Employee::paginate(10);

        return $this->sendResponse(200, 'Hiển thị danh sách nhân viên thành công!', $data);
    }
    public function createEmployee(Request $request) {
        $rules = [
            'name' => 'required|string',
            'car_house_id' => 'required|exists:car_houses,id',
            'phone' => 'required|unique:employees,phone|regex:/^[0-9]{10}$/',
            'address' => 'nullable|string',
            'role' => 'required|in:0,1'
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {
            $employee = Employee::create([
                'name' => $request->name,
                'car_house_id' => $request->car_house_id,
                'phone' => $request->phone,
                'address' => $request->address,
                'role' => $request->role,
            ]);

            // Trả về thông báo success
            return $this->sendResponse(201, 'Nhân viên tạo mới thành công!', $employee);
        });

    }
    public function updateEmployee(Request $request, $id) {
        $employee = Employee::find($id);

        if (!$employee) {
            return $this->sendNotFoundResponse('Không tìm thấy nhân viên!');
        }

        $rules = [
            'name' => 'required|string',
            'car_house_id' => 'required|exists:car_houses,id',
            'phone' => 'required|unique:employees,phone,' .$id.'|regex:/^[0-9]{10}$/',
            'address' => 'nullable|string',
            'role' => 'required|in:0,1'
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request, $employee) {
            $employee->update([
                'name' => $request->name ?? $employee->name,
                'car_house_id' => $request->car_house_id ?? $employee->car_house_id,
                'phone' => $request->phone ?? $employee->phone,
                'address' => $request->address,
                'role' => $request->role ?? $employee->role,
            ]);

            return $this->sendResponse(200, 'Cập nhật nhân viên thành công!', $employee);
        });
    }
    public function deleteEmployee($id) {
        return $this->handleDelete(Employee::class, $id, 'Nhân viên đã được xóa thành công!');
    }
}
