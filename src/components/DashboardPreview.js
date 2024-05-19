import React from "react";
import dashboard from "../assets/dashboard.png"
import coinflower from "../assets/coinflower.png"
import accounttype from "../assets/accounttype.png"

const DashboardPreview = () => {
    return (
      <div className="bg-[#C5eb9e]">
        <div className="">
          <h1 className="flex justify-center px-5 py-10 text-semibold text-2xl">Have full transparency and control over your portfolio with your personal investment dashboard</h1>
          
          <div className=" flex justify-center px-5 py-5">
          <img src={dashboard} alt="Analysis" />
          </div>
        </div>

        <div className="flex justify-center px-5 py-5 w-full">
          <img src={coinflower} alt="Analysis" />
        </div>

        <p className="flex justify-center px-5 py-10 text-semibold text-2xl">
            Manage a variety of accounts including savings, retirement, and loan repayment to fulfill all of your financial goals
          </p>

          <div className="flex justify-center px-5 py-5">
          <img src={accounttype} alt="Account type" />
          </div>

          <p className="flex justify-center px-5 py-10 text-semibold text-2xl">
            Rest easy knowing that your information is secure and accessible to you through verification processes.
          </p>
        </div>
    );
  };
  
  export default DashboardPreview;
