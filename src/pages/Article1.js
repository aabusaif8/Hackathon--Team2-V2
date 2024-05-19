import React from 'react'
import { Link } from 'react-router-dom'
import Pic from "../images/rafiki.png"

function Article1() {
  return (
    <div>
      <div className='sm:box-content h-38 bg-light-green rounded-xl pt-5 shadow-xl'>
        <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
        <img src={Pic} className='mx-20'/>
      </div>

      <div className='pt-5'>
        <h1 className='text-4xl font-bold pt-5 pl-5'>Investing 101</h1>
        <h2 className='text-3xl font-semibold pt-5 pl-5'>How You Can Make the Most of Your Money</h2>
        <p className='pt-5 pl-5'>Author</p>
      </div>

      <div className='pl-5 pt-8'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className='pl-5 pt-8'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className='space-x-12 drop-shadow-xl text-center pb-12'>
        <Link to="/learning-resources">
          <button className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-12 font-normal mx-auto'>
            Return to Articles
          </button>
        </Link>
      </div> 

    </div>
  )
}

export default Article1