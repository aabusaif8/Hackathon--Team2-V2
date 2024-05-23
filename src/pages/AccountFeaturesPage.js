import React from 'react'
import AccountFeatures from '../components/AccountFeatures'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useNavigate } from "react-router-dom";

function AccountFeaturesPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <div>
      <Navbar />
      <Link onClick={handleGoBack}>
        <button className="text-dark-green text-2xl font-semibold mt-5 ml-10 underline">
          Back
        </button>
      </Link>
      <AccountFeatures />

      <Footer />

     </div>
  )
}

export default AccountFeaturesPage;