import React from "react";
import Navbar from "../components/Navbar";
import Pic from "../images/money-flower.png";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";

const SignUpProceed = ({ username }) => {
  const { userId } = useParams();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div>
        <div className="text-center mb-10 mt-10 px-10">
          <h1 className="text-4xl font-semibold">
            Hello, {username}! Ready to get investing?
          </h1>
        </div>

        <div className="flex justify-center items-center mb-10">
          <img src={Pic} alt="money-flower" />
        </div>

        <div className="text-center mb-5 mt-10 px-10">
          <h1 className="text-4xl font-semibold">
            We have just a few more questions to get you started
          </h1>
        </div>

        <div className="space-x-12 drop-shadow-xl text-center pb-12">
          <Link to={`/${userId}/signup/proceed/terms`}>
            <button className="bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-12 font-normal mx-auto">
              Proceed
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpProceed;
