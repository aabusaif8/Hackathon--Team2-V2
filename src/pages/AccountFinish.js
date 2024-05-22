import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AccountComplete from '../reuseComponents/AccountComplete'

function AccountFinish() {
  return (
    <div>
      <Navbar />

      <AccountComplete />

      <Footer />
    </div>
  )
}

export default AccountFinish;