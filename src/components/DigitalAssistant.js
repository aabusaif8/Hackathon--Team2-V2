import React from 'react';

const DigitalAssistant = () => {
    return (
        <div className="digitalAssistant">
          <div className="digitalAssistant-content">
            <h1 className="digitalAssistant-title">New to investing? Let our Digital Investment Assistant help!</h1>
            
            <div className="digitalAssistant-image">
            <img src="path/to/digitalAssistant-image.jpg" alt="digitalAssistant" />
            <p className="digitalAssistant-description">
              Let us know the amount you want to invest, how often, and the kind of growth you're looking for.
            </p>
          </div>


            <div className="digitalAssistant2-image">
            <img src="path/to/digitalAssistant2-image.jpg" alt="digitalAssistant2" />
            <p className="digitalAssistant2-description">
              Our digital assistant will generate portfolios based on your answers, and you pick the one thats right for you.
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

export default DigitalAssistant;