import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EditPersonalInfo from '../../reuseComponents/EditPersonalInfo';
import EditFinancialInfo from '../../reuseComponents/EditFinancialInfo';

function PersonalInformation() {
  const { userId } = useParams(); // Extract user ID from URL
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${userId}/dashboard`);
        if (response.ok) {
          const data = await response.json();          setUserInfo(data);
        } else {
          throw new Error('Failed to fetch user information');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      <Navbar />

      <div>
        <Link to="/myaccount">
          <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
        </Link>
      </div>

      <div className='flex justify-center text-semibold text-4xl py-5'>
        <h1>Personal Information</h1>
      </div>
      
      <div className='px-12 py-10 flex justify-center'>
        {error && <p className="text-red-500">{error}</p>}
        {userInfo ? (
          <div>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Phone: {userInfo.phone}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <EditPersonalInfo />
      <EditFinancialInfo />

      <div className='space-x-12 drop-shadow-xl text-center pb-12'>
        <Link to="/myaccount">
          <button className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-12 font-normal mx-auto'>
            Return to Account Settings
          </button>
        </Link>
      </div> 

      <Footer />
    </div>
  );
}

export default PersonalInformation;
