<?php
namespace App\Console;

use App\Console\Commands\ResetCompletedTrips;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        ResetCompletedTrips::class,
    ];

    protected function schedule(Schedule $schedule)
    {
        // Lên lịch chạy command hàng ngày, ví dụ vào lúc 2 giờ sáng
        $schedule->command(command: 'app:reset-completed-trips')->everyMinute();
    }

    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
