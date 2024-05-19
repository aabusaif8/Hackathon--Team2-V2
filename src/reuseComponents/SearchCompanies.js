import React from 'react'

function SearchCompanies() {
  return (
    <div id='SearchCompanies'>
      <div className='className=sm:box-content h-auto bg-light-green mx-10 rounded-xl mt-5 text-2xl pt-5 shadow-xl'>
        Search companies to exclude from investments

        {/* Search Bar */}
        <div>
          <input type="search" placeholder="Search" className='form-input mt-12 rounded-full w-64 bg-red-orange border-none drop-shadow-md' />
        </div>

        {/* Exclude Btn */}
        <div className='pb-10'>
          <button className='mt-12 bg-green rounded-full font-bold text-sm py-3 drop-shadow-lg px-12'>Exclude</button>         
        </div>
      </div>

      {/* Back and Proceed Btns */}
      <div className='space-x-12 drop-shadow-xl'>
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

export default SearchCompanies