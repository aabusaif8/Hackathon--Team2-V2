import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LineChart from '../components/LineChart';
import LineChart2 from '../components/LineChart2';
import LineChart3 from '../components/LineChart3';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Dashboard = () => {
  const { isLoggedIn, userId } = useAuth(); // Get the authentication state and user ID
  const [userStocks, setUserStocks] = useState([]);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const fetchUserStocks = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/assets/${userId}/stocks`);
      if (response.ok) {
        const data = await response.json();
        const stocks = data.data;
        setUserStocks(stocks);
      } else {
        throw new Error('Failed to fetch user stocks');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteStock = async (stockId) => {
    try {
      const fixedId = `00${stockId}`;
      const url = `${API_BASE_URL}/users/${userId}/portfolio`;
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

      const response = await fetch(url, options);
      if (response.ok) {
        setUserStocks(userStocks.filter(stock => stock.Id !== stockId));
      } else {
        throw new Error('Failed to delete stock');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn && userId) {
      fetchUserStocks();
    }
  }, [isLoggedIn, userId]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* My Investment Performance Card */}
          <div className="bg-[#E2F5CF] rounded-lg shadow-md p-6 h-[600px]">
            <h3 className="text-lg font-semibold mb-2">My Investment Performance</h3>
            <div  className="box-content h-auto rounded-lg flex flex-col items-center justify-center">
              {/* Placeholder for the investment performance graph */}
              <LineChart />
              <LineChart2 />
              <LineChart3 />
            </div>
          </div>

          {/* My Accounts at a Glance Card */}
          <div className="bg-[#FDDBC2] rounded-lg shadow-md p-6 h-[500px] mb-8">
            <h3 className="text-lg font-semibold mb-4">My Accounts at a Glance</h3>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <div className="bg-white rounded-lg h-[190px] shadow-md p-4 flex items-center justify-center">
                {/* Placeholder for additional content */}
                <span className="text-gray-500">Placeholder 1</span>
              </div>
              <div className="bg-white rounded-lg h-[190px] shadow-md p-4  flex items-center justify-center">
                {/* Placeholder for additional content */}
                <span className="text-gray-500">Placeholder 2</span>
              </div>
            </div>
          </div>
        </div>

        {/* My Stocks Card */}
        <div className="bg-[#AEE378] rounded-lg shadow-md p-6 lg:mt-8 h-[300px]">
          <h3 className="text-lg font-semibold mb-4">My Stocks</h3>
          {error && <p className="text-center text-red-500 mb-4">{error}</p>}
          <Slider {...settings}>
            {userStocks.map((stock) => (
              <div key={stock.Id} className="h-[200px] bg-gray-100 rounded-lg flex flex-col items-center justify-between p-2">
                <h4 className="text-sm font-semibold mb-1">{stock.Category}</h4>
                <p className="text-xs">Close: {stock.Close}</p>
                <p className="text-xs">Date: {formatDate(stock.Date)}</p>
                <p className="text-xs">High: {stock.High}</p>
                <p className="text-xs">Low: {stock.Low}</p>
                <p className="text-xs">Open: {stock.Open}</p>
                <p className="text-xs">Volume: {stock.Volume}</p>
                <p className="text-xs">Future Trend: {stock['Future Trend']}</p>
                <button
                  onClick={() => deleteStock(stock.Id)}
                  className="mt-2 px-2 py-1 text-xs text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;