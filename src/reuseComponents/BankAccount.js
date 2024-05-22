import React, { useState } from 'react'

function BankAccount({ validate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [bankAccount, setBankAccount] = useState('');
  const [routing, setRouting] = useState('');
  const [error, setError] = useState('');
  
  const handleValidation = () => {
    if(!bankAccount && !routing) {
      setError('Bank Account is required') &&
      setRouting('Routing Number is required')
      return false
    }
    setError('');
    return true;
  }

  validate.current = handleValidation

  return (
    <div id='BankAccountInfo'>
      <div className='className=sm:box-content h-auto bg-light-green mx-10 rounded-xl mt-5 text-2xl pt-5 shadow-xl'>
        Link the primary bank account that you will use for deposits

        {/* Modal */}
        <div className='text-sm mt-8 underline'>
          <a onClick={() => setIsOpen(true)}>Why do we need this?</a>          
            {isOpen ? (
              <>
                <div
                  className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 '
                >
                  <div className='w-auto my-6 max-w-sm'>
                    <div className=' rounded-2xl flex flex-col w-full bg-white'>
                      <div className='p-8 flex-auto'>
                        <p className='my-4 text-lg mb-8'>
                          Why do we ask for your bank account information?
                        </p>
                        <p className='my-4 text-lg'>
                          By linking directly to your bank. We can ensure that all deposits are completed
                          securely and that all money goes exactly where it needs to be
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

        {/* 2nd Modal */}
        <div className='text-sm mt-8 underline'>
          <a onClick={() => setIsOpen(true)}>Is this secure?</a>           
            {isOpen ? (
              <>
                <div
                  className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 '
                >
                  <div className='w-auto my-6 max-w-sm'>
                    <div className=' rounded-2xl flex flex-col w-full bg-white'>
                      <div className='p-8 flex-auto'>
                        <p className='my-4 text-lg mb-8'>
                          Is it safe to give us your bank account information?
                        </p>
                        <p className='my-4 text-lg'>
                          We take security and privacy very seriously. All personal information, including your bank account
                          information, are protected by our encrypted servers and two step verification process when logging
                          into your account from unfamiliar devices.
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

        {/* Inputs for bank account info */}
        <div className='pb-10'>
          <input 
          type="number" 
          placeholder="Routing Number"
          className='form-input mt-12 rounded-xl w-56 bg-light-green'
          value={bankAccount} 
          onChange={(e) => setBankAccount(e.target.value)}
          />
          <input 
          type="number" 
          placeholder="Account Number"
          className='form-input mt-6 rounded-xl w-56 bg-light-green'
          value={routing} 
          onChange={(e) => setRouting(e.target.value)}
          />
          {error && <p>{error}</p>}
        </div>
      </div>

    </div>
  )
}

export default BankAccount