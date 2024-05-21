import React from 'react';
import DOB from '../reuseComponents/DOB';
import EmploymentStatus from '../reuseComponents/EmploymentStatus';
import YearlyIncome from '../reuseComponents/YearlyIncome';
import SSN from '../reuseComponents/SSN';
import BankAccount from '../reuseComponents/BankAccount';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ManualInvestment() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">Account Setup: Manual Investment</h1>
          </div>
          <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <DOB />
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <EmploymentStatus />
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <YearlyIncome />
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <SSN />
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <BankAccount />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ManualInvestment;