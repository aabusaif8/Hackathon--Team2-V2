import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar'



function Accessibility() {
  return (
    <div>
        <Navbar />
        <button className=' text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
         
        {/* Dark mode */}


        <div className='space-x-12 drop-shadow-xl text-center pb-12'>
        <Link to="/myaccount">
          <button className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-12 font-normal mx-auto'>
            Return to Account Settings
          </button>
        </Link>
      </div> 


    </div>

    

)
}

export default Accessibility;