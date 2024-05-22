import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/monarchlogo.png";
import "./SignUp.css"; 
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL 
const SignUpForm = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investmentFrequency, setInvestmentFrequency] = useState("");
  const [financialGoals, setFinancialGoals] = useState("");
  const [experience, setExperience] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Password === confirmPassword) {
      const formData = {
        Username,
        Password,
        "Investment Amount": parseInt(investmentAmount),
        "Investment Frequency": investmentFrequency,
        "Financial Goals": parseInt(financialGoals),
        Experience: experience,
        "Stocks in Portfolio": "001,003,005",
        "ETFs in Portfolio": "002,004,006",
      };

      fetch(`${API_BASE_URL}/assets/createInvestmentAccount`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json(); // Parse the JSON response
          } else {
            throw new Error("Failed to create user");
          }
        })
        .then((data) => {
          console.log("Response data:", data); // Log the parsed data
          const userId = data.data; // Extract the userId from the response data
          navigate(`/${userId}/investment-assistant`); // Navigate to the user's dashboard
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to create user");
        });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <button className="text-dark-green text-2xl font-semibold mt-5 ml-10 underline absolute top-0 left-0">
          Back
        </button>
        <div className="absolute top-0 flex justify-center w-full mt-5">
          <img src={logo} alt="logo" className="sm:max-w-lg" />
        </div>
        <div className="w-full max-w-md p-8 bg-white mt-28">
          <h1 className="text-center font-semibold text-4xl mb-4 mt-28">
            Welcome!
          </h1>
          <h1 className="text-center font-semibold text-4xl mb-16">
            Investment your way is right around the corner.
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="absolute top-2 left-16 -mt-4 px-1 bg-white text-[#35a94c] text-xs">
                Username
              </label>
              <div className="mx-auto w-3/4">
                <input
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                  type="text"
                  placeholder="Username"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button
                  className="absolute top-3 right-16 text-[#35a94c] focus:outline-none"
                  type="button"
                  onClick={() => setUsername("")}
                >
                  X
                </button>
              </div>
            </div>
            <div className="relative">
              <label className="absolute top-2 left-16 -mt-4 px-1 bg-white text-[#35a94c] text-xs">
                Email
              </label>
              <div className="mx-auto w-3/4">
                <input
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="relative">
              <label className="absolute top-2 left-16 -mt-4 px-1 bg-white text-[#35a94c] text-xs">
                Create Password
              </label>
              <div className="mx-auto w-3/4">
                <input
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 italic placeholder-black"
                  type="password"
                  placeholder="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute top-3 right-16 text-[#35a94c] focus:outline-none"
                  type="button"
                  onClick={() => setPassword("")}
                >
                  X
                </button>
              </div>
            </div>
            <div className="relative">
              <label className="absolute top-2 left-16 -mt-4 px-1 bg-white text-[#35a94c] text-xs">
                Confirm Password
              </label>
              <div className="mx-auto w-3/4">
                <input
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 italic placeholder-black"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  className="absolute top-3 right-16 text-[#35a94c] focus:outline-none"
                  type="button"
                  onClick={() => setConfirmPassword("")}
                >
                  X
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="financialGoals" className="block text-sm font-medium text-gray-700">
                Financial Goals
              </label>
              <div className="mt-1">
                <input
                  id="financialGoals"
                  name="financialGoals"
                  type="number"
                  autoComplete="off"
                  required
                  value={financialGoals}
                  onChange={(e) => setFinancialGoals(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                Experience
              </label>
              <div className="mt-1">
                <select
                  id="experience"
                  name="experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled>
                    Select experience level
                  </option>
                  <option value="rookie">Rookie</option>
                  <option value="experienced">Experienced</option>
                  <option value="veteran">Veteran</option>
                </select>
              </div>
            </div>
            <div className="relative">
              <label className="absolute top-2 left-16 -mt-4 px-1 bg-white text-[#35a94c] text-xs">
                Investment Amount
              </label>
              <div className="mx-auto w-3/4">
                <select
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 italic placeholder-black"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                >
                  <option value="" disabled>
                    Select amount
                  </option>
                  <option value="500">$500</option>
                  <option value="1000">$1000</option>
                  <option value="2000">$2000</option>
                  <option value="5000">$5000</option>
                </select>
              </div>
            </div>
            <div className="relative">
              <label className="absolute top-2 left-16 -mt-4 px-1 bg-white text-[#35a94c] text-xs">
                Investment Frequency
              </label>
              <div className="mx-auto w-3/4">
                <select
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 italic placeholder-black"
                  value={investmentFrequency}
                  onChange={(e) => setInvestmentFrequency(e.target.value)}
                >
                  <option value="" disabled>
                    Select frequency
                  </option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="annually">Annually</option>
                </select>
              </div>
            </div>
            <div className="relative flex items-center">
              <button
                type="submit"
                className="w-1/2 py-2 bg-[#f88530] text-black rounded-full font-semibold text-md mx-auto"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#f88530] underline">
              Sign in here.
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpForm;
