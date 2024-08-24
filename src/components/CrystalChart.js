import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CrystalChart = () => {
  const crystalNames = [
    'Amethyst', 'Aquamarine', 'Black Tourmaline', 'Citrine', 'Dalmatian',
    'Fire Opal', 'Garnet', 'Hematite', 'Jade', 'Labradorite',
    'Lapis Lazuli', 'Malachite', 'Moldavite', 'Quartz', 'Selenite',
    'Tiger\'s Eye', 'Turquoise'
  ];

  // Load popularity data from localStorage or generate it once
  const loadOrGenerateData = () => {
    const savedData = localStorage.getItem('crystalPopularityData');
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      const initialData = crystalNames.map(() => Math.floor(Math.random() * 10) + 1);
      localStorage.setItem('crystalPopularityData', JSON.stringify(initialData));
      return initialData;
    }
  };

  const [popularityData, setPopularityData] = useState(loadOrGenerateData);

  const handleCrystalClick = (index) => {
    const newPopularityData = [...popularityData];
    newPopularityData[index] += 1;
    setPopularityData(newPopularityData);
    localStorage.setItem('crystalPopularityData', JSON.stringify(newPopularityData));
  };

  const data = {
    labels: crystalNames,
    datasets: [
      {
        label: 'Crystal Popularity',
        data: popularityData,
        backgroundColor: [
          '#f8f9fa', '#fd7e14', '#ffc107', '#20c997', '#007bff',
          '#6610f2', '#e83e8c', '#17a2b8', '#6c757d', '#343a40',
          '#28a745', '#ff6f61', '#ffbe76', '#95a5a6', '#9b59b6',
          '#2ecc71', '#1abc9c'
        ],
        borderColor: [
          '#f8f9fa', '#fd7e14', '#ffc107', '#20c997', '#007bff',
          '#6610f2', '#e83e8c', '#17a2b8', '#6c757d', '#343a40',
          '#28a745', '#ff6f61', '#ffbe76', '#95a5a6', '#9b59b6',
          '#2ecc71', '#1abc9c'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    onClick: (e, element) => {
      if (element.length > 0) {
        const index = element[0].index;
        handleCrystalClick(index);
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Crystal Popularity Chart' },
    },
  };

  return (
    <div style={{ width: '300px', height: '200px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CrystalChart;
