import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


function MyStatements(){
    return (
        <div>
            <Navbar />
            <button className=' text-dark-green text-2xl  mt-5 ml-10 underline'>Back</button>
      

        <div className='flex justify-center text-semibold text-3xl py-5'>
        <h1>My Statements</h1>
        </div>

        <div className=' flex justify-center'>
      <div className=' w-1/2 bg-[#C5eb9e] text-center mt-5 rounded '>
      <nav>
        <ul>
          <li className='flex border-b justify-between px-6 py-4 border-dark-green '>
            <p>Statement</p>
            <button> Download</button>
          </li>
          <li className='flex border-b justify-between px-6 py-4 border-dark-green '>
            <p>Statement</p>
            <button> Download</button>
          </li>
          <li className='flex border-b justify-between px-6 py-4 border-dark-green '>
            <p>Statement</p>
            <button> Download</button>
          </li>
          <li className='flex border-b justify-between px-6 py-4 border-dark-green '>
            <p>Statement</p>
            <button> Download</button>
          </li>
          <li className='flex border-b justify-between px-6 py-4 border-dark-green '>
            <p>Statement</p>
            <button> Download</button>
          </li>
          <li className='flex justify-between px-6 py-4 border-dark-green '>
            <p>Statement</p>
            <button> Download</button>
          </li>
        </ul>
      </nav>

      </div>
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

export default MyStatements;