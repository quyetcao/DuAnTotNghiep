<?php
namespace App\Console;

use App\Console\Commands\ResetCompletedTrips;
use App\Console\Commands\ChangeStatusTrips;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        ResetCompletedTrips::class,
        ChangeStatusTrips::class,
    ];

    protected function schedule(Schedule $schedule)
    {
        $schedule->command('app:reset-completed-trips')->hourly();
        $schedule->command('app:change-status-trips')->hourly();
    }

    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
