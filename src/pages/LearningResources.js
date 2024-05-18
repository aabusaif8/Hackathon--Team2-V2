import React from 'react'

function LearningResources() {
  return (
    <div className='justify-content-center'>
      <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
      <div className="text-center font-semibold text-4xl mt-5">
        Learning Resources
        <p className='text-lg mt-8'>Browse our collection of curated investment resources</p>
      </div>

      <div className=''>
        <input type="search" className='form-input mt-12 rounded-full w-64 bg-red-orange border-none drop-shadow-md'/>
      </div>
    </div>
  )
}

export default LearningResources