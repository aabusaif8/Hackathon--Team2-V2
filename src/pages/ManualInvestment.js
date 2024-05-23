import React, { useState, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DOB from '../reuseComponents/DOB'
import EmploymentStatus from '../reuseComponents/EmploymentStatus'
import YearlyIncome from '../reuseComponents/YearlyIncome'
import SSN from '../reuseComponents/SSN'
import BankAccount from '../reuseComponents/BankAccount'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ManualInvestment() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const validate = useRef(null)

  const { userId } = useParams()

  const questions = [
    <DOB key='dob' 
    validate={validate}
    onNext={() => 
      setCurrentQuestion(currentQuestion + 1)}/>,
    <EmploymentStatus key="employmentStatus"/>,
    <YearlyIncome key="annualIncome"/>,
    <SSN key='ssn'
    validate={validate}
    />,
    <BankAccount key='bankAccount'
    validate={validate}
    />,
  ]

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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <Link to={`/${userId}/ask-to-use-assistant`}>
      <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
      </Link>
      <div className="text-center font-semibold text-4xl mt-5">
        <h1>Account Setup: Manual Investment</h1>
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

export default ManualInvestment;