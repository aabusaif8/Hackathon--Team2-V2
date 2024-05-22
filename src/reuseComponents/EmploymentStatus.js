import React, {useState } from 'react'

function EmploymentStatus() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='EmploymentStatus'>
      <div className='className=sm:box-content h-auto bg-light-green mx-10 rounded-xl mt-5 text-2xl pt-5 shadow-xl'>
        What is your current Employment Status?

        {/* Modal */}
        <div className='text-sm mt-8 underline'>
          <a onClick={() => setIsOpen(true)}>Why do we ask?</a>             
            {isOpen ? (
              <>
                <div
                  className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 '
                >
                  <div className='w-auto my-6 max-w-sm'>
                    <div className=' rounded-2xl flex flex-col w-full bg-white'>
                      <div className='p-8 flex-auto'>
                        <p className='my-4 text-lg mb-8'>
                          Why do we ask for your employment status?
                        </p>
                        <p className='my-4 text-lg'>
                          Knowing your employer status allows us to accurately report your taxable
                          income to the IRS when tax season rolls around.
                        </p>
                      </div>

                      <div>
                        <button
                          className='bg-green text-white text-sm py-3 px-12 rounded-full mb-10 drop-shadow-lg'
                          type='button'
                          onClick={() => setIsOpen(false)}
                        >
                          Close
                        </button>                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className='opacity-40 fixed inset-0 z-40 bg-black'></div>
              </>
            ) : null}
        </div>
        
        {/* Btns to select Employment Status */}
        <div className='flex flex-col px-12 pb-10'>
          <button className='mt-12 bg-green rounded-full text-sm py-3 drop-shadow-lg'>Unemployed</button>
          <button className='mt-5 bg-green rounded-full text-sm py-3 drop-shadow-lg'>Self-Employed</button>
          <button className='mt-5 bg-green rounded-full text-sm py-3 drop-shadow-lg'>Part-Time</button>
          <button className='mt-5 bg-green rounded-full text-sm py-3 drop-shadow-lg'>Full-Time</button>
          <button className='mt-5 bg-green rounded-full text-sm py-3 drop-shadow-lg'>Student</button>
          <button className='mt-5 bg-green rounded-full text-sm py-3 drop-shadow-lg'>Unemployed</button>
        </div>
      </div>

     
    </div>
  )
}

export default EmploymentStatus