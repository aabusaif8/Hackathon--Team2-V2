import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Monarch</a>
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Log In/Sign Up</a>
          </li>
          <li>
            <a href="/services">Investment Assistant</a>
          </li>
          <li>
            <a href="/contact">Manual Investment</a>
          </li>
          <li>
            <a href="/contact">Dashboard Overview</a>
          </li>
          <li>
            <a href="/contact">Learning Resources</a>
          </li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;