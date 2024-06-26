import React, { useState } from "react";
import NavBar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Footer from "../components/Footer";
import logo from "../assets/monarchlogo.png";
import eyeOpen from "../assets/passwordshow.png";
import eyeClosed from "../assets/passwordhide.png";
import "./SignIn.css";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    setErrorMessage("");
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

      const text = await response.text();
      try {
        const responseData = JSON.parse(text);
        if (response.ok) {
          const token = responseData.token; // Extract token from response
          const userId = responseData.data.user.Id; // Extract userId from response
          login(token, userId, username); // Store the token and set the authentication state to true
          // Redirect to dashboard using userId
          console.log("SignIn ID:", userId);
          navigate(`/${userId}/dashboard`);
        } else {
          setErrorMessage("Incorrect username or password");
          console.error("Login failed", responseData);
        }
      } catch (jsonError) {
        console.error("Failed to parse JSON response:", text);
      }
    } catch (error) {
      setErrorMessage("Login failed.");
      console.error("Error occurred:", error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <Link to="/newsign">
          <button className="text-dark-green text-2xl font-semibold mt-5 ml-10 underline absolute top-0 left-0">
            Back
          </button>
        </Link>
        <div className="absolute top-0 flex justify-center w-full mt-5">
          <img src={logo} alt="logo" className="sm:max-w-lg" />
        </div>
        <div className="w-full max-w-md p-8 bg-white mt-16">
          <h1 className="text-center font-semibold text-4xl mb-4">
            Welcome back!
          </h1>
          <h1 className="text-center font-semibold text-4xl mb-16">
            Let's get Investing.
          </h1>
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <label className="absolute top-2 left-16 -mt-4 px-1 bg-white text-[#35a94c] text-xs">
                Username
              </label>
              <div className="mx-auto w-3/4">
                <input
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button
                  className="absolute top-3 right-16 text-[#35a94c] focus:outline-none"
                  onClick={() => setUsername("")}
                >
                  X
                </button>
              </div>
            </div>
            <div className="relative">
              <label className="relative top-2.5 left-16 -mt-4 px-1 bg-white text-[#35a94c] text-xs">
                Password
              </label>
              <div className="mx-auto w-3/4">
                <input
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute top-9 right-16 text-[#35a94c] focus:outline-none"
                  onClick={() => setPassword("")}
                >
                  X
                </button>
                <button
                  className="absolute top-10 right-24 text-[#35a94c] focus:outline-none"
                  type="button"
                  onClick={toggleShowPassword}
                >
                  <img
                    className="icon-button"
                    src={showPassword ? eyeOpen : eyeClosed}
                    alt="toggle password visibility"
                  />
                </button>
              </div>
              <div className="relative">
                <label className="relative top-0 left-16 px-1 bg-white text-[#35a94c] text-xs">
                  Password is case sensitive
                </label>
              </div>
              {errorMessage && (
              <label className="relative left-16 px-1 text-red-500 text-center mt-4 text-xs italic">{errorMessage}</label>
            )}
            </div>
            <div className="relative flex items-center">
              <button
                className="w-1/2 py-2 bg-[#f88530] text-black rounded-full font-semibold text-md mx-auto"
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>
          </div>
          <p className="mt-4 text-center text-gray-600">
            Don’t have an account yet?{" "}
            <Link to="/signup" className="text-[#f88530] underline">
              Sign up here.
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
