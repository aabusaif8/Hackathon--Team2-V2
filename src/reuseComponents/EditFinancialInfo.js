import React, { useState } from 'react';

const LinkNewAccount = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handleEditFinancialInfo = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setBankName('');
    setAccountNumber('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Bank Name:', bankName);
    console.log('Account Number:', accountNumber);
    handleClosePopup();
  };

  return (
    <div className="max-w-md mx-auto pt-8">
      <div className="bg-light-green rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Financial Information</h2>
        
        <h3>Employment Status:</h3>
        <h3 className='mt-5 mb-5'>Annual Income:</h3>
        <button
          className="bg-dark-green text-white font-bold py-2 px-4 rounded"
          onClick={handleEditFinancialInfo}
        >
          Update
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-light-green rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Update</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="bankName" className="block font-semibold mb-1">
                  Bank Name
                </label>
                <input
                  type="text"
                  id="bankName"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="accountNumber" className="block font-semibold mb-1">
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={handleClosePopup}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-dark-green  text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkNewAccount;