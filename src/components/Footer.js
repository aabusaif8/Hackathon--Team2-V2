import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-logo">
              <img src="path/to/logo.png" alt="Logo" />
            </div>
            <p className="footer-description">
              We are a team of passionate developers dedicated to creating innovative financial solutions.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Digital Assistant</a></li>
              <li><a href="#">Analysis</a></li>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Learn</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
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
  );
};

export default Footer;