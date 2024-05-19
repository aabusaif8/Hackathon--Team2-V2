import React from 'react'
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

function InvestmentAssist() {
  return (
    <div>
      <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
      <div className="text-center font-semibold text-4xl mt-5">
        <h1>Account Setup: Investment Assistant</h1>
        <DOB />
        <EmploymentStatus />
        <YearlyIncome />
        <AccountOpenTime />
        <InvestmentRiskTolerance />
        <InvestmentFrequency />
        <DoNotInvestCo />
        <SearchCompanies />
        <SSN />
        <BankAccount />
      </div>     
    </div>
  )
}

export default InvestmentAssist