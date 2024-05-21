import React from 'react'
import Pic from '../images/coin.png'

function StandardAccount() {
  return (
    <div>
      <div>
        <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
      </div>

      <div className='text-center mt-5'>
        <h1 className='text-4xl font-semibold'>Select Account Type</h1>
        <h3 className='mt-12 text-3xl'>Set up a Standard Brokerage Account</h3>
      </div>

      <div className='flex justify-center items-center my-20'>
        <img src={Pic} alt='flower pic'/>
      </div>

      <div className='text-left mb-10 mt-10 px-10 font-medium'>
        <p>With a standard brokerage account, you can start onvesting today for anything you need tomorrow.</p>
        <ul className='list-disc ml-4 mt-3'>
          <li>Start saving with a variety of investments such as stocks, bonds, and mutual funds</li>
          <li>Interest and divedends that you earn are</li>
        </ul>
      </div>

      {/* Back and Proceed btns */}
      <div className='space-x-12 drop-shadow-xl text-center'>
        <button className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-8 font-normal'>
          Go Back
        </button>
        <button className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-8 font-normal'>
          Proceed
        </button>
      </div> 
    </div>
  )
}

export default StandardAccount