import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AskToUseInvestAssist() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleYes = () => {
    navigate("/investment-assistant")
  }

  const handleNo = () => {
    navigate("/manual-investment")
  }

  return (
    <div>
      <Navbar />
        <Link to="/standard-account">
        <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
        </Link>

        <div className="text-center font-semibold text-4xl mt-5">
        <h1>Account Setup: Investment Assistant</h1> 

        <div className='className=sm:box-content h-auto bg-light-green mx-10 rounded-xl my-10 text-2xl pt-5 shadow-xl'>
          <h3>Would you like to create your account portfolio using our Investment Assistant?</h3>

          {/* Modal */}
          <div className='text-sm mt-8 underline'>
            <a onClick={() => setIsOpen(true)}>Tell me more</a>             
              {isOpen ? (
                <>
                  <div
                    className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 '
                  >
                    <div className='w-auto my-6 max-w-sm'>
                      <div className=' rounded-2xl flex flex-col w-full bg-white'>
                        <div className='p-8 flex-auto'>
                          
                          <p className='my-4 text-lg'>
                            Our Investment Assistant makes investing on your terms easier then ever.
                            You input some information about yourself, what level of risk you want to take while investing
                            , how much you want to invest and how often, and any companies you don't want to invest in.
                            Then our Investment Assistant - or should we say YOUR Investment Assistant - generates a few
                            portfolios for you based on those answers, and you get to choose the one that feels right.                          
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

          <div className='flex flex-col px-12 pb-10'>
            <button onClick={handleYes} className='mt-12 bg-green rounded-full text-sm py-3 drop-shadow-lg'>Yes</button>
            <button onClick={handleNo} className='mt-5 bg-green rounded-full text-sm py-3 drop-shadow-lg'>No</button>
            
          </div>

        </div>

    

        </div>
        <Footer />
    </div>

    
  )
}

export default AskToUseInvestAssist