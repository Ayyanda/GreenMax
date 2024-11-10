import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function EnergyGraph() {
  const data = {
    labels: generateTimeLabels(),
    datasets: [
      {
        label: 'Energy Consumption (kWh)',
        data: generateMockData(),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Daily Energy Consumption',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'kWh',
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <Line data={data} options={options} />
    </div>
  );
}

function generateTimeLabels() {
  const now = new Date();
  return Array.from({ length: 24 }, (_, i) => {
    const d = new Date(now);
    d.setHours(i);
    return format(d, 'ha');
  });
}

function generateMockData() {
  return Array.from({ length: 24 }, () => Math.random() * 5 + 1);
}