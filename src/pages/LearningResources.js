import React from 'react'
import { Link } from 'react-router-dom'
import Pic1 from "../images/rafiki.png"
import Pic2 from "../images/phone-wallet.png"
import Pic3 from "../images/money-pile.png"


function LearningResources() {
  return (
    <div className='justify-content-center'>
      <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
      <div className="text-center font-semibold text-4xl mt-5">
        Learning Resources
        <p className='text-lg mt-8'>Browse our collection of curated investment resources</p>
      </div>

      <Link to="/learning-resources-article1">
        <div className='sm:box-content h-60 bg-light-green mx-10 rounded-xl mt-10 pt-5 shadow-xl'>
          <img src={Pic1} className='mx-10 '/>
        </div>
        <div className='sm:box-content h-36 mx-10 rounded-xl shadow-xl'>
          <h1 className='text-center text-3xl pt-5'>Investing 101: How You Can Make the Most of Your Money</h1>
        </div>
      </Link>

      <Link to="/learning-resources-article2">
        <div className='sm:box-content h-60 bg-light-green mx-10 rounded-xl mt-20 pt-5 shadow-xl'>
          <img src={Pic2} className='mx-10 '/>
        </div>
        <div className='sm:box-content h-36 mx-10 rounded-xl shadow-xl'>
          <h1 className='text-center text-3xl pt-10'>Mobile Banking: The Pros and Cons</h1>
        </div>
      </Link>

      <Link to="/learning-resources-article3">
        <div className='sm:box-content h-60 bg-light-green mx-10 rounded-xl mt-20 pt-5 shadow-xl'>
          <img src={Pic3} className='mx-10 '/>
        </div>
        <div className='sm:box-content h-36 mx-10 rounded-xl shadow-xl'>
          <h1 className='text-center text-3xl pt-10'>5 Tips to Double your Savings in One Year</h1>
        </div>
      </Link>
    </div>
  )
}

export default LearningResources