<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
class CommentController extends Controller
{
    // Lấy danh sách tất cả bình luận
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
    

    public function store(Request $request)
    {
        // Validate dữ liệu
        $validated = $request->validate([
            'content' => 'required|string|max:500',
        ]);

        // Tạo bình luận
        $comment = Comment::create([
            'content' => $validated['content'],
            'users_id' => Auth::id(), 
        ]);

        // Load thêm thông tin user để trả về
        $comment->load('user');

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
                'created_at' => $comment->created_at,
            ]
        ], 201);
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

    // Xóa một bình luận theo ID
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
