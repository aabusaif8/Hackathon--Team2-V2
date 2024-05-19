import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import InvestmentAssistant from './pages/InvestmentAssistant';
import ManualInvestment from './pages/ManualInvestment';
import LearningResources from './pages/LearningResources';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';


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
          <Route path="/learning-resources-article1" element={<Article1 />} />
          <Route path="/learning-resources-article2" element={<Article2 />} />
          <Route path="/learning-resources-article3" element={<Article3 />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
