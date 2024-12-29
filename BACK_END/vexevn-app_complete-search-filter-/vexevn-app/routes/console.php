<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

// Đăng ký lệnh reset-completed-trips
// Artisan::command('app:reset-completed-trips', function () {
//     // Logic của bạn để reset completed trips
// })->purpose('Reset completed trips')->everyMinute();
