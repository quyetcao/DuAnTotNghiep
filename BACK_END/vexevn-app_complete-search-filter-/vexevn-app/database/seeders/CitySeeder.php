<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\City;

class CitySeeder extends Seeder
{
   
    public function run()
    {
        $provinces = [
            ['name' => 'Thành Phố Hà Nội', 'province' => 'Hà Nội'],
            ['name' => 'Thành Phố Hồ Chí Minh', 'province' => 'Hồ Chí Minh'],
            ['name' => 'Thành Phố Đà Nẵng', 'province' => 'Đà Nẵng'],
            ['name' => 'Thành Phố Hải Phòng', 'province' => 'Hải Phòng'],
            ['name' => 'Thành Phố Cần Thơ', 'province' => 'Cần Thơ'],
            ['name' => 'Thành Phố Nha Trang', 'province' => 'Khánh Hòa'],
            ['name' => 'Thành Phố Vũng Tàu', 'province' => 'Bà Rịa - Vũng Tàu'],
            ['name' => 'Thành Phố Huế', 'province' => 'Thừa Thiên - Huế'],
            ['name' => 'Thành Phố Biên Hòa', 'province' => 'Đồng Nai'],
            ['name' => 'Thành Phố Buôn Ma Thuột', 'province' => 'Đắk Lắk'],
            ['name' => 'Thành Phố Đà Lạt', 'province' => 'Lâm Đồng'],
            ['name' => 'Thành Phố Pleiku', 'province' => 'Gia Lai'],
            ['name' => 'Thành Phố Phan Thiết', 'province' => 'Bình Thuận'],
            ['name' => 'Thành Phố Long Xuyên', 'province' => 'An Giang'],
            ['name' => 'Thành Phố Rạch Giá', 'province' => 'Kiên Giang'],
            ['name' => 'Thành Phố Cà Mau', 'province' => 'Cà Mau'],
            ['name' => 'Thành Phố Bạc Liêu', 'province' => 'Bạc Liêu'],
            ['name' => 'Thành Phố Tuy Hòa', 'province' => 'Phú Yên'],
            ['name' => 'Thành Phố Thanh Hóa', 'province' => 'Thanh Hóa'],
            ['name' => 'Thành Phố Vinh', 'province' => 'Nghệ An'],
            ['name' => 'Thành Phố Hà Tĩnh', 'province' => 'Hà Tĩnh'],
            ['name' => 'Thành Phố Ninh Bình', 'province' => 'Ninh Bình'],
            ['name' => 'Thành Phố Hạ Long', 'province' => 'Quảng Ninh'],
            ['name' => 'Thành Phố Thái Bình', 'province' => 'Thái Bình'],
            ['name' => 'Thành Phố Nam Định', 'province' => 'Nam Định'],
            ['name' => 'Thành Phố Bắc Ninh', 'province' => 'Bắc Ninh'],
            ['name' => 'Thành Phố Bắc Giang', 'province' => 'Bắc Giang'],
            ['name' => 'Thành Phố Thái Nguyên', 'province' => 'Thái Nguyên'],
            ['name' => 'Thành Phố Lạng Sơn', 'province' => 'Lạng Sơn'],
            ['name' => 'Thành Phố Cao Bằng', 'province' => 'Cao Bằng'],
            ['name' => 'Thành Phố Tuyên Quang', 'province' => 'Tuyên Quang'],
            ['name' => 'Thành Phố Yên Bái', 'province' => 'Yên Bái'],
            ['name' => 'Thành Phố Lào Cai', 'province' => 'Lào Cai'],
            ['name' => 'Thành Phố Điện Biên Phủ', 'province' => 'Điện Biên'],
            ['name' => 'Thành Phố Sơn La', 'province' => 'Sơn La'],
            ['name' => 'Thành Phố Hòa Bình', 'province' => 'Hòa Bình'],
            ['name' => 'Thành Phố Vĩnh Yên', 'province' => 'Vĩnh Phúc'],
            ['name' => 'Thành Phố Phủ Lý', 'province' => 'Hà Nam'],
            ['name' => 'Thành Phố Hưng Yên', 'province' => 'Hưng Yên'],
            ['name' => 'Hải Dương', 'province' => 'Hải Dương'],
            ['name' => 'Thành Phố Quảng Ngãi', 'province' => 'Quảng Ngãi'],
            ['name' => 'Thành Phố Quảng Nam', 'province' => 'Quảng Nam'],
            ['name' => 'Thành Phố Kon Tum', 'province' => 'Kon Tum'],
            ['name' => 'Thành Phố Đồng Hới', 'province' => 'Quảng Bình'],
            ['name' => 'Thành Phố Đông Hà', 'province' => 'Quảng Trị'],
            ['name' => 'Thành Phố Tam Kỳ', 'province' => 'Quảng Nam'],
            ['name' => 'Thành Phố Quy Nhơn', 'province' => 'Bình Định'],
            ['name' => 'Thành Phố Phan Rang - Tháp Chàm', 'province' => 'Ninh Thuận'],
            ['name' => 'Thành Phố Bảo Lộc', 'province' => 'Lâm Đồng'],
            ['name' => 'Thành Phố Tây Ninh', 'province' => 'Tây Ninh'],
            ['name' => 'Thành Phố Thủ Dầu Một', 'province' => 'Bình Dương'],
            ['name' => 'Thành Phố Tân An', 'province' => 'Long An'],
            ['name' => 'Thành Phố Mỹ Tho', 'province' => 'Tiền Giang'],
            ['name' => 'Thành Phố Bến Tre', 'province' => 'Bến Tre'],
            ['name' => 'Thành Phố Trà Vinh', 'province' => 'Trà Vinh'],
            ['name' => 'Thành Phố Vĩnh Long', 'province' => 'Vĩnh Long'],
            ['name' => 'Thành Phố Sóc Trăng', 'province' => 'Sóc Trăng'],
            ['name' => 'Thành Phố Châu Đốc', 'province' => 'An Giang'],
            ['name' => 'Thành Phố Sa Đéc', 'province' => 'Đồng Tháp'],
            ['name' => 'Thành Phố Hồng Ngự', 'province' => 'Đồng Tháp'],
            ['name' => 'Thành Phố Bắc Kạn', 'province' => 'Bắc Kạn'],
            ['name' => 'Thành Phố Móng Cái', 'province' => 'Quảng Ninh'],
            ['name' => 'Thành Phố Sầm Sơn', 'province' => 'Thanh Hóa'],
            ['name' => 'Thành Phố Cẩm Phả', 'province' => 'Quảng Ninh'],
            ['name' => 'Thành Phố Đồng Xoài', 'province' => 'Bình Phước'],
            ['name' => 'Thành Phố Chí Linh', 'province' => 'Hải Dương'],
            ['name' => 'Thành Phố Hòa Bình', 'province' => 'Hòa Bình'],
            ['name' => 'Thành Phố Lai Châu', 'province' => 'Lai Châu'],
            ['name' => 'Thành Phố Sơn Tây', 'province' => 'Hà Nội'],
        ];
        //lưu vào db 
        foreach ($provinces as $province) {
            City::create($province);
        }
    }

}
