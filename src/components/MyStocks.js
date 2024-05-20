import React, { useState, useEffect } from 'react';

const MyStocks = ({ userId }) => {
  const [userStocks, setUserStocks] = useState([]);
  const [error, setError] = useState(null);

  const fetchUserStocks = async () => {
    try {
      const response = await fetch(`http://localhost:5000/assets/${userId}/stocks`);
      if (response.ok) {
        const data = await response.json();
        const stocks = data.data
        setUserStocks(stocks);
      } else {
        throw new Error('Failed to fetch user stocks');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteStock = async (userId, stockId) => {
    try {
      const fixedId = `00${stockId}`
      console.log(fixedId)
      const url = `http://localhost:5000/users/${userId}/portfolio`;
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'remove',
          type: 'stock',
          id: fixedId
        })
      };

      //console.log(options)

      const controller = new AbortController();
      const signal = controller.signal;
  
      const response = await fetch(url, { ...options, signal });console.log(response)
      if (response.ok) {
        setUserStocks(userStocks.filter(stock => stock.Id !== stockId));
        //console.log(userStocks)
      } else {
        throw new Error('Failed to delete stock');
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  
  

  useEffect(() => {
    fetchUserStocks();
    // Example: Delete the first stock when the component mounts
    if (userStocks.length > 0) {
      deleteStock(userId, userStocks[0].Id);
    }
  }, [userId]);
  
  
  return (
    <div className="myStocks">
      <div className="myStocks-content">
        <h1 className="myStocks-title">My Stocks</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="myStocks-cards">
          {userStocks.map((stock) => (
            <div key={stock.Id} className="stock-card">
              <h2>{stock.name}</h2>
              <p>Symbol: {stock.symbol}</p>
              <p>Quantity: {stock.quantity}</p>
              <button onClick={() => deleteStock(userId,stock.Id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyStocks;

