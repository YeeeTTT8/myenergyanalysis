// src/components/CalculatorPage.js
import React, { useState } from 'react';
import './CalculatorPage.css';
import MLResultSection from './MLResultSection';
import Banner from './banner'

const CalculatorPage = () => {
  const [inputs, setInputs] = useState({
    globalReactivePower: 0,
    voltage: 0,
    globalIntensity: 0,
    kitchenEnergy: 0,
    laundryEnergy: 0,
    heatingCoolingEnergy: 0,
    timeOfDay: 0,
    weekdayOrWeekend: 0,
  });
  const [mlResult, setMLResult] = useState({
    globalActivePower: 0,
    powerStatus: '',
    energyDistribution: [/* initialize with default values */],
  });
  const handleCalculate = async () => {
    // Replace this with your actual calculations or data fetching logic
    // For demonstration, setting some random values
    const mockData = {
      globalActivePower: Math.random() * 100,
      powerStatus: Math.random() > 0.5 ? 'High' : 'Normal',
      energyDistribution: Array.from({ length: 8 }, () => Math.random() * 100),
    };

    // Update the mlResult state with the calculated values
    setMLResult(mockData);
  };
  return (
    <div>
      <Banner /> {/* Include the Banner component */}
    <div className="CalculatorPage">
      <div className="InputRow">
        <label>1. Global Reactive Power (kW):</label>
        <input type="number" className="InputBox" name="globalReactivePower" />
      </div>

      <div className="InputRow">
        <label>2. Voltage (V):</label>
        <input type="number" className="InputBox" name="voltage" />
      </div>

      <div className="InputRow">
        <label>3. Global Intensity (A):</label>
        <input type="number" className="InputBox" name="globalIntensity" />
      </div>

      <div className="InputRow">
        <label>4. Kitchen Appliances Energy Sub-metering (W-hr):</label>
        <input type="number" className="InputBox" name="kitchenEnergy" />
      </div>

      <div className="InputRow">
        <label>5. Laundry Room Appliances Energy Sub-metering (W-hr):</label>
        <input type="number" className="InputBox" name="laundryEnergy" />
      </div>

      <div className="InputRow">
        <label>6. Heating & Cooling Appliances Energy Sub-metering (W-hr):</label>
        <input type="number" className="InputBox" name="heatingCoolingEnergy" />
      </div>

      {/* Scroll-down input */}
      <div className="InputRow">
        <label>7. What time of day is it:</label>
        <select className="SelectBox" name="timeOfDay">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div className="InputRow">
        <label>8. Weekday (0) or Weekend (1):</label>
        <input type="number" className="InputBox" name="weekdayOrWeekend" />
      </div>

      <button onClick={handleCalculate}>Calculate</button>
      
    </div>
    </div>
  );
}

export default CalculatorPage;
