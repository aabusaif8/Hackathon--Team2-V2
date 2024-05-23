import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/monarchlogo.png";
import "./SignUp.css";
import { useAuth } from "../context/AuthContext";
import eyeOpen from "../assets/passwordshow.png";
import eyeClosed from "../assets/passwordhide.png";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

const SignUpForm = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investmentFrequency, setInvestmentFrequency] = useState("");
  const [financialGoals, setFinancialGoals] = useState("");
  const [experience, setExperience] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState({
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
  });
  const [usernameCriteria, setUsernameCriteria] = useState({
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
  });

  const [usernameAlertDisplayed, setUsernameAlertDisplayed] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const checkPasswordCriteria = () => {
      const criteria = {
        minLength: Password.length >= 8,
        uppercase: /[A-Z]/.test(Password),
        lowercase: /[a-z]/.test(Password),
        number: /\d/.test(Password),
      };
      setPasswordCriteria(criteria);
    };

    checkPasswordCriteria();
  }, [Password]);

  useEffect(() => {
    const checkUsernameCriteria = () => {
      const criteria = {
        minLength: Username.length >= 6,
        uppercase: /[A-Z]/.test(Username),
        lowercase: /[a-z]/.test(Username),
        number: /\d/.test(Username),
      };
      setUsernameCriteria(criteria);
    };

    checkUsernameCriteria();
  }, [Username]);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    let formattedPhoneNumber = "";

    if (input.length <= 3) {
      formattedPhoneNumber = input;
    } else if (input.length <= 6) {
      formattedPhoneNumber = `(${input.slice(0, 3)}) ${input.slice(3)}`;
    } else {
      formattedPhoneNumber = `(${input.slice(0, 3)}) ${input.slice(
        3,
        6
      )}-${input.slice(6, 10)}`;
    }

    setPhoneNumber(formattedPhoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\(\d{3}\)\d{3}-\d{4}$/;

    if (
      !(
        usernameCriteria.minLength &&
        usernameCriteria.uppercase &&
        usernameCriteria.lowercase &&
        usernameCriteria.number
      )
    ) {
      alert("Username does not meet criteria");
      setUsernameAlertDisplayed(true);
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (Password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const formData = {
      Username,
      Password,
      email,
      Phone: phoneNumber,
      "Investment Amount": parseInt(investmentAmount),
      "Investment Frequency": investmentFrequency,
      "Financial Goals": parseInt(financialGoals),
      Experience: experience,
      "Stocks in Portfolio": "001,003,005",
      "ETFs in Portfolio": "002,004,006",
    };

    try {
      const response = await fetch(
        `${API_BASE_URL}/assets/createInvestmentAccount`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const text = await response.text();
      const responseData = JSON.parse(text);

      if (!response) {
        throw new Error("Failed to create user");
      }

      const token = responseData.token; // Extract token from response
      const userId = responseData.data; // Extract userId from response
      console.log(userId);
      login(token, userId);

      console.log("Response data:", responseData); // Log the parsed data
      navigate(`/${userId}/signup/proceed`); // Navigate to the user's dashboard
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create user");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <Link to="/NewSignIn">
          <button className="text-dark-green text-2xl font-semibold mt-5 ml-10 underline absolute top-0 left-0">
            Back
          </button>
        </Link>
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
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <button
                  className="absolute top-3 right-16 text-[#35a94c] focus:outline-none"
                  type="button"
                  onClick={() => setUsername("")}
                >
                  X
                </button>
              </div>
              {usernameAlertDisplayed && (
                <div className="relative h-[85px]">
                  <label className="relative top-0 left-16 px-1 bg-white text-[#35a94c] text-xs custom-line-height">
                    Username must include:
                    <ul style={{ marginBlockStart: "0", marginBlockEnd: "0" }}>
                      <li
                        style={{
                          paddingLeft: "10px",
                          color: usernameCriteria.minLength ? "#35a94c" : "red",
                        }}
                      >
                        {usernameCriteria.minLength ? "✓" : "•"} At least 6
                        Characters
                      </li>
                      <li
                        style={{
                          paddingLeft: "10px",
                          color: usernameCriteria.uppercase ? "#35a94c" : "red",
                        }}
                      >
                        {usernameCriteria.uppercase ? "✓" : "•"} One Upper Case
                        Letter
                      </li>
                      <li
                        style={{
                          paddingLeft: "10px",
                          color: usernameCriteria.lowercase ? "#35a94c" : "red",
                        }}
                      >
                        {usernameCriteria.lowercase ? "✓" : "•"} One Lower Case
                        Letter
                      </li>
                      <li
                        style={{
                          paddingLeft: "10px",
                          color: usernameCriteria.number ? "#35a94c" : "red",
                        }}
                      >
                        {usernameCriteria.number ? "✓" : "•"} One Number
                      </li>
                    </ul>
                  </label>
                </div>
              )}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="absolute top-3 right-16 text-[#35a94c] focus:outline-none"
                  type="button"
                  onClick={() => setEmail("")}
                >
                  X
                </button>
              </div>
            </div>
            <div className="relative">
              <label className="absolute top-2 left-16 -mt-4 px-1 bg-white text-[#35a94c] text-xs">
                Password
              </label>
              <div className="mx-auto w-3/4">
                <input
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                  type={showPassword ? "text" : "password"}
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
                <button
                  className="absolute top-3.5 right-24 text-[#35a94c] focus:outline-none"
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
              <div className="relative h-[85px]">
                <label className="relative top-0 left-16 px-1 bg-white text-[#35a94c] text-xs custom-line-height">
                  Password is case sensitive and must include:
                  <ul style={{ marginBlockStart: "0", marginBlockEnd: "0" }}>
                    <li
                      style={{
                        paddingLeft: "10px",
                        color: passwordCriteria.minLength ? "#35a94c" : "red",
                      }}
                    >
                      {passwordCriteria.minLength ? "✓" : "•"} At least 8
                      Characters
                    </li>
                    <li
                      style={{
                        paddingLeft: "10px",
                        color: passwordCriteria.uppercase ? "#35a94c" : "red",
                      }}
                    >
                      {passwordCriteria.uppercase ? "✓" : "•"} One Upper Case
                      Letter
                    </li>
                    <li
                      style={{
                        paddingLeft: "10px",
                        color: passwordCriteria.lowercase ? "#35a94c" : "red",
                      }}
                    >
                      {passwordCriteria.lowercase ? "✓" : "•"} One Lower Case
                      Letter
                    </li>
                    <li
                      style={{
                        paddingLeft: "10px",
                        color: passwordCriteria.number ? "#35a94c" : "red",
                      }}
                    >
                      {passwordCriteria.number ? "✓" : "•"} One Number
                    </li>
                  </ul>
                </label>
              </div>
            </div>
            <div className="relative mt-2">
              <label className="absolute top-2 left-16 -mt-4 px-1 bg-white text-[#35a94c] text-xs">
                Confirm Password
              </label>
              <div className="mx-auto w-3/4">
                <input
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                  type={showConfirmPassword ? "text" : "password"}
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
                <button
                  className="absolute top-3.5 right-24 text-[#35a94c] focus:outline-none"
                  type="button"
                  onClick={toggleShowConfirmPassword}
                >
                  <img
                    className="icon-button"
                    src={showConfirmPassword ? eyeOpen : eyeClosed}
                    alt="toggle password visibility"
                  />
                </button>
              </div>
            </div>
            <div className="relative">
              <label className="absolute top-2 left-16 -mt-4 px-1 bg-white text-[#35a94c] text-xs">
                Phone Number
              </label>
              <div className="mx-auto w-3/4">
                <input
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
                <button
                  className="absolute top-3 right-16 text-[#35a94c] focus:outline-none"
                  type="button"
                  onClick={() => setPhoneNumber("")}
                >
                  X
                </button>
              </div>
            </div>
            <div className="relative">
              <label className="absolute top-2 left-16 -mt-4 px-1 bg-white text-[#35a94c] text-xs">
                Experience
              </label>
              <div className="mx-auto w-3/4">
                <select
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select experience
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
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                  required
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
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                  value={investmentFrequency}
                  onChange={(e) => setInvestmentFrequency(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select frequency
                  </option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Annually</option>
                </select>
              </div>
            </div>
            <div className="relative">
              <label className="absolute top-2 left-16 -mt-4 px-1 bg-white text-[#35a94c] text-xs">
                Financial Goals
              </label>
              <div className="mx-auto w-3/4">
                <select
                  className="w-full px-4 py-3 border border-[#997b8a] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-black"
                  value={financialGoals}
                  onChange={(e) => setFinancialGoals(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select goal
                  </option>
                  <option value="retirement">Retirement</option>
                  <option value="education">Education</option>
                  <option value="buy a home">Buy a Home</option>
                  <option value="vacation">Vacation</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="w-1/2 py-2 bg-[#f88530] text-black rounded-full font-semibold text-md mx-auto"
                disabled={
                  !Object.values(passwordCriteria).every((criteria) => criteria)
                }
              >
                Sign Up
              </button>
              <p className="mt-4 text-center text-gray-600">
                Already have an account?{" "}
                <Link to="/signin" className="text-[#f88530] underline">
                  Sign in here.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpForm;
