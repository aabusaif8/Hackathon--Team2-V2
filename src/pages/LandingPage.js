import {React, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import DigitalAssistant from '../components/DigitalAssistant';
import AccountFeatures from '../components/AccountFeatures';
import Analysis from '../components/Analysis';
import Learn from '../components/Learn';
import Footer from '../components/Footer';
import { useAuth } from "../context/AuthContext";

const LandingPage = () => {
  const { isLoggedIn } = useAuth();
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(`/${userId}/dashboard`, { replace: true });
    }
  }, [isLoggedIn, navigate, userId]);
  
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
