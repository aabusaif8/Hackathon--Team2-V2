import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';


function GetHelp() {
  return (
    <div>
        <Navbar />

        <div>
            <Link to="/myaccount">
            <button className=' text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
            </Link>
            </div>
            
        <div className='flex justify-center text-semibold text-4xl py-5'>
        <h1>Get Help</h1>
        </div>
        
        <div className='px-12 py-10 flex justify-center'>
            <p>Need help? Chat with our Investment Assistant by clicking on the chat bubble in the corner of the screen.
                <br />
                <br />
                Looking for further assistance?
            Email our Support Team at accountsupport@monarch.com
            </p>
        </div>

        <div className='space-x-12 drop-shadow-xl text-center pb-12'>
        <Link to="/myaccount">
          <button className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-12 font-normal mx-auto'>
            Return to Account Settings
          </button>
        </Link>
      </div> 
        

      <Footer />

    </div>

)
}

export default GetHelp