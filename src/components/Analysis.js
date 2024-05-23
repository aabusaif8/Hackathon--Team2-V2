import React from "react";
import { Link } from "react-router-dom";
import analysis from "../assets/analysis.png";

const Analysis = () => {
  return (
    <div className="bg-red-orange py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Already an investment pro? Take control of your portfolio with stock
            analysis and projections!
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <img
              src={analysis}
              alt="Analysis"
              className="mx-auto max-w-full h-64"
            />
          </div>
          <div className="mb-8">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center">
              Explore a stock's historical performance and view our projections
              to make informed investment decisions in real-time.
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/newsign">
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

export default Analysis;
