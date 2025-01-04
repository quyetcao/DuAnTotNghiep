<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderSuccessMail extends Mailable
{
    use Queueable, SerializesModels;

    public $order;
    public $payment;

    public function __construct($order, $payment)
    {
        $this->order = $order;
        $this->payment = $payment;
    }

    public function build()
    {
        return $this->subject('Order Confirmation')
                    ->view('emails.order_success')
                    ->with([
                        'order' => $this->order,
                        'payment' => $this->payment,
                    ]);
    }
}
