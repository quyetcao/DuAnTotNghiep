<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

use App\Models\CarTrip;

Artisan::command('inspire', function () {
  $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Artisan::command('update:status-trips', function () {
  CarTrip::updateStatuses();
  $this->info('Cập nhật trạng thái chuyến xe thành công!');
})->describe('Cập nhật trạng thái của các chuyến xe.')
  ->everyMinute(); // Gắn lịch trình trực tiếp

Artisan::command('reset:completed-trips', function () {
  CarTrip::resetCompletedTrips();
  $this->info('Reset chuyến xe thành công!');
})->describe('Reset trạng thái các chuyến xe đã completed về not_started, cập nhật ngày khởi hành và reset ghế.')
  ->everyMinute(); // Gắn lịch trình trực tiếp