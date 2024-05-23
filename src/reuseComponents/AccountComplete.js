import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Pic from "../images/money-flower.png"

function AccountComplete() {
  const { userId } = useParams();

  return (
    <div>

      <div>
        <Link to={`/${userId}/ask-to-use-assistant`}>
        <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
        </Link>
      </div>
      
      <div className='text-center mb-20 mt-10'>
        <h1 className='text-4xl font-semibold'>Account Set Up Complete!</h1>       
      </div>

      <div className='flex justify-center items-center mb-10'>
        <img src={Pic} alt='money-flower'/>
      </div>

      <div className='space-x-12 drop-shadow-xl text-center pb-12'>
        <Link to={`/${userId}/dashboard`}>
          <button className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-12 font-normal mx-auto'>
            Go to My Dashboard
          </button>
        </Link>
      </div>

    </div>
  )
}

export default AccountComplete