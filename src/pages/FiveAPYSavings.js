import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pic from '../images/money-flower.png'
import { useAuth } from "../context/AuthContext";

function FiveAPYSavings() {
  const { userId } = useAuth();
  const { userId: userIdCheck } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId && (userId != userIdCheck) ) {
      navigate("/badroute");
    }
  }, [userId, userIdCheck, navigate]);


  return (
    <div>
      <Navbar />

      <div className='text-center mt-5'>
        <h1 className='text-4xl font-semibold'>Select Account Type</h1>
        <h3 className='mt-12 text-3xl'>Set up 5% Savings Account</h3>
      </div>

      <div className='flex justify-center items-center my-20'>
        <img src={Pic} alt='flower pic'/>
      </div>

      <div className='mb-10 mt-10 px-10 font-medium flex flex-col justify-center items-center'>
        <p>With a 5% APY account, you can count on earning 5% interest on all of your returns, every year.</p>
        <ul className='list-disc ml-4 mt-3'>
          <li>Start saving with a variety of investments such as stocks, bonds, and mutual funds</li>
          <li>Interest and divedends that you earn are</li>
        </ul>
      </div>

      {/* Back and Proceed btns */}
      <div className='space-x-12 drop-shadow-xl text-center mb-10'>
        <Link to={`/${userId}/signup/proceed/terms/choose-account-type`}>
        <button className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-8 font-normal'>
          Go Back
        </button>
        </Link>
        <Link to={`/${userId}/ask-to-use-assistant`}>
        <button className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-8 font-normal'>
          Proceed
        </button>
        </Link>
      </div> 
      <Footer /> 
    </div>
  )
}

export default FiveAPYSavings