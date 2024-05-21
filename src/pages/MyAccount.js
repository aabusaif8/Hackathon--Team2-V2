import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



function MyAccount() {
  return (
    <div>
        <Navbar />
        <button className=' text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
      

        <div className='flex justify-center text-semibold text-3xl py-5'>
        <h1>My Account</h1>
        </div>

        <div className=' flex justify-center'>
      <div className=' w-1/2 bg-[#C5eb9e] text-center font-semibold mt-5 rounded '>
      <h2 className=' text-[#ff7f00] text-2xl py-4'>Personal Settings</h2>
      <nav>
        <ul>
          <li className='block px-6 py-4 border-b border-t hover:bg-white transition duration-300 border-dark-green '>
            <Link to="/personal-information">Personal Information</Link>
          </li>
          <li className='block px-6 py-4  hover:bg-white transition duration-300'>
            <Link to="/linked-accounts">Linked Accounts</Link>
          </li>
        </ul>
      </nav>
      </div>
      </div>

      
      
      <div className=' flex justify-center'>
      <div className=' w-1/2 bg-[#C5eb9e] text-center font-semibold mt-5 rounded '>
      <h2 className=' text-[#ff7f00] text-2xl py-4 block px-6 border-b border-dark-green'>Security and Privacy</h2>
      <nav>
        <ul>
          <li className='block px-6 py-4 border-b border-dark-green hover:bg-white transition duration-300'>
            <Link to="/my-statements">My Statements</Link>
          </li>
          <li className='block px-6 py-4 border-b border-dark-green hover:bg-white transition duration-300'>
            <Link to="/change-password">Change Password</Link>
          </li>
          <li className='block px-6 py-4  border-dark-green hover:bg-white transition duration-300'>
            <Link to="/two-step-authentication">Two-Step Authentication</Link>
          </li>
        </ul>
      </nav>
      </div>
      </div>


      <div className='flex justify-center'>
      <div className='w-1/2 bg-[#C5eb9e] text-center font-semibold mt-5 rounded'>
      <h2 className='text-[#ff7f00] text-2xl py-4 block px-6 border-b border-dark-green'>Support</h2>
      <nav>
        <ul>
          <li className='block px-6 py-4 border-b border-dark-green hover:bg-white transition duration-300'>
            <Link to="/legal">Legal</Link>
          </li>
          <li className='block px-6 py-4 border-b border-dark-green hover:bg-white transition duration-300'>
            <Link to="/get-help">Get Help</Link>
          </li>
          <li className='block px-6 py-4 border-b border-dark-green hover:bg-white transition duration-300'>
            <Link to="/accessibility">Accessibility</Link>
          </li>
        </ul>
      </nav>
    </div> 
    </div>
    <Footer />    
    </div>
    

)
}

export default MyAccount