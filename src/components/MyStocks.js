import React, { useState, useEffect } from 'react';

const MyStocks = ({ userId }) => {
  const [userStocks, setUserStocks] = useState([]);
  const [error, setError] = useState(null);
  const fetchUserStocks = async () => {
    try {
      const response = await fetch(`http://localhost:5000/assets/${userId}/stocks`);
      //console.log(response)
      if (response.ok) {
        let data = await response.json();
        console.log(data.data)
        setUserStocks(data.data);
      } else {
        throw new Error('Failed to fetch user stocks');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchUserStocks();
  }, [userId]);

  return (
    <div className="myStocks">
      <div className="myStocks-content">
        <h1 className="myStocks-title">My Stocks</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="myStocks-cards">
          {/* Render user's stocks */}
          {userStocks.map((stock) => (
            <div key={stock.Id} className="stock-card">
              <h2>{stock.name}</h2>
              <p>Symbol: {stock.symbol}</p>
              <p>Quantity: {stock.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyStocks;
