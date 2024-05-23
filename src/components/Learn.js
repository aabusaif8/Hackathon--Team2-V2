import React from "react";
import { Link } from "react-router-dom";
import learn from "../assets/learn.png";

const Learn = () => {
  return (
    <div className="bg-gray-100 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Always looking to learn?
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">
            Take advantage of our library of articles, curated especially for
            you by our financial experts.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={learn}
              alt="Learn"
              className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:pmd:w-1/2 md:pl-8 flex flex-col items-center md:items-start">
            <Link to="/newsign">
              <button className=" bg-dark-green justify-between text-white py-3 px-8 md:px-12 lg:px-16 rounded-full font-semibold transition-colors duration-300 hover:bg-green-700 mt-8 md:mt-0 ">
                Open an Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
