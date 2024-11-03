<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

use App\Models\Event;
use App\Models\Article;

class EventController extends Controller
{
    public function listEvent()
    {
        $data = Event::paginate(10);

        return response()->json([
            'status' => 200,
            'message' => 'Hiển thị danh sách sự kiện thành công',
            'data' => $data
        ], 200);
    }

    public function uploadEvent(Request $request)
    {
        // Xác thực 
        $validation = Validator::make($request->all(), [
            'title' => 'required|string|max:255|unique:events,title',
            'description' => 'nullable|string',
            'start_date' => 'nullable|date|after_or_equal:today',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'status' => 'required|in:active,inactive',
        ]);

        // Nếu xác thực fail
        if ($validation->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form!',
                'errors' => $validation->errors(),
            ], 422);
        }

        try {
            DB::beginTransaction();

            // Tạo event mới
            $event = Event::create([
                'title' => $request->title,
                'description' => $request->description,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'status' => $request->status,
            ]);

            DB::commit();

            return response()->json([
                'status' => 201,
                'message' => 'Sự kiện tạo mới thành công!',
                'data' => $event
            ], 201);
        } catch (\Throwable $th) {
            DB::rollBack();

            return response()->json([
                'status' => 500,
                'message' => 'Lỗi hệ thống',
                'errors' => $th->getMessage(),
            ], 500);
        }
    }

    public function updateEvent(Request $request, $id) {
        $event = Event::find($id);

        if(!$event) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy sự kiện!',
            ], 404);
        }

        $validation = Validator::make($request->all(), [
            'title' => 'required|string|max:255|unique:events,title,' . $event->id,
            'description' => 'nullable|string',
            'start_date' => 'nullable|date|after_or_equal:today',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'status' => 'required|in:active,inactive',
        ]);

        if ($validation->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Lỗi xác thực form',
                'errors' => $validation->errors()
            ], 422);
        }

        try {
            DB::beginTransaction();

            $event->update([
                'title' => $request->title ?? $event->title,
                'description' => $request->description,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'status' => $request->status ?? $event->status,
            ]);

            DB::commit();
            return response()->json([
                'status' => 200,
                'message' => 'Cập nhật sự kiện thành công!',
                'data' => $event
            ], 200);

        } catch (\Throwable $th) {
            DB::rollBack();

            return response()->json([
                'status' => 500,
                'message' => 'Lỗi hệ thống',
                'errors' => $th->getMessage(),
            ], 500);
        }
    }

    public function deleteEvent($id) {
        $event = Event::find($id);

        if(!$event) {
            return response()->json([
                'status' => 404,
                'message' => 'Không tìm thấy sự kiện!',
            ], 404);
        }

        try {
            // Xóa sự kiện
            $event->delete();

            return response()->json([
                'status' => 200,
                'message' => 'Sự kiện đã được xóa thành công!',
            ], 200);

        } catch (\Throwable $th) {

            return response()->json([
                'status' => 500,
                'message' => 'Lỗi hệ thống',
                'errors' => $th->getMessage(),
            ], 500);
        }
    }
}
