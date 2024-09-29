// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const PieChart = ({ labels, dataSet }) => {
//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: 'Doanh thu (VND)',
//                 data: dataSet,
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//                 hoverOffset: 4,
//             },
//         ],
//     };

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'right',
//             },
//         },
//     };

//     return <Pie data={data} options={options} />;
// };

// export default PieChart;
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['Limousine 9 chỗ', 'Limousine 22 giường VIP', 'Giường nằm 44 giường', 'Limousine 34 giường VIP'],
        datasets: [
            {
                label: 'Doanh thu (VND)',
                data: [123456789, 987654321, 654321000, 543210000],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Để biểu đồ tự động chiếm chiều cao khung
        aspectRatio: 1.5, // Điều chỉnh tỷ lệ giữa chiều rộng và chiều cao, ví dụ: 1.5 (giảm chiều cao)
        plugins: {
            legend: {
                position: 'right', // Hiển thị legend bên phải
            },
        },
        layout: {
            padding: {
                top: 10, // Giảm padding trên
                bottom: 10, // Giảm padding dưới
            },
        },
    };

    return (
        <div style={{ height: '300px' }}> {/* Điều chỉnh chiều cao của khung chứa */}
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
