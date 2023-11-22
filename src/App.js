// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/banner';
import Header from './components/header';
import Description from './components/Description';
import TeamMembers from './components/TeamMembers';
import CalculatorButton from './components/CalculatorButton';
import CalculatorPage from './components/CalculatorPage'; // Import the new component

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<>
            <Banner />
            <header className="Header">
              <Header />
            </header>
            <Description />
            <TeamMembers />
            <CalculatorButton />
          </>} />

          {/* Add a new route for the calculator page */}
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
