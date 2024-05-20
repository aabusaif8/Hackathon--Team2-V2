import React from 'react';

import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import DigitalAssistant from '../components/DigitalAssistant';
import AccountFeatures from '../components/AccountFeatures';
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

        <AccountFeatures />

        <Learn />

      <Footer />


    </div>
  );
};

export default LandingPage;