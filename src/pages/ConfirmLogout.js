import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const ConfirmLogout = () => {

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="bg-red-orange flex flex-col justify-center items-center rounded-lg mx-auto my-10 p-5 w-[400px] h-[400px]">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold">You have been successfully logged out</h1>
        </div>

        <div className="flex space-x-12">
          <Link to={`/`}>
            <button className=" bg-[#F88530] py-3 px-12 rounded-full font-semibold">
              Okay
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmLogout;