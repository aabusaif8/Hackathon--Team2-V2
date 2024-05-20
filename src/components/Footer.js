import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="flex flex-col min-h-[10vh]">
      <main className="flex-grow">
        {/* Your main content goes here */}
      </main>
      <footer className="footer bg-[#97db51] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex justify-center mb-4 h-20">
                <img src={logo} alt="Logo" />
              </div>
              <p className="text-lg font-semibold text-white m-3 mb-2">
                We are a team of passionate developers dedicated to creating innovative financial solutions.
              </p>
            </div>
            <div>
              <h4 className="m-3 font-bold text-black">Quick Links</h4>
              <ul className="font-semibold text-white m-3 mb-2">
                <li><a href="./">Home</a></li>
                <li><a href="/manual-investment">Manual Investment</a></li>
                <li><a href="#">Account Features</a></li>
                <li><a href="/learning-resources">Learning Resources</a></li>
                <li><a href="/about-us">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="m-3 font-bold text-black">Contact Us</h4>
              <ul className="font-semibold text-white m-3 mb-2">
                <li>
                  <i className="fas fa-map-marker-alt"></i> 123 Main Street, City, State
                </li>
                <li>
                  <i className="fas fa-phone"></i> (123) 456-7890
                </li>
                <li>
                  <i className="fas fa-envelope"></i> info@Monarch.com
                </li>
              </ul>
              <div className="footer-social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="footer-copyright">
                &copy; {new Date().getFullYear()} Monarch. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;