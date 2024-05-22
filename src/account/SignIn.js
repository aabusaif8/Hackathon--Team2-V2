import React, { useState } from "react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

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

      const text = await response.text();
      try {
        const responseData = JSON.parse(text);
        if (response.ok) {
          const userId = responseData.data.user.Id; // Extract userId from response
          console.log(userId);
          // Redirect to dashboard using userId
          navigate(`/${userId}/dashboard`);
        } else {
          // Handle error if login fails
          console.error("Login failed", responseData);
        }
      } catch (jsonError) {
        console.error("Failed to parse JSON response:", text);
      }

    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div>
      <NavBar />

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f4f8' }}>
        <button style={{ color: '#004d40', fontSize: '2rem', fontWeight: '600', marginTop: '5px', marginLeft: '10px', textDecoration: 'underline', position: 'absolute', top: '0', left: '0' }}>
          Back
        </button>
        <div style={{ width: '100%', maxWidth: '400px', padding: '20px', backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: '600', fontSize: '2.5rem', marginBottom: '20px' }}>
            Let's get Investing!
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input
              style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none', boxShadow: '0 0 0 2px #3b82f6' }}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none', boxShadow: '0 0 0 2px #3b82f6' }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              style={{ width: '100%', padding: '10px', backgroundColor: '#6b21a8', color: '#ffffff', borderRadius: '8px', fontWeight: '600', fontSize: '1.25rem' }}
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <p style={{ marginTop: '10px', textAlign: 'center', color: '#4b5563' }}>
            Don’t have an account?{" "}
            <Link to="/signup" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
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
