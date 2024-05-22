import React, { useState } from 'react'
import EmploymentStatus from '../reuseComponents/EmploymentStatus';

function DOB({ validate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  
  const handleValidation = () => {
    if(!dob) {
      setError('Date of Birth is required');
      return false
    }
    setError('');
    return true;
  }

  validate.current = handleValidation
  
  return (
    <div id='DateOfBirth-Box'>     
      <div className='sm:box-content h-60 bg-light-green mx-10 rounded-xl mt-5 text-2xl pt-5 shadow-xl'>
        What is your Date of Birth?
        
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
                          Why do we ask for your date of birth?
                        </p>
                        <p className='my-4 text-lg'>
                          First, to verify that you are a real person and that you are old enough to sign up
                          for our services. Inputting your birthday also allows us to verify your identity
                          and report any taxable income you receive through investing to the IRS.
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

          {/* DOB input section */}
          <div>
            <input 
            type="date" 
            value={dob} 
            onChange={(e) => setDob(e.target.value)} 
            className='form-input mt-12 rounded-xl w-56 bg-light-green'
            />
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>


    </div>
  )
}

export default DOB