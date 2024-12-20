<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\CarTrip;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Auth;
class CommentController extends Controller
{
    public function index()
    {
        $data = Comment::all();
    
        if ($data->isEmpty()) {
            return response()->json([
                'status' => 404,
                'message' => 'đang trống!'
            ], 404);
        }
    
        return response()->json([
            'status' => 200,
            'message' => 'Hiển thị danh sách bình luận thành công',
            'data' => $data
        ], 200);
    }
    
    public function show($id)
    {
        $comment = Comment::with('user')->find($id);
    
        if (!$comment) {
            return response()->json(['message' => 'Bình luận không tồn tại'], 404);
        }
        return response()->json([
            'status' => 200,
            'message' => 'Lấy thông tin bình luận thành công!',
            'data' => [
                'id' => $comment->id,
                'content' => $comment->content,
                'user' => $comment->user, 
                'created_at' => $comment->created_at,
                'updated_at' => $comment->updated_at,
            ],
        ], 200);
    }
    
    public function commentsByTrip($carTripId)
    {
        $comments = Comment::where('car_trips_id', $carTripId)->with('user')->get();
        if ($comments->isEmpty()) {
            return response()->json([
                'status' => 404,
                'message' => 'Không có bình luận nào cho chuyến xe này.',
            ], 404);
        }
    
        return response()->json([
            'status' => 200,
            'message' => 'Lấy danh sách bình luận thành công.',
            'data' => $comments->map(function ($comment) {
                return [
                    'id' => $comment->id,
                    'content' => $comment->content,
                    'user' => [
                        'id' => $comment->user->id,
                        'name' => $comment->user->name,
                    ],
                    'created_at' => $comment->created_at,
                ];
            }),
        ], 200);
    }
    
    public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'content' => 'required|string|max:500',
        'car_trips_id' => 'required|exists:car_trips,id', 
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 400);
    }

    DB::beginTransaction();
    
    try {
        // Tạo bình luận
        $comment = Comment::create([
            'content' => $request['content'], // Sử dụng dữ liệu đã validated
            'users_id' => Auth::id(),
            'car_trips_id' => $request['car_trips_id'], 
        ]);

        // Load thêm thông tin user để trả về
        $comment->load('user');
        DB::commit();

        // Trả về phản hồi thành công
        return response()->json([
            'status' => 'success',
            'message' => 'Bình luận đã được thêm thành công.',
            'data' => [
                'id' => $comment->id,
                'content' => $comment->content,
                'user' => [
                    'id' => $comment->user->id,
                    'name' => $comment->user->name,
                ],
                'car_trips_id' => $comment->car_trips_id,
                'created_at' => $comment->created_at,
            ],
        ], 201);

    } catch (\Exception $e) {
        DB::rollBack();

        return response()->json([
            'status' => 'error',
            'message' => 'Đã xảy ra lỗi khi thêm bình luận.',
            'error' => $e->getMessage(),
        ], 500);
    }
}


    public function update(Request $request, $id)
    {
        $comment = Comment::find($id);
        if (!$comment) {
            return response()->json(['message' => 'Bình luận không tồn tại'], 404);
        }

        $validatedData = $request->validate([
            'content' => 'sometimes|string',
          
        ]);

        $comment->update($validatedData);
        $comment->load('user');

        return response()->json([
            'status' => 200,
            'message' => 'Bình luận đã được cập nhật.',
            'data' => [
                'id' => $comment->id,
                'content' => $comment->content,
                'user' => [
                    'id' => $comment->user->id,
                    'name' => $comment->user->name, 
                ],
                'updated_at' => $comment->updated_at,
            ]
        ], 200);
    }

    public function destroy($id)
    {
        $comment = Comment::find($id);
        if (!$comment) {
            return response()->json(['message' => 'Bình luận không tồn tại'], 404);
        }

        $comment->delete();
        return response()->json(['message' => 'Xóa bình luận thành công'], 200);
    }
}
