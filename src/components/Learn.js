import React from "react";
import learn from "../assets/learn.png"

const Learn = () => {
    return (
      <div className="learn">
        <div className="learn-content">
          <h1 className="flex justify-center px-5 py-10 text-semibold text-2xl">Always looking to learn? Take aadvantage of our library of articles, curated especially for you by our financial experts.</h1>
          
          <div className="learn-image flex justify-center">
          <img src={learn} alt="Learn" />
        </div>

        <div className="flex justify-center px-5 py-5">
          <button className=' bg-dark-green text-white py-3 px-12 rounded-full mt-8 font-normal'>Open an Account</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Learn;