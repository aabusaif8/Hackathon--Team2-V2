import React from "react";
import NavBar from "../components/Navbar";

const SignUpProceed = ({ legalName }) => {
  return (
    <div>
      <NavBar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-center font-semibold text-4xl mb-8">
            Hello, {legalName}
          </h1>
          <br />
          <br />
          <p className="text-center text-xl mb-8">Ready to get investing?</p>
          <br />
          <br />
          <p className="text-center text-lg mb-8">
            We have just a few more questions to get you started.
          </p>
          <button className="w-full py-2 bg-gray-500 text-white rounded-lg font-semibold text-xl">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpProceed;
