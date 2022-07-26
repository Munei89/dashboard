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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Training sessions',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgba(255, 201, 97, 1)',
      backgroundColor: 'rgba(255, 201, 97, 0.5)',
    },
    {
      label: 'Team meetings',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgba(240, 60, 128, 1)',
      backgroundColor: 'rgba(240, 60, 128, 0.5)',
    },
    {
      label: 'Medical checks',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgba(80, 93, 214, 1)',
      backgroundColor: 'rgba(80, 93, 214, 0.5)',
    },
  ],
};

export const Chart = () => {
  return <Line options={options} data={data} />;
};
