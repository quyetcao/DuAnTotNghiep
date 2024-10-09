import React from 'react';
import './css-chart/doanhthuvaluotchay.css';

export default function DoanhThuVaLuotChay() {
    const data = [
        { doanhThu: 123456789, xe: '29B1-234.56', luotChay: 123456 },
        { doanhThu: 87654321, xe: '29B2-345.67', luotChay: 98765 },
        { doanhThu: 65432100, xe: '29B3-456.78', luotChay: 76543 },
        { doanhThu: 54321000, xe: '29B4-567.89', luotChay: 65432 },
        { doanhThu: 32100000, xe: '29B5-678.90', luotChay: 43210 },
    ];

    // Sắp xếp dữ liệu từ lớn đến bé dựa trên doanh thu
    const sortedData = data.sort((a, b) => b.doanhThu - a.doanhThu);

    // Tìm giá trị lớn nhất để chuẩn hóa độ dài của các thanh
    const maxDoanhThu = Math.max(...data.map(item => item.doanhThu));
    const maxLuotChay = Math.max(...data.map(item => item.luotChay));

    return (
        <div className="doanh-thu-luot-chay-container">
            {sortedData.map((item, index) => (
                <div className="row" key={index}>
                    <div className="bar-container left">
                        <div
                            className="bar doanh-thu"
                            style={{
                                width: `${(item.doanhThu / maxDoanhThu) * 100}%`
                            }}
                        >
                            {item.doanhThu.toLocaleString()} đ
                        </div>
                    </div>
                    <div className="xe">{item.xe}</div>
                    <div className="bar-container right">
                        <div
                            className="bar luot-chay"
                            style={{
                                width: `${(item.luotChay / maxLuotChay) * 100}%`
                            }}
                        >
                            {item.luotChay.toLocaleString()} lượt
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


