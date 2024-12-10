<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::get();
        return view('role-permission.user.index', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $roles = Role::get();
        // dd(Role::all());

        $roles = Role::pluck('name', 'name')->all();
        return view('role-permission.user.create', [
            'roles' => $roles
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'name' => 'nullable|string|max:255',
            'phone' => 'required|string|max:255',
            'email' => 'nullable|email|unique:users,email',
            'password' => 'required|string',
            'roles' => 'required'
        ]);

        $user = User::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $user->syncRoles($request->roles); 
        

        return redirect('users')->with('status', 'User Created Successfully With Roles');
    }

    /**
     * Display the specified resource.
     */

     public function listUser()
     {
         $data = User::all();
 
         return response()->json([
             'status' => 200,
             'message' => 'Hiển thị danh sách User thành công',
             'data' => $data
         ], 200);
     }
   
    /**
     * Show the form for editing the specified resource.
     */
    // public function updateUserByAdmin(Request $request, $id)
    // {
    //     $user = User::find($id);
    
    //     if (!$user) {
    //         return $this->sendNotFoundResponse('Không tìm thấy người dùng!');
    //     }
    
    //     $rules = [
    //         'role' => 'required|in:admin,user,manager', // Các giá trị hợp lệ của role
    //         'carhouse_id' => 'nullable|integer|exists:carhouses,id', // Kiểm tra carhouse_id tồn tại trong bảng carhouses
    //     ];
    
    //     return $this->validateAndExecute($request, $rules, function () use ($request, $user) {
    //         $user->update([
    //             'role' => $request->role ?? $user->role,
    //             'carhouse_id' => $request->carhouse_id,
    //         ]);
    
    //         return $this->sendResponse(200, 'Cập nhật người dùng thành công!', $user);
    //     });
    // }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
