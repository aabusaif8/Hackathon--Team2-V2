const DashboardPreview = () => {
    return (
      <div className="DashboardPreview">
        <div className="DashboardPreview-content">
          <h1 className="DashboardPreview-title">Have full transparency and control over your portfolio with your personal investment dashboard</h1>
          
          <div className="DashboardPreview-image">
          <img src="path/to/DashboardPreview-image.jpg" alt="Analysis" />
          <p className="DashboardPreview-description">
            View your investment performance history, upcoming deposits, and account balances
          </p>
        </div>

          <div className="DashboardPreview2-image">
          <img src="path/to/DashboardPreview2-image.jpg" alt="Analysis" />
          <p className="DashboardPreview2-description">
            Manage a variety of accounts including savings, retirement, and loan repayment to fulfill all of your financial goals
          </p>
        </div>

          <div className="DashboardPreview3-image">
          <img src="path/to/DashboardPreview3-image.jpg" alt="Analysis" />
          <p className="DashboardPreview3-description">
            Rest easy knowing that your information is secure and accessible to you through verification processes.
          </p>
        </div>
  
          

          <div className="openAccount-cta">
            <button className="openAccount-btn">Open an Account</button>
            <a href="#" className="openAccount-link">Learn More</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardPreview;
