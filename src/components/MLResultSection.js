// src/components/MLResultSection.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './result.css'

const MLResultSection = ({ result }) => {
  const data = {
    labels: [
      'Global Reactive Power',
      'Voltage',
      'Global Intensity',
      'Kitchen Appliances Energy',
      'Laundry Room Appliances Energy',
      'Heating & Cooling Appliances Energy',
      'Time of Day',
      'Weekday/Weekend',
    ],
    datasets: [
      {
        label: 'Energy Usage Distribution',
        data: result.energyDistribution,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="MLResultSection">
      <h2>ML Model Result</h2>
      <p>Global Active Power: {result.globalActivePower} kW</p>
      <p>{result.powerStatus}</p>
      <Bar data={data} />
    </div>
  );
};

export default MLResultSection;
