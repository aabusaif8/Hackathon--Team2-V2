import React from 'react'

import NavBar from '../components/Navbar'
import MyAccounts from '../components/MyAccounts'
import MyStocks from '../components/MyStocks'
import ReccomendedArticles from '../components/ReccommendedArticles'
import Footer from '../components/Footer'

function Dashboard() {
  return (
    <div>
      <NavBar />

      <MyAccounts />

      <MyStocks />

      <ReccomendedArticles/>

      <Footer />

    </div>
  );
};

export default Dashboard