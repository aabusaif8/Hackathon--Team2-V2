import React from "react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <NavBar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <button className="text-dark-green text-2xl font-semibold mt-5 ml-10 underline absolute top-0 left-0">
          Back
        </button>
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-center font-semibold text-4xl mb-8">
            Let's get Investing!
          </h1>
          <div className="flex flex-col space-y-6">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Username"
            />
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Password"
            />
            <button className="w-full py-2 bg-purple-700 text-white rounded-lg font-semibold text-xl">
              Login
            </button>
          </div>
          <p className="mt-4 text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 underline">
              Sign up here
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
