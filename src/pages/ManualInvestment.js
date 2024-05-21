import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DOB from '../reuseComponents/DOB'
import EmploymentStatus from '../reuseComponents/EmploymentStatus'
import YearlyIncome from '../reuseComponents/YearlyIncome'
import SSN from '../reuseComponents/SSN'
import BankAccount from '../reuseComponents/BankAccount'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ManualInvestment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    <DOB key="dob"/>,
    <EmploymentStatus key="employmentStatus"/>,
    <YearlyIncome key="annualIncome"/>,
    <SSN key="ssn"/>,
    <BankAccount key="bankAccount"/>,
  ]

  const handleProceed = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }
  return (
    <div>     
      <Navbar />
      <Link to="/">
      <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
      </Link>
      <div className="text-center font-semibold text-4xl mt-5">
        <h1>Account Setup: Manual Investment</h1>
        <div>
          {questions[currentQuestion]}
          <div className='space-x-12 drop-shadow-xl mb-8'>
            <button onClick={handleBack}
            className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-8 font-normal'
            disabled={currentQuestion === 0}
            >
              Go Back
            </button>
            <button onClick={handleProceed}
            className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-8 font-normal'
            disabled={currentQuestion === questions.length - 1}
            >
              Proceed
            </button>
          </div> 
        </div>
      </div>        
      <Footer />
    </div>
  )
}

export default ManualInvestment