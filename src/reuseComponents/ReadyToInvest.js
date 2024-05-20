import React from 'react'
import Pic from "../images/money-flower.png"

function ReadyToInvest() {
  return (
    <div>
      <div className='text-center mb-10 mt-10 px-10'>
        <h1 className='text-4xl font-semibold'>Hello, Keith! Ready to get investing?</h1>
      </div>

      <div className='flex justify-center items-center mb-10'>
        <img src={Pic} alt='money-flower'/>
      </div>

      <div className='text-center mb-5 mt-10 px-10'>
        <h1 className='text-4xl font-semibold'>We have just a few more questions to get you started</h1>
      </div>

      <div className='space-x-12 drop-shadow-xl text-center pb-12'>       
          <button className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-12 font-normal mx-auto'>
            Proceed
          </button>
      </div>
    </div>
  )
}

export default ReadyToInvest