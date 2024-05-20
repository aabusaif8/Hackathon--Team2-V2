import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investmentFrequency, setInvestmentFrequency] = useState("");
  const [experience, setExperience] = useState("");
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Password === confirmPassword) {
      const formData = {
        Username,
        Password,
        investmentAmount,
        investmentFrequency,
        experience
      };
      console.log(formData)
      fetch('http://localhost:5000/assets/createInvestmentAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => {
          if (response.ok) {
            // Redirect or handle success scenario
            navigate("/investment-assistant");
          } else {
            // Handle error scenario
            throw new Error('Failed to create user');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Failed to create user');
        });
      
    } else {
      alert("Passwords do not match");
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <h2 className="text-5xl text-gray-900">
            Welcome!
            <br />
            Investment your way is right around the corner.
          </h2>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl text-gray-900">
            Account Creation
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="Username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Legal Name
                </label>
                <div className="mt-1">
                <input
                  id="Username"
                  name="Username"
                  type="text"
                  autoComplete="name"
                  required
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)} // Update legalname state
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Create Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="Password"
                    name="Password"
                    type={showPassword ? "text" : "Password"}
                    autoComplete="new-Password"
                    required
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? (
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a7 7 0 017 7c0 1.92-.78 3.68-2.05 4.95l-1.42 1.42C14.32 14.23 12.28 15 10 15s-4.32-.77-5.53-2.13L3.05 11.1C1.78 9.68 1 7.92 1 6a7 7 0 0114 0c0 .73-.12 1.43-.34 2.1a7.71 7.71 0 01-.66 1.7L10 12zm0-4a3 3 0 100 6 3 3 0 000-6zM4.29 11.3l1.42 1.42a7.71 7.71 0 001.7.66A7.21 7.21 0 006 11.34a7 7 0 00-.66-1.7l-1.42-1.42C3.77 9.67 4 10.32 4 11v.3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a7 7 0 017 7c0 1.92-.78 3.68-2.05 4.95l1.42 1.42C14.32 14.23 12.28 15 10 15s-4.32-.77-5.53-2.13L3.05 11.1C1.78 9.68 1 7.92 1 6a7 7 0 0114 0c0 .73-.12 1.43-.34 2.1a7.71 7.71 0 01-.66 1.7L10 12zm0-4a3 3 0 100 6 3 3 0 000-6zM4.29 11.3l1.42 1.42a7.71 7.71 0 001.7.66A7.21 7.21 0 006 11.34a7 7 0 00-.66-1.7l-1.42-1.42C3.77 9.67 4 10.32 4 11v.3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? (
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a7 7 0 017 7c0 1.92-.78 3.68-2.05 4.95l-1.42 1.42C14.32 14.23 12.28 15 10 15s-4.32-.77-5.53-2.13L3.05 11.1C1.78 9.68 1 7.92 1 6a7 7 0 0114 0c0 .73-.12 1.43-.34 2.1a7.71 7.71 0 01-.66 1.7L10 12zm0-4a3 3 0 100 6 3 3 0 000-6zM4.29 11.3l1.42 1.42a7.71 7.71 0 001.7.66A7.21 7.21 0 006 11.34a7 7 0 00-.66-1.7l-1.42-1.42C3.77 9.67 4 10.32 4 11v.3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a7 7 0 017 7c0 1.92-.78 3.68-2.05 4.95l-1.42 1.42C14.32 14.23 12.28 15 10 15s-4.32-.77-5.53-2.13L3.05 11.1C1.78 9.68 1 7.92 1 6a7 7 0 0114 0c0 .73-.12 1.43-.34 2.1a7.71 7.71 0 01-.66 1.7L10 12zm0-4a3 3 0 100 6 3 3 0 000-6zM4.29 11.3l1.42 1.42a7.71 7.71 0 001.7.66A7.21 7.21 0 006 11.34a7 7 0 00-.66-1.7l-1.42-1.42C3.77 9.67 4 10.32 4 11v.3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-gray-700"
                >
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

              <div>
                <label
                  htmlFor="investmentAmount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Investment Amount
                </label>
                <div className="mt-1">
                  <select
                    id="investmentAmount"
                    name="investmentAmount"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

              <div>
                <label
                  htmlFor="investmentFrequency"
                  className="block text-sm font-medium text-gray-700"
                >
                  Investment Frequency
                </label>
                <div className="mt-1">
                  <select
                    id="investmentFrequency"
                    name="investmentFrequency"
                    value={investmentFrequency}
                    onChange={(e) => setInvestmentFrequency(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
