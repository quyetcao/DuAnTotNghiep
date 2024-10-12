// import React from 'react';
import './css-chart/tablecomponent.css';

export default function TableComponent() {
    const data = [
        { route: 'Hà Nội - Sapa', trips: 987, fillRate: '98%', avgRevenue: '987,654 đ' },
        { route: 'Sapa - Hà Nội', trips: 876, fillRate: '87%', avgRevenue: '876,543 đ' },
        { route: 'Sài Gòn - Đà Lạt', trips: 654, fillRate: '76%', avgRevenue: '765,432 đ' },
        { route: 'Đà Lạt - Sài Gòn', trips: 543, fillRate: '65%', avgRevenue: '654,321 đ' },
        { route: 'Đà Nẵng - Nha Trang', trips: 321, fillRate: '54%', avgRevenue: '543,210 đ' },
    ];

    return (
        <div className="table-container">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Tuyến đường</th>
                        <th>Số lượng chuyến</th>
                        <th>Tỷ lệ lấp đầy</th>
                        <th>Doanh thu trung bình</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.route}</td>
                            <td>{item.trips}</td>
                            <td>{item.fillRate}</td>
                            <td>{item.avgRevenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

