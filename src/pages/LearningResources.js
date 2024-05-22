import React from 'react';
import { Link } from 'react-router-dom';
import Pic1 from "../images/rafiki.png";
import Pic2 from "../images/phone-wallet.png";
import Pic3 from "../images/money-pile.png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LearningResources() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">Learning Resources</h1>
            <p className="text-lg mt-4">Browse our collection of curated investment resources</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/learning-resources-article1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-light-green h-60 flex items-center justify-center">
                  <img src={Pic1} alt="Pic1" className="max-h-full" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">Investing 101: How You Can Make the Most of Your Money</h2>
                </div>
              </div>
            </Link>
            <Link to="/learning-resources-article2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-light-green h-60 flex items-center justify-center">
                  <img src={Pic2} alt="Pic2" className="max-h-full" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">Mobile Banking: The Pros and Cons</h2>
                </div>
              </div>
            </Link>
            <Link to="/learning-resources-article3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-light-green h-60 flex items-center justify-center">
                  <img src={Pic3} alt="Pic3" className="max-h-full" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">5 Tips to Double your Savings in One Year</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LearningResources;