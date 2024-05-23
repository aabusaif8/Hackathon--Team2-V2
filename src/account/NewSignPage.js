import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/monarchlogo.png";

const WelcomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <Link to="/">
          <button className="text-dark-green text-2xl font-semibold mt-5 ml-10 underline absolute top-0 left-0">
            Back
          </button>
        </Link>
        <div className="w-full max-w-md p-8 bg-white">
          <h1 className="text-center font-semibold text-4xl md:text-3xl sm:text-1xl mb-8">
            Welcome to your financial future.
          </h1>
          <h1 className="text-center font-semibold text-4xl md:text-3xl sm:text-2xl mb-8">
            We're glad you're here.
          </h1>
          <div className="relative top-0 flex justify-center w-full mt-5">
            <img src={logo} alt="logo" className="sm:max-w-lg" />
          </div>
          <div className="flex flex-col items-center mt-8">
            <Link to="/signup">
              <button className="py-3 bg-[#97db51] text-black rounded-full font-semibold text-lg md:text-base sm:text-sm mb-4 w-[250px]">
                Sign Up
              </button>
            </Link>
            <Link to="/signin">
              <button className="py-3 bg-[#97db51] text-black rounded-full font-semibold text-lg md:text-base sm:text-sm mb-4 w-[250px]">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WelcomePage;
