<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function index()
    {
        $permissions = Permission::get();
        return view('role-permission.permission.index', [
            'permissions' => $permissions
        ]);
    }
    public function create()
    {
        return view('role-permission.permission.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => [
                'required',
                'string',
                'unique:permissions,name'  // Loại bỏ khoảng trắng
            ]
        ]);

        Permission::create([
            'name' => $request->name
        ]);

        return redirect('permissions')->with('status', 'Permission Created Successfully');
    }

    public function edit(Permission $permission)
    {
        // return $permission;
        return view('role-permission.permission.edit', [
            'permission' => $permission
        ]);
        // return view('role-permission.permission.edit');
    }

    public function update(Request $request, Permission $permission){
        $request->validate([
            'name' => [
                'required',
                'string',
                'unique:permissions,name,'.$permission->id  // Loại bỏ khoảng trắng
            ]
        ]);

        $permission->update([
            'name' => $request->name
        ]);

        return redirect('permissions')->with('status', 'Permission Updated Successfully');
    }

    public function destroy($permissionId) {
        $permission = Permission::find($permissionId);
        $permission->delete();
        return redirect('permissions')->with('status', 'Permission Deleted Successfully');
    }
}
