import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EditPersonalInfo from "../../reuseComponents/EditPersonalInfo";
import EditFinancialInfo from "../../reuseComponents/EditFinancialInfo";
import { useAuth } from "../../context/AuthContext"; // Import the useAuth hook

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

function PersonalInformation() {
  const { isLoggedIn, userId } = useAuth(); // Get the authentication state and user ID
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { userId: userIdCheck } = useParams();

  useEffect(() => {
    if (userId && (userId != userIdCheck) ) {
      navigate("/badroute");
    }
  }, [userId, userIdCheck, navigate]);


  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/users/${userId}/dashboard`
        );
        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        } else {
          throw new Error("Failed to fetch user information");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    if (isLoggedIn && userId) {
      fetchUserData();
    }
  }, [isLoggedIn, userId]);

  if (!isLoggedIn) {
    return <p>Please log in to view your personal information.</p>;
  }

  const username = userInfo?.data?.user?.Username;
  const email = userInfo?.data?.user?.Email;

  return (
    <div>
      <Navbar />

      <div>
        <Link onClick={handleGoBack}>
          <button className="text-dark-green text-2xl font-semibold mt-5 ml-10 underline">
            Back
          </button>
        </Link>
      </div>

      <div className="flex justify-center text-semibold text-4xl py-5">
        <h1>Personal Information</h1>
      </div>
      <div className="mt-6">
        <EditPersonalInfo username={username} email={email} />
        <EditFinancialInfo />
      </div>
      <div className="space-x-12 drop-shadow-xl text-center pb-12">
        <Link onClick={handleGoBack}>
          <button className="bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-12 font-normal mx-auto">
            Return to Account Settings
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default PersonalInformation;
