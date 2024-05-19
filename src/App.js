import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import MyAccount from './pages/MyAccount';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/myAccount" element={<MyAccount />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
