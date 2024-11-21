<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <a href="{{route('auth.google')}}">Google</a>
    <form action="/login-register" method="POST">
        @csrf
        <label for="phone">Số điện thoại:</label>
        <input type="text" id="phone" name="phone" required>
        <button type="submit">Đăng nhập/Đăng ký</button>
    </form>
</body>
</html>