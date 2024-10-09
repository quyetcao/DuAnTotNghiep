import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function LineChart() {
    const data = {
        labels: ['Văn phòng Hà Nội', 'Văn phòng Sapa', 'VexRe', 'Đại lý A', 'Đại lý B'], // Tên các văn phòng
        datasets: [
            {
                label: 'Doanh thu (VND)',
                data: [987654321, 876543210, 765432100, 654321000, 543210000], // Doanh thu từng văn phòng
                fill: false,
                borderColor: 'rgb(75, 192, 192)', // Màu của đường line
                tension: 0.1, // Độ cong của đường line (0 là thẳng, giá trị lớn hơn làm mềm đường line)
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Ẩn legend
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
                    },
                },
            },
        },
    };

    return <Line data={data} options={options} />;
};
