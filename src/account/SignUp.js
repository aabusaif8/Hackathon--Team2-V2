
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL 
const SignUpForm = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState(""); // Added state variable for email
  const [phoneNumber, setPhoneNumber] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investmentFrequency, setInvestmentFrequency] = useState("");
  const [financialGoals, setFinancialGoals] = useState("");
  const [experience, setExperience] = useState("");
  const [stocksInPortfolio, setStocksInPortfolio] = useState("");
  const [etfsInPortfolio, setEtfsInPortfolio] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Password === confirmPassword) {
        const formData = {
            Username,
            Password,
            email,
            "Phone Number" : phoneNumber,
            "Investment Amount": parseInt(investmentAmount),
            "Investment Frequency": investmentFrequency,
            "Financial Goals": parseInt(financialGoals),
            Experience: experience,
            "Stocks in Portfolio": "001,003,005",
            "ETFs in Portfolio": "002,004,006"
        };
        
        fetch(`${API_BASE_URL}/assets/createInvestmentAccount`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Parse the JSON response
            } else {
                throw new Error('Failed to create user');
            }
        })
        .then(data => {
            console.log('Response data:', data); // Log the parsed data
            const userId = data.data; // Extract the userId from the response data
            navigate(`/${userId}/investment-assistant`); // Navigate to the user's dashboard
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
  <label htmlFor="Username" className="block text-sm font-medium text-gray-700">
    Username
  </label>
  <div className="mt-1">
    <input
      id="Username"
      name="Username"
      type="text"
      autoComplete="name"
      required
      value={Username}
      onChange={(e) => setUsername(e.target.value)}
      className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
</div>

              <div>
  <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
    Create Password
  </label>
  <div className="mt-1">
    <input
      id="Password"
      name="Password"
      type="password"
      autoComplete="new-password"
      required
      value={Password}
      onChange={(e) => setPassword(e.target.value)}
      className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
</div>

<div>
  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
    Confirm Password
  </label>
  <div className="mt-1">
    <input
      id="confirmPassword"
      name="confirmPassword"
      type="password"
      autoComplete="new-password"
      required
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
</div>
<div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
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

export default SignUpForm;

