import React from 'react';
import piggybank from "../assets/piggybank.png"
import coin from "../assets/coin.png"

const DigitalAssistant = () => {
    return (
        <div className="digitalAssistant">
          <div className="digitalAssistant-content">
            <h1 className=" flex justify-center text-semibold text-xl px-5 py-10">New to investing? Let our Digital Investment Assistant help!</h1>
            
            <div className="flex justify-center px-5 py-5 w-full">
            <img src={piggybank} alt="digitalAssistant" />
            </div>
            <p className="text-semibold text-xl flex justify-center">
              Let us know the amount you want to invest, how often, and the kind of growth you're looking for.
            </p>
          


            <div className="flex justify-center">
            <img src={coin} alt="digitalAssistant2" />
            </div>
            <p className="text-semibold text-xl flex justify-center">
              Our digital assistant will generate portfolios based on your answers, and you pick the one thats right for you.
            </p>
          
    
          <div className="flex justify-center px-5 py-5">
          <button className=' bg-dark-green text-white py-3 px-12 rounded-full mt-8 font-normal'>Open an Account</button>
          </div>
          </div>
        </div>
      );
    };

export default DigitalAssistant;