import React from 'react'
import { Link } from 'react-router-dom'

function TermsAndCond() {
  return (
    <div>
      <div>
        <Link to="/:userId/ready-to-invest">
        <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
        </Link>
      </div>
      <div className='text-center mb-10 mt-10 px-10'>
        <h1 className='text-3xl font-semibold'>First, Please Read and agree to our Terms and Conditions</h1>
      </div>

      <div className='text-left mb-10 mt-10 px-10 font-medium'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut tristique
        et. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget.
        Vitae elementum curabitur vitae nunc sed. Sed elementum tempus egestas sed sed.
        Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.
        Odio facilisis mauris sit amet. A iaculis at erat pellentesque. Nulla porttitor
        massa id neque aliquam vestibulum morbi. Facilisis gravida neque convallis a. Diam vulputate
        ut pharetra sit amet. Amet porttitor eget dolor morbi non arcu risus quis varius.
        Lobortis feugiat vivamus at augue eget arcu. Integer feugiat scelerisque varius morbi enim.
        Sit amet consectetur adipiscing elit duis tristique. Dolor purus non enim praesent. 
        Augue ut lectus arcu bibendum at.
        </p>
      </div>

      <div className='text-left mb-10 mt-10 px-10 font-medium'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut tristique
        et. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget.
        Vitae elementum curabitur vitae nunc sed. Sed elementum tempus egestas sed sed.
        Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.
        Odio facilisis mauris sit amet. A iaculis at erat pellentesque. Nulla porttitor
        massa id neque aliquam vestibulum morbi. Facilisis gravida neque convallis a. Diam vulputate
        ut pharetra sit amet. Amet porttitor eget dolor morbi non arcu risus quis varius.
        Lobortis feugiat vivamus at augue eget arcu. Integer feugiat scelerisque varius morbi enim.
        Sit amet consectetur adipiscing elit duis tristique. Dolor purus non enim praesent. 
        Augue ut lectus arcu bibendum at.
        </p>
      </div>

      <div className='flex justify-center items-center px-12 font-semibold text-lg'>
        <input type='checkbox' className='form-checkbox'/>
        <h6 className='pl-5'>I have read and agree to the Terms and Conditions</h6>
      </div>

      <div className='space-x-12 drop-shadow-xl text-center pb-12'> 
        <Link to="/:userId/choose-account-type">
        <button className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-12 font-normal mx-auto'>
          Proceed
        </button>
        </Link>
      </div>
    </div>
  )
}

export default TermsAndCond