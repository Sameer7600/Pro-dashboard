'use client';

import React from 'react';
import {
  Doughnut,
  Radar
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const SessionsCharts = () => {
  // Chart 1: By Device
  const deviceData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [{
      data: [40, 50, 10],
      backgroundColor: ['#A78BFA', '#7DD3FC', '#6366F1'], // purple, blue, indigo
      borderWidth: 0,
    }],
  };

  // Chart 2: By Age
  const ageData = {
    labels: ['<18', '18-24', '24-36', '>35'],
    datasets: [{
      data: [20, 50, 10, 20],
      backgroundColor: ['#C4B5FD', '#7DD3FC', '#F87171', '#34D399'],
      borderWidth: 0,
    }],
  };

  // Chart 3: By Gender
  const genderData = {
    labels: ['Males', 'Females', 'Unknown'],
    datasets: [{
      data: [500, 300, 200],
      backgroundColor: ['#8B5CF6', '#60A5FA', '#34D399'],
      borderWidth: 1,
    }],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Device Chart */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-md font-semibold mb-4">Sessions By Device</h3>
        <Doughnut data={deviceData} options={{ cutout: '70%' }} />
        <div className="flex justify-center mt-4 flex-wrap gap-4 text-sm">
          <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#A78BFA] rounded-full"></span> Desktop</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#7DD3FC] rounded-full"></span> Mobile</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#6366F1] rounded-full"></span> Tablet</span>
        </div>
      </div>

      {/* Age Chart */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-md font-semibold mb-4">Sessions By Age</h3>
        <Doughnut data={ageData} options={{ cutout: '70%' }} />
        <div className="flex justify-center mt-4 flex-wrap gap-4 text-sm">
          <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#C4B5FD] rounded-full"></span> &lt;18</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#7DD3FC] rounded-full"></span> 18-24</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#F87171] rounded-full"></span> 24-36</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#34D399] rounded-full"></span> &gt;35</span>
        </div>
      </div>

      {/* Gender Chart */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-md font-semibold mb-4">Sessions By Gender</h3>
        <Radar
          data={{
            labels: genderData.labels,
            datasets: [{
              label: 'Sessions',
              data: genderData.datasets[0].data,
              backgroundColor: 'rgba(139, 92, 246, 0.3)', // translucent purple
              borderColor: '#8B5CF6',
              borderWidth: 2,
              pointBackgroundColor: ['#8B5CF6', '#60A5FA', '#34D399'],
            }]
          }}
          options={{
            scales: {
              r: {
                angleLines: { display: false },
                suggestedMin: 0,
                suggestedMax: 600,
                ticks: { display: false },
              }
            },
            plugins: { legend: { display: false } }
          }}
        />
        <div className="flex justify-center mt-4 flex-wrap gap-4 text-sm">
          <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#8B5CF6] rounded-full"></span> Males</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#60A5FA] rounded-full"></span> Females</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#34D399] rounded-full"></span> Unknown</span>
        </div>
      </div>
    </div>
  );
};

export default SessionsCharts;
