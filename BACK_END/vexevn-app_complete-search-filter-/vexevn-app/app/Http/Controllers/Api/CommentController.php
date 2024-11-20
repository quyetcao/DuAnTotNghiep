<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    // Lấy danh sách tất cả bình luận
    public function index()
    {
        $comments = Comment::all();
        return response()->json($comments, 200);
    }

    // Lấy chi tiết một bình luận theo ID
    public function show($id)
    {
        $comment = Comment::find($id);
        if (!$comment) {
            return response()->json(['message' => 'Bình luận không tồn tại'], 404);
        }
        return response()->json($comment, 200);
    }

    // Tạo mới một bình luận
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'content' => 'required|string',
           'users_id' => 'required|exists:users,id',
        ]);

        $comment = Comment::create($validatedData);
        return response()->json(['message' => 'Tạo bình luận thành công', 'comment' => $comment], 201);
    }

    // Cập nhật một bình luận theo ID
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
        return response()->json(['message' => 'Cập nhật bình luận thành công', 'comment' => $comment], 200);
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
