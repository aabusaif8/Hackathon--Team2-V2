import React, { useState } from 'react'

function InvestmentFrequency() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div id='InvestmentFrequency'>
      <div className='className=sm:box-content h-auto bg-light-green mx-10 rounded-xl mt-5 text-2xl pt-5 shadow-xl'>
        How much do you want to invest and how often?

        {/* Drop Downs */}
        <div className="px-12 mt-5 pb-10">
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="w-full bg-green border-none py-3 px-4 pr-8 rounded-full underline"
          >
            <option value="">Investment Amount</option>
            <option value="$50">$50</option>
            <option value="$100">$100</option>
            <option value="$200">$200</option>
            <option value="$500">$500</option>
            <option value="$1000">$1000</option>
          </select>
          
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="w-full bg-green border-none py-3 px-4 pr-8 rounded-full underline mt-5"
          >
            <option value="">Frequency</option>
            <option value="Every Week">Every Week</option>
            <option value="Every Two Weeks">Every Two Weeks</option>
            <option value="Every Month">Every Month</option>
            <option value="Every Quarter">Every Quarter</option>
          </select>
        </div>
      </div>

      
    </div>
  )
}

export default InvestmentFrequency