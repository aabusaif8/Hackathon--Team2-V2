import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="bg-red-orange px-4 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to take your first step into the world of investments?
          </h1>
          <div className="flex justify-center mb-8">
            <img src={hero} alt="Hero" className="max-w-full h-auto" />
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-10">
            Start Investing Today with our digital Investment Assistant.
          </p>
          <div className="flex justify-center">
            <Link to="/signpage">
              <button className="bg-dark-green text-white py-3 px-8 md:px-12 lg:px-16 rounded-full font-semibold transition-colors duration-300 hover:bg-green-700">
                Open an Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
