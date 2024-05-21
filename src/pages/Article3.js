import React from 'react';
import { Link } from 'react-router-dom';
import Pic from "../images/money-pile.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Article3() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center bg-light-green rounded-xl pt-5 shadow-xl mx-4 sm:mx-20 mt-5">
        <img src={Pic} className="w-full max-w-md" alt="Article Illustration" />
      </div>

      <div className="pt-5 px-5 sm:px-20">
        <h1 className="text-4xl font-bold pt-5">Money Saving Tips</h1>
        <h2 className="text-3xl font-semibold pt-5">5 Tips to Double your Savings in One Year</h2>
        <p className="pt-5 text-gray-600">Author</p>
      </div>

      <div className="px-5 sm:px-20 pt-8 text-gray-800 leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="px-5 sm:px-20 pt-8 text-gray-800 leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="flex justify-center mt-12 mb-12">
        <Link to="/learning-resources">
          <button className="bg-dark-green text-white text-sm py-3 px-12 rounded-full font-normal shadow-lg hover:bg-green-700 transition duration-300">
            Return to Articles
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Article3;