<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\CarTrip;

class ChangeStatusTrips extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:change-status-trips';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Đổi trạng thái running, completed cho chuyến xe';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        CarTrip::updateStatuses();
        $this->info('Chuyến đổi trạng thái chuyến xe thành công!');
    }
}
