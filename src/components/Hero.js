import React from "react";
import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <div className= "bg-red-orange px-10 py-10">
      <div className="hero-content bg-red-orange">
        <h1 className="text-semibold text-xl flex justify-center">Ready to take your first step into the world of investments?</h1>
        
        <div className="flex justify-center px-10 py-10">
        <img src={hero} alt="Hero" />
      </div>

        <p className="flex justify-center text-semibold text-xl">
          Start Investing Today with our digital Investment Assistant.
        </p>
        
        <div className="flex justify-center px-5 py-5">
          <button className=' bg-dark-green text-white py-3 px-12 rounded-full mt-8 font-normal'>Open an Account</button>
          </div>
      </div>
    </div>
  );
};

export default Hero;