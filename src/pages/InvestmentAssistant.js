import React, { useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DOB from '../reuseComponents/DOB';
import EmploymentStatus from '../reuseComponents/EmploymentStatus';
import YearlyIncome from '../reuseComponents/YearlyIncome';
import AccountOpenTime from '../reuseComponents/AccountOpenTime';
import InvestmentRiskTolerance from '../reuseComponents/InvestmentRiskTolerance';
import InvestmentFrequency from '../reuseComponents/InvestmentFrequency';
import DoNotInvestCo from '../reuseComponents/DoNotInvestCo';
import SearchCompanies from '../reuseComponents/SearchCompanies';
import SSN from '../reuseComponents/SSN';
import BankAccount from '../reuseComponents/BankAccount';
import AccountComplete from '../reuseComponents/AccountComplete';


import AddMoreBank from '../reuseComponents/AddMoreBank';

import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';


function InvestmentAssist() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    <DOB key='dob'/>,
    <EmploymentStatus key='employmentStatus'/>,
    <YearlyIncome key='annualIncome'/>,
    <AccountOpenTime key='accountDuration'/>,
    <InvestmentRiskTolerance key='riskTolerance'/>,
    <InvestmentFrequency key='frequency'/>,
    <DoNotInvestCo key='noInvest'/>,
    <SearchCompanies key='searchCo'/>,
    <SSN key='ssn'/>,
    <BankAccount key='bankAccount'/>,
  ];

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
      <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
      <div className="text-center font-semibold text-4xl mt-5">
        <h1>Account Setup: Investment Assistant</h1>
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


      {/* RANDOMS */}
      {/* Component "Account Set Up Complete" move this to the end when account is complete */}
      <div>
        <AccountComplete />
      </div>  

      <div>
        <AddMoreBank /> {/* Pass the correct userId here */}
      </div>

      <PieChart />

      <LineChart />

      
    </div>
  );
}

export default InvestmentAssist;
