import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import MyAccounts from '../components/MyAccounts';
import MyStocks from '../components/MyStocks';
import ReccomendedArticles from '../components/ReccommendedArticles';
import Footer from '../components/Footer';

function Dashboard() { 
  const { userId } = useParams();
  //console.log(userId)
  return (
    <div>
      <NavBar />

      <MyAccounts />

      <MyStocks userId={userId} /> 

      <ReccomendedArticles />

      <Footer />
    </div>
  );
}

export default Dashboard;
