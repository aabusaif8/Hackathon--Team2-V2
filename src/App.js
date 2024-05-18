import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import InvestmentAssistant from './pages/InvestmentAssistant';
import ManualInvestment from './pages/ManualInvestment';
import LearningResources from './pages/LearningResources';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/investment-assistant" element={<InvestmentAssistant />}/>
          <Route path="/manual-investment" element={<ManualInvestment />}/>
          <Route path="/learning-resources" element={<LearningResources />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
