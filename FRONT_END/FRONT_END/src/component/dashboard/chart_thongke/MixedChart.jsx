// import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function MixedChart() {
    const data = {
        labels: ['Hà Nội - Sapa', 'Sapa - Hà Nội', 'Sài Gòn - Đà Lạt', 'Đà Lạt - Sài Gòn', 'Đà Nẵng - Nha Trang'], // Tên tuyến đường
        datasets: [
            {
                type: 'bar', // Biểu đồ cột cho doanh thu
                label: 'Doanh thu (VND)',
                data: [987654321, 876543210, 765432100, 654321000, 543210000], // Doanh thu từng tuyến đường
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                type: 'bar', // Biểu đồ cột cho số lượng vé
                label: 'Số lượng vé',
                data: [654321, 543210, 432100, 321000, 210000], // Số lượng vé từng tuyến đường
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', // Vị trí của chú thích
            },
            title: {
                display: true,
                text: 'Doanh thu & số lượng vé theo tuyến đường',
                font: {
                    size: 16,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString(); // Format lại số với dấu phẩy
                    },
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

;
