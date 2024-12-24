<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class HelpController extends Controller
{
    public function handleDatabaseTransaction(callable $operation)
    {
        try {
            DB::beginTransaction();
            $result = $operation();
            DB::commit();

            return $result;
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->sendResponse(500, 'Lỗi hệ thống!', ['error' => $th->getMessage()]);
        }
    }

    public function validateAndExecute(Request $request, array $rules, callable $operation)
    {
        $validation = Validator::make($request->all(), $rules);

        // Xử lý lỗi xác thực
        if ($validation->fails()) {
            return $this->sendResponse(422, 'Lỗi xác thực form!', $validation->errors());
        }

        // Xử lý transaction
        return $this->handleDatabaseTransaction($operation);
    }

    public function sendResponse($statusCode = 200, $message = '', $data = [])
    {
        return response()->json([
            'status' => $statusCode,
            'message' => $message,
            'data' => $data
        ], $statusCode);
    }

    public function sendNotFoundResponse($message = 'Không tìm thấy tài nguyên!')
    {
        return $this->sendResponse(404, $message);
    }

    public function handleDelete($model, $id, $message = 'Xóa thành công!')
    {
        $item = $model::find($id);

        if (!$item) {
            return $this->sendNotFoundResponse('Không tìm thấy dữ liệu!');
        }

        return $this->handleDatabaseTransaction(function () use ($item, $message) {
            if (!$item->delete()) {
            return $this->sendResponse(500, 'Không thể xóa dữ liệu');
        }
            return $this->sendResponse(200, $message);
        });
    }


}
