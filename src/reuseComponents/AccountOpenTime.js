import React, { useState} from 'react'

function AccountOpenTime() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleClick = (status) => {
    setSelectedStatus(status)
  }

  const btnClasses = (status) =>
    selectedStatus === status 
  ? 'bg-dark-green' : 'bg-green'

  return (
    <div id='AccountOpenDuration'>
      <div className='className=sm:box-content h-auto bg-light-green mx-10 rounded-xl mt-5 text-2xl pt-5 shadow-xl'>
        How long do you plan on keeping this account open before liquidating it?

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
                          Why do we ask how long you plan to keep your account open?
                        </p>
                        <p className='my-4 text-lg'>
                          Different types of investments mature at different rates, so letting us know 
                          your timeline helps our Investment Assistant choose the right mix of investments for you.
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

        {/* Btns to select Account Open Duration */}
        <div className='flex flex-col px-12 pb-10'>
        <button 
          onClick={() => handleClick('1')} 
          className={`mt-12 rounded-full text-sm py-3 drop-shadow-lg ${btnClasses('1')}`}
          >Less than 5 years</button>
          <button 
          onClick={() => handleClick('2')} 
          className={`mt-5 rounded-full text-sm py-3 drop-shadow-lg ${btnClasses('2')}`}
          >5-10 years</button>
          <button 
          onClick={() => handleClick('3')} 
          className={`mt-5 rounded-full text-sm py-3 drop-shadow-lg ${btnClasses('3')}`}
          >11-20 years</button>
          <button 
          onClick={() => handleClick('4')} 
          className={`mt-5 rounded-full text-sm py-3 drop-shadow-lg ${btnClasses('4')}`}
          >More than 20 years</button>
        </div>
      </div>

      

    </div>
  )
}

export default AccountOpenTime