import React, { useState } from 'react';

const EditPersonalInfo = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const handleEditEmail = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setNewEmail('');
    setConfirmEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Email:', newEmail);
    console.log('Confirm Email:', confirmEmail);
    handleClosePopup();
  };

  return (
    <div className="max-w-md mx-auto  ">
      <div className="bg-light-green rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <h3 className='mb-5'>Name: </h3>
        <h3 className='mb-5'>Date of Birth: </h3>
        <h3 className='mb-5'>Email: </h3>
        <h3 className='mb-5'>SSN: </h3>
        <button
          className="bg-dark-green flex justify-center text-white font-bold py-2 px-4 rounded "
          onClick={handleEditEmail}
        >
          Edit Email Address
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Edit Email Address</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="newEmail" className="block font-semibold mb-1">
                  New Email Address
                </label>
                <input
                  type="email"
                  id="newEmail"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmEmail" className="block font-semibold mb-1">
                  Confirm Email Address
                </label>
                <input
                  type="email"
                  id="confirmEmail"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
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
                  className="bg-dark-green text-white font-bold py-2 px-4 rounded"
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

export default EditPersonalInfo;