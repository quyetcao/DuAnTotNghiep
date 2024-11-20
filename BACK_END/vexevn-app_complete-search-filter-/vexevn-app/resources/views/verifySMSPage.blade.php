<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="/verify-otp" method="POST">
        @csrf
        <label for="otp">Mã OTP:</label>
        <input type="text" id="otp" name="otp" required>
        <button type="submit">Xác nhận OTP</button>
    </form>
</body>
</html>