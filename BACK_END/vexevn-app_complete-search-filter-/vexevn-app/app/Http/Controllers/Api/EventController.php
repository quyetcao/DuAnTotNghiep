<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

use App\Models\Event;
use App\Models\Article;

class EventController extends HelpController
{
    public function listEvent()
    {
        $data = Event::paginate(10);

        return $this->sendResponse(200, 'Hiển thị danh sách sự kiện thành công', $data);
    }
    
    public function uploadEvent(Request $request)
    {
        $rules = [
            'title' => 'required|string|max:255|unique:events,title',
            'description' => 'nullable|string',
            'start_date' => 'nullable|date|after_or_equal:today',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'status' => 'required|in:active,inactive',
        ];

        return $this->validateAndExecute($request, $rules, function () use ($request) {
            $event = Event::create([
                'title' => $request->title,
                'description' => $request->description,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'status' => $request->status,
            ]);

            // Trả về thông báo success
            return $this->sendResponse(200, 'Sự kiện tạo mới thành công!', $event);
        });
    }

    public function updateEvent(Request $request, $id)
    {
        $event = Event::find($id);

        if (!$event) {
            return $this->sendNotFoundResponse('Không tìm thấy sự kiện!');
        }

        $rules = [
            'title' => 'required|string|max:255|unique:events,title,' . $event->id,
            'description' => 'nullable|string',
            'start_date' => 'nullable|date|after_or_equal:today',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'status' => 'required|in:active,inactive',
        ];


        return $this->validateAndExecute($request, $rules, function () use ($request, $event) {
            $event->update([
                'title' => $request->title ?? $event->title,
                'description' => $request->description,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'status' => $request->status ?? $event->status,
            ]);

            return $this->sendResponse(200, 'Cập nhật sự kiện thành công!', $event);
        });
    }

    public function deleteEvent($id)
    {
        return $this->handleDelete(Event::class, $id, 'Sự kiệnn đã được xóa thành công!');
    }
}
