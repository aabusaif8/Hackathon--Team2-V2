import React from "react";
import analysis from "../assets/analysis.png"

const Analysis = () => {
    return (
      <div className="bg-red-orange">
        <div className="analysis-content py-10 px-10">
          <h1 className="text-semibold text-xl flex justify-center">Already an investment pro? Take control of you portfolio with stock analysis and projections!</h1>
          
          <div className="flex justify-center px-5 py-10 w-full">
          <img src={analysis} alt="Analysis" />
        </div>

        <div className="flex justify-center text-semibold text-xl">
          <p className="analysis-description">
            Explore a stock's historical performance and view our projections to make informaed investment decisions in real time.
          </p>
          </div>

          <div className="flex justify-center px-5 py-5">
          <button className=' bg-dark-green text-white py-3 px-12 rounded-full mt-8 font-normal'>Open an Account</button>
          
        </div>
        </div>
      </div>
    );
  };
  
  export default Analysis;
