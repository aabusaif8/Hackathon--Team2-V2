import React from 'react';

import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import DigitalAssistant from '../components/DigitalAssistant';
import DashboardPreview from '../components/DashboardPreview';
import Analysis from '../components/Analysis';
import Learn from '../components/Learn';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>

      <NavBar />
     
        <Hero />
        
        <DigitalAssistant />

        <Analysis />

        <DashboardPreview />

        <Learn />
      

      <Footer />
    </div>
  );
};

export default LandingPage;