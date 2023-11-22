// src/components/CalculatorButton.js
import React from 'react';
import { Link } from 'react-router-dom';
const CalculatorButton = () => {
  return (
    
      
      <Link to="/calculator" className="CalculatorButton">
        Go to Calculator
      </Link>
   
  );
}

export default CalculatorButton;
