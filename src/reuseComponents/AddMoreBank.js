import React from 'react';

function AddMoreBank({ userId }) {
  const redirectToDashboard = () => {
    // Redirect the user to their dashboard
    console.log(userId)
    window.location.href = `http://localhost:3000/${userId}/dashboard`;
  };

  return (
    <div>
      <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
      <div className="text-center font-semibold text-4xl mt-5">
        <h1>Account Setup: Investment Assistant</h1>       
      </div>

      <div className='className=sm:box-content h-auto bg-light-green mx-10 rounded-xl mt-10 pt-5 shadow-xl'>
        <h3 className='text-2xl font-medium text-center px-2'>You already have a bank account linked to your profile. Use this bank account?</h3>

        <div className='flex flex-col px-12 pb-10'>
          <button className='mt-12 bg-green rounded-full text-sm py-3 drop-shadow-lg'>Yes</button>
          <button className='mt-5 bg-green rounded-full text-sm py-3 drop-shadow-lg'>Link New Account</button>
        </div>
      </div>

      <div className='space-x-12 drop-shadow-xl text-center mt-5'>
        <button className='bg-dark-green text-white text-sm py-3 px-12 rounded-full mt-8 font-normal'>
          Go Back
        </button>
        <button onClick={redirectToDashboard}>Complete Setup</button>
      </div>
    </div>
  );
}

export default AddMoreBank;
