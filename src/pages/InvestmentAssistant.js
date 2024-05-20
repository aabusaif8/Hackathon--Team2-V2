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
 
import AccountComplete from '../reuseComponents/AccountComplete';
import ReadyToInvest from '../reuseComponents/ReadyToInvest';
import TermsAndCond from '../reuseComponents/TermsAndCond';
import ChooseAccountType from '../reuseComponents/ChooseAccountType';
import AddMoreBank from '../reuseComponents/AddMoreBank';
import { useParams } from 'react-router';


function InvestmentAssist() {
  const userId = useParams()
  console.log('---------------------',userId)
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

                    {/* RANDOMS */}
      {/* Component "Account Set Up Complete" move this anywhere thats needed */}
      <div>
        <AccountComplete />
      </div>  


      {/* Component "Ready to Invest" move this anywhere thats needed */}  
      <div>
        <ReadyToInvest />
      </div>

      {/* Component "Terms and Conditions" move this anywhere thats needed */}
      <div>
        <TermsAndCond />
      </div>

      <div>
        <ChooseAccountType />
      </div>

      <div>
      <AddMoreBank />
      </div>

    </div>
  )
}

export default InvestmentAssist