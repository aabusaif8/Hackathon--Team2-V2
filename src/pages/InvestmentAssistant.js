import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
import { useAuth } from "../context/AuthContext";


function InvestmentAssist() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const validate = useRef(null)
  const { userId } = useAuth();
  const { userId: userIdCheck } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId && (userId != userIdCheck) ) {
      navigate("/badroute");
    }
  }, [userId, userIdCheck, navigate]);


  const questions = [
    <DOB key='dob' 
    validate={validate}
    onNext={() => 
      setCurrentQuestion(currentQuestion + 1)}/>,
    <EmploymentStatus key='employmentStatus'/>,
    <YearlyIncome key='annualIncome'/>,
    <AccountOpenTime key='accountDuration'/>,
    <InvestmentRiskTolerance key='riskTolerance'/>,
    <InvestmentFrequency key='frequency'
    validate={validate}
    />,
    <DoNotInvestCo key='noInvest'/>,
    <SearchCompanies key='searchCo'/>,
    <SSN key='ssn'
    validate={validate}
    />,
    <BankAccount key='bankAccount'
    validate={validate}
    />,
  ];

  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleProceed = () => {
    if (validate.current && validate.current()) {
    if (isLastQuestion) {
      navigate(`/${userId}/account-complete`)
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }
  }


  return (
    <div>
      <Navbar />
      <Link to={`/${userId}/ask-to-use-assistant`}>
      <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
      </Link>
      <div className="text-center font-semibold text-4xl mt-5">
        <h1>Account Setup: Investment Assistant</h1>

        <div>
        {questions[currentQuestion]}
        <div className='space-x-12 drop-shadow-xl mb-8'>
          {currentQuestion > 0 &&
          <button onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-8 font-normal'
            >
              Go Back
          </button>}
          
          <button onClick={handleProceed}
          className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-8 font-normal'
          >
            {isLastQuestion ? 'Complete' : 'Proceed'}
          </button>
        </div> 
        </div>        
      </div>

      <Footer />


    </div>
  );
}

export default InvestmentAssist;
