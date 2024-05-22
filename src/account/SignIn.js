
import React, { useState } from "react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL 
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      if (response.ok) {
        const responseData = await response.json(); // Parse response body as JSON
        const userId = responseData.data.user.Id; // Extract userId from response
        console.log(userId)
        // Redirect to dashboard using userId
        navigate(`/${userId}/dashboard`);
      } else {
        // Handle error if login fails
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  

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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full py-2 bg-purple-700 text-white rounded-lg font-semibold text-xl"
              onClick={handleLogin}
            >

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
