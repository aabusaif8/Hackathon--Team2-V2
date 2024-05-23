import React from "react";
import { Link } from "react-router-dom";
import piggybank from "../assets/piggybank.png";
import coin from "../assets/coin.png";

const DigitalAssistant = () => {
  return (
    <div className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            New to investing? Let our Digital Investment Assistant help!
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-center">
            <img
              src={piggybank}
              alt="Digital Assistant"
              className="mx-auto max-w-full h-64"
            />
            <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-4 text-center">
              Let us know the amount you want to invest, how often, and the kind
              of growth you're looking for.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col items-center">
            <img
              src={coin}
              alt="Digital Assistant"
              className="mx-auto max-w-full h-64"
            />
            <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-4 mb-8 text-center">
              Our digital assistant will generate portfolios based on your
              answers, and you pick the one that's right for you.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Link to="/signpage">
            <button className="bg-dark-green text-white py-3 px-8 md:px-12 lg:px-16 rounded-full font-semibold transition-colors duration-300 hover:bg-green-700">
              Open an Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalAssistant;
