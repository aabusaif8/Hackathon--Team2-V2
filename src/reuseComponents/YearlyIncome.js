import React, { useState } from 'react'

function YearlyIncome() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleClick = (status) => {
    setSelectedStatus(status)
  }

  const btnClasses = (status) =>
    selectedStatus === status 
  ? 'bg-dark-green' : 'bg-green'

  return (
    <div id='AnnualIncome'>
      <div className='className=sm:box-content h-auto bg-light-green mx-10 rounded-xl mt-5 text-2xl pt-5 shadow-xl'>
        What is your annual income?

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
                          Why do we ask for your annual income?
                        </p>
                        <p className='my-4 text-lg'>
                          Knowing your income allows us to accurately report your taxable
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

        {/* Btns to select Annual Income */}
        <div className='flex flex-col px-12 pb-10'>
          <button 
          onClick={() => handleClick('1')} 
          className={`mt-12 rounded-full text-sm py-3 drop-shadow-lg ${btnClasses('1')}`}
          >Less than $10,000</button>
          <button 
          onClick={() => handleClick('2')} 
          className={`mt-5 rounded-full text-sm py-3 drop-shadow-lg ${btnClasses('2')}`}
          >$10,000-$49,999</button>
          <button 
          onClick={() => handleClick('3')} 
          className={`mt-5 rounded-full text-sm py-3 drop-shadow-lg ${btnClasses('3')}`}
          >$50,000-$74,999</button>
          <button 
          onClick={() => handleClick('4')} 
          className={`mt-5 rounded-full text-sm py-3 drop-shadow-lg ${btnClasses('4')}`}
          >$75,000-$99,000</button>
          <button 
          onClick={() => handleClick('5')} 
          className={`mt-5 rounded-full text-sm py-3 drop-shadow-lg ${btnClasses('5')}`}
          >$100,000-$199,000</button>
          <button 
          onClick={() => handleClick('6')} 
          className={`mt-5 rounded-full text-sm py-3 drop-shadow-lg ${btnClasses('6')}`}
          >$200,000+</button>
        </div>
      </div>
    

    </div>
  )
}

export default YearlyIncome