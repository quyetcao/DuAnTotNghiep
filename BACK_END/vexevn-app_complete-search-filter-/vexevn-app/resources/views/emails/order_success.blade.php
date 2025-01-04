<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation</title>
</head>
<body>
    <h1>Thank You for Your Payment!</h1>
    <p>Dear {{ $order->user->name }},</p>
    <p>Your payment of {{ number_format($payment->amount, 2) }} has been successfully processed.</p>
    <p>Order ID: {{ $order->id }}</p>
    <p>Transaction ID: {{ $payment->transaction_id }}</p>
    <p>Thank you for shopping with us!</p>
</body>
</html>
