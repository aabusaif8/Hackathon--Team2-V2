import React, { useState } from 'react'

function InvestmentRiskTolerance() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleClick = (status) => {
    setSelectedStatus(status)
  }

  const btnClasses = (status) =>
    selectedStatus === status 
  ? 'bg-dark-green' : 'bg-green'

  return (
    <div id='InvestmentRisk'>
      <div className='className=sm:box-content h-auto bg-light-green mx-10 rounded-xl mt-5 text-2xl pt-5 shadow-xl'>
        What is your Investment Risk Tolerance?

        {/* Modal */}
        <div className='text-sm mt-8 underline'>
          <a onClick={() => setIsOpen(true)}>What is that?</a>           
            {isOpen ? (
              <>
                <div
                  className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 '
                >
                  <div className='w-auto my-6 max-w-sm'>
                    <div className=' rounded-2xl flex flex-col w-full bg-white'>
                      <div className='p-8 flex-auto'>
                        <p className='my-4 text-lg mb-8'>
                          What is risk tolerance?
                        </p>
                        <p className='my-4 text-lg'>
                          Simply put, it is how comfortable you are taking on risk of loss
                          in order to gain more returns on your inestment quicker. Agressive investors
                          tend to grow their account rapidly, but they run a much higher risk of losing
                          large amounts due to market shifts. Conservative investors grow at a slower
                          rate, but they run a far smaller chance of losing the money that they have
                          invested.
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

        {/* Btns to select Risk */}
        <div className='flex flex-col px-12 pb-10'>
        <button 
          onClick={() => handleClick('1')} 
          className={`mt-12 rounded-full text-sm py-3 drop-shadow-lg ${btnClasses('1')}`}
          >Conservative</button>
          <button 
          onClick={() => handleClick('2')} 
          className={`mt-5 rounded-full text-sm py-3 drop-shadow-lg ${btnClasses('2')}`}
          >Moderate</button>
          <button 
          onClick={() => handleClick('3')} 
          className={`mt-5 rounded-full text-sm py-3 drop-shadow-lg ${btnClasses('3')}`}
          >Aggresive</button>
        </div>
      </div>

      

    </div>
  )
}

export default InvestmentRiskTolerance