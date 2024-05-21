import React from "react";
import dashboard from "../assets/dashboard.png";
import security from "../assets/security.png";
import accounttype from "../assets/accounttype.png";

const AccountFeatures = () => {
  return (
    <div className="bg-[#C5eb9e] py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Have full transparency and control over your portfolio
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex flex-col items-center">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4 mb-2">
              Personal Investment Dashboard
            </h2>
            <p className="text-gray-600 text-center mt-4">
              Get a comprehensive view of your portfolio with real-time updates and detailed analytics.
            </p>
            <img
              src={dashboard}
              alt="Dashboard"
              className="mx-auto max-w-full h-auto"
            />
            
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <div className="flex flex-col items-center mb-8">
        
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4 mb-2">
                Manage Multiple Accounts
              </h2>
              <p className="text-gray-600 text-center">
                Consolidate your savings, retirement, and loan repayment accounts in one place.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={accounttype}
                alt="Account Type"
                className="mx-auto max-w-full h-auto"
              />
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4 mb-2 pt-5 ">
                Secure and Accessible
              </h2>
              <p className="text-gray-600 text-center pb-5 ">
                Enjoy peace of mind with robust security measures and easy access to your information.
              </p>
              <img
                src={security}
                alt="security"
                className="mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountFeatures;