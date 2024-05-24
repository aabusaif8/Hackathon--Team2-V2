import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BadRoute = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
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
      <div className="flex justify-center mt-10 mb-16">
        <div className="flex justify-center items-center rounded-lg w-1/2 bg-[#FDDBC2] h-[500px] w-[500px] text-4xl font-bold">
          Did you mean to be here?
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BadRoute;
