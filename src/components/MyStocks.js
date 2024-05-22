import React, { useState, useEffect } from 'react';
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL 
const MyStocks = ({ userId }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const [userStocks, setUserStocks] = useState([]);
  const [error, setError] = useState(null);

  const fetchUserStocks = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/assets/${userId}/stocks`);
      if (response.ok) {
        const data = await response.json();
        const stocks = data.data;
        setUserStocks(stocks);
        console.log(userStocks)

      } else {
        throw new Error('Failed to fetch user stocks');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteStock = async (userId, stockId) => {
    try {
      const fixedId = `00${stockId}`;
      const url = `${API_BASE_URL}users/${userId}/portfolio`;
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

      const controller = new AbortController();
      const signal = controller.signal;
  
      const response = await fetch(url, { ...options, signal });
      if (response.ok) {
        setUserStocks(userStocks.filter(stock => stock.Id !== stockId));
      } else {
        throw new Error('Failed to delete stock');
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    
  };
  
  useEffect(() => {
    if (userId) {
      fetchUserStocks();
    }
  }, [userId]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f4f8' }}>
      <div style={{ width: '80%', maxWidth: '1200px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#333333' }}>My Stocks</h1>
        {error && <p style={{ textAlign: 'center', color: 'red', marginBottom: '20px' }}>{error}</p>}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {userStocks.map((stock) => (
            <div key={stock.Id} style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#fafafa' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{stock.Category}</h2>
              <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Close: {stock.Close}</p>
              <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Date: {formatDate(stock.Date)}</p>
              <p style={{ fontSize: '1rem', marginBottom: '5px' }}>High: {stock.High}</p>
              <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Low: {stock.Low}</p>
              <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Open: {stock.Open}</p>
              <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Volume: {stock.Volume}</p>
              <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Future Trend: {stock['Future Trend']}</p>
              <button onClick={() => deleteStock(userId, stock.Id)} style={{ display: 'block', marginTop: '10px', padding: '10px 15px', fontSize: '1rem', color: '#ffffff', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default MyStocks;
