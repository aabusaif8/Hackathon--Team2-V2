import React from 'react'
import { Link } from 'react-router-dom'
import Standard from "../images/standard-pic.png"
import FivePercent from '../images/5%-pic.png'
import Custodial from '../images/custodial-pic.png'
import IRA from '../images/IRA-pic.png'

function ChooseAccountType() {
  return (
    <div>
      <div>
        <Link to="/:userId/ready-to-invest/terms">
        <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
        </Link>
      </div>

      <div className='text-center mb-10 mt-10 px-8'>
        <h1 className='text-4xl font-semibold'>Now, choose what account type you'd like to start investing with</h1>       
      </div>

      <div className='box-content h-auto bg-red-orange mx-10 rounded-xl my-12 text-2xl py-5 shadow-xl'>
        <h2 className='text-center font-semibold'>Select Account Type</h2>
        <Link to="/standard-account">
        <div className='box-content h-20 bg-white mx-5 my-5 flex'>
          <img src={Standard} className='w-10 h-10 my-5 mx-2'/>
          <div className='flex flex-col px-1'>
            <h6 className='text-lg font-semibold'>Standard Account</h6>
            <p className='text-sm'>Set up a standard brokerage account to start investing</p>
          </div>
        </div>
        </Link>

        <Link to="/5%apy-savings">
        <div className='box-content h-20 bg-white mx-5 my-5 flex'>
          <img src={FivePercent} className='w-10 h-10 my-5 mx-2'/>
          <div className='flex flex-col px-1'>
            <h6 className='text-lg font-semibold'>5% APY Savings</h6>
            <p className='text-sm'>Start saving your Investments and earn 5% interest yearly</p>
          </div>         
        </div>
        </Link>

        <Link to="/custodial-account">
        <div className='box-content h-20 bg-white mx-5 my-5 flex'>
          <img src={Custodial} className='w-10 h-10 my-5 mx-2'/>
          <div className='flex flex-col px-1'>
            <h6 className='text-lg font-semibold'>Custodial Account</h6>
            <p className='text-sm'>Create an account that earns today for your kids tomorrow</p>
          </div> 
        </div>
        </Link>

        <Link to="/ira">
        <div className='box-content h-20 bg-white mx-5 my-5 flex'>
          <img src={IRA} className='w-9 h-9 my-5 mx-2'/>
          <div className='flex flex-col px-1'>
            <h6 className='text-lg font-semibold'>IRA (Retirement)</h6>
            <p className='text-sm'>Invest in a variety of bonds to build your retirement fund</p>
          </div> 
        </div>
        </Link>
      </div>

    </div>
  )
}

export default ChooseAccountType