<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

use App\Models\Event;

use Intervention\Image\ImageManager;
use Intervention\Image\File;
use Intervention\Image\Drivers\Gd\Driver;


class EventController extends HelpController
{
    public function index(Request $request)
    {
        if ($request->query('all') === 'true') {
            $data = Event::all();
            return $this->sendResponse(200, 'Hiển thị danh sách sự kiện thành công!', $data);
        }

        $perPage = $request->query('per_page', 5);
        $data = Event::paginate((int)$perPage);
        return $this->sendResponse(200, "Hiển thị danh sách sự kiện thành công! Với {$perPage} đối tượng mỗi trang", $data);
    }


    public function show($id) {
        $data = Event::find($id);
    
            if(!$data) {
                return $this->sendNotFoundResponse('Không tìm thấy sự kiện!');
            }
    
            return $this->sendResponse(200, 'Lấy thông tin chi tiết sự kiện thành công!', $data);
    }


    public function store(Request $request)
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
            return $this->sendResponse(201, 'Tạo mới sự kiện thành công!', $event);
        });
    }


    public function update(Request $request, $id)
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

    public function destroy($id)
    {
        $event = Event::find($id);

        if (!$event) {
            return $this->sendNotFoundResponse('Không tìm thấy sự kiện!');
        }

        $relations = ['articles'];

        foreach ($relations as $relation) {
            if ($event->{$relation}()->exists()) {
                return $this->sendResponse(400, "Không thể xoá sự kiện vì đang được sử dụng trong bảng {$relation}!");
            }
        }

        $event->delete();

        return $this->sendResponse(200, 'Xoá sự kiện thành công!');
    }
}
