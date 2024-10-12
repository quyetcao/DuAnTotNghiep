import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({ labels, dataSet1, dataSet2 }) {
    const data = {
        labels,
        datasets: [
            {
                label: 'Doanh thu (VND)',
                data: dataSet1,
                backgroundColor: '#36A2EB',
            },
            {
                label: 'Số lượng vé',
                data: dataSet2,
                backgroundColor: '#FF6384',
            },
        ],
    };

    const options = {
        responsive: true,
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={data} options={options} />;
};
// BỎ chart này nha
