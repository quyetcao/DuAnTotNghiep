<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class Role
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        if (!$request->hasHeader('Authorization')) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized: API token missing.'
            ], 401);
        }

        if (!Auth::check()) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized: Please log in.'
            ], 401);
        }

        if (!in_array(Auth::user()->role, $roles)) {
            return response()->json([
                'status' => 403,
                'message' => 'Access denied: You do not have the required role.',

            ], 403);
        }

        return $next($request);
    }
}
