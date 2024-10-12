<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Support\Facades\Auth;
class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->hasHeader('Authorization')) {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized: API token missing.'
            ], 401);
        }

        if (Auth::check() && Auth::user()->role !== 'admin') {
            return response()->json([
                'status' => false,
                'message' => 'Access denied: You must be an admin to perform this action.'
            ], 403);
        }

        

        return $next($request);
    }
}
