<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\CarTrip;

class ResetCompletedTrips extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:reset-completed-trips';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset trạng thái các chuyến xe đã completed về not_started và cập nhật ngày khởi hành';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        CarTrip::resetCompletedTrips();
        $this->info('Reset completed trips thành công!');
    }
}
