<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ProvinceController extends Controller
{
    public function getProvinces()
    {
        try {

            // Call back API to have city list
            $response = Http::timeout(10)->get('https://provinces.open-api.vn/api/p/');

            // check the error
            if ($response->successful()) {
                $provinces = $response->json();
                $provinceNames = array_map(function ($province) {
                    return $province['name'];
                }, $provinces);

                return response()->json([
                    'status' => 200,
                    'message' => 'Lấy danh sách tên các tỉnh thành - thành phố thành công',
                    'data' => $provinceNames
                ], 200);
            } else {
                Log::error('Failed to fetch provinces from API', [
                    'status_code' => $response->status(),
                    'error_body' => $response->body(),
                ]);

                return response()->json([
                    'status' => 500,
                    'message' => 'Lỗi, không thể lấy được tên các tỉnh - thành phố!',
                    'error' => $response->body()
                ], 500);
            }
        } catch (ConnectionException $e) {
            // log the connection error
            Log::error('Connection error while fetching provinces', [
                'error_message' => $e->getMessage(),
            ]);

            return response()->json([
                'status' => 500,
                'message' => 'Lỗi kết nối đến API, vui lòng kiểm tra lại URL hoặc kết nối mạng.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
