import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
            "Investment Amount": parseInt(investmentAmount),
            "Investment Frequency": investmentFrequency,
            "Financial Goals": parseInt(financialGoals),
            Experience: experience,
            "Stocks in Portfolio": "001,003,005",
            "ETFs in Portfolio": "002,004,006"
        };
        console.log(formData);
        fetch('http://localhost:5000/assets/createInvestmentAccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                navigate("/investment-assistant");
            } else {
                console.log(response);
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
      <form className="form" onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Username" value={Username} onChange={(e) => setUsername(e.target.value)} />
        <input name="password" type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <input name="investmentAmount" type="text" placeholder="Investment Amount" value={investmentAmount} onChange={(e) => setInvestmentAmount(e.target.value)} />
        <input name="investmentFrequency" type="text" placeholder="Investment Frequency" value={investmentFrequency} onChange={(e) => setInvestmentFrequency(e.target.value)} />
        <input name="financialGoals" type="text" placeholder="Financial Goals" value={financialGoals} onChange={(e) => setFinancialGoals(e.target.value)} />
        <input name="experience" type="text" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
        {/* <input name="stocksInPortfolio" type="text" placeholder="Stocks in Portfolio" value={stocksInPortfolio} onChange={(e) => setStocksInPortfolio(e.target.value)} />
        <input name="etfsInPortfolio" type="text" placeholder="ETFs in Portfolio" value={etfsInPortfolio} onChange={(e) => setEtfsInPortfolio(e.target.value)} /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
