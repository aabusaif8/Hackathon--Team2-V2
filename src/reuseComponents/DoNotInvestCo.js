import React, { useState } from 'react'

function DoNotInvestCo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='CompaniesToNotInvest'>
      <div className='className=sm:box-content h-auto bg-light-green mx-10 rounded-xl mt-5 text-2xl pt-5 shadow-xl'>
        Are there any companies you do not want to invest your money in?

        {/* Modal */}
        <div className='text-sm mt-8 underline'>
          <a onClick={() => setIsOpen(true)}>Why do you ask?</a>           
            {isOpen ? (
              <>
                <div
                  className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 '
                >
                  <div className='w-auto my-6 max-w-sm'>
                    <div className=' rounded-2xl flex flex-col w-full bg-white'>
                      <div className='p-8 flex-auto'>
                        <p className='my-4 text-lg mb-8'>
                          Why ask about specific companies?
                        </p>
                        <p className='my-4 text-lg'>
                          The money you invest is yours, and while our Investment Assistant tries to match you with
                          financial oppurtinities that benefit you, it does not know what your beliefs and values are.
                          There is a chance that it could suggest investing in a company whose values you disagree with.
                          So we are giving you the abitlity to let our Assostant know what companies you don't want to
                          support so you can rest easy knowing your money is going places you agree with.
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
        
        {/* Btns to slect Companies not interested in */}
        <div className='flex flex-col px-12 pb-10'>
          <button className='mt-12 bg-green rounded-full text-sm py-3 drop-shadow-lg'>Yes</button>
          <button className='mt-5 bg-green rounded-full text-sm py-3 drop-shadow-lg'>No</button>
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

export default DoNotInvestCo