import React from 'react'
import Navbar from '../components/Navbar'
import ChooseAccountType from '../reuseComponents/ChooseAccountType'
import Footer from '../components/Footer'

function ChooseInvestAccount() {
  return (
    <div>
      <Navbar />

      <ChooseAccountType />

      <Footer />
    </div>
  )
}

export default ChooseInvestAccount