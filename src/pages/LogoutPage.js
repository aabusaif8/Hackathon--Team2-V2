import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const LogoutPage = () => {
  const { logout, userId } = useAuth();
  const { userId: userIdCheck } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId && (userId != userIdCheck) ) {
      navigate("/badroute");
    }
  }, [userId, userIdCheck, navigate]);


  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="bg-red-orange flex flex-col justify-center items-center rounded-lg mx-auto my-10 p-5 w-[400px] h-[400px]">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold">Log Out?</h1>
        </div>

        <div className="flex justify-center space-x-4 sm:space-x-8">
          <Link to={`/confirmlogout`}>
            <button onClick={logout} className="bg-[#F88530] text-black py-2 sm:py-3 px-6 sm:px-12 rounded-full font-semibold">
              Yes
            </button>
          </Link>
          <Link onClick={handleGoBack}>
            <button className="bg-[#F88530] text-black py-2 sm:py-3 px-6 sm:px-12 rounded-full font-semibold">
              No
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogoutPage;