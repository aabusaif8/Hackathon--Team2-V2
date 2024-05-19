const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Want to grow your savings, but dont't know were to start? We'll meet you halfway.</h1>
        
        <div className="hero-image">
        <img src="path/to/hero-image.jpg" alt="Hero" />
      </div>

        <p className="hero-description">
          Start Investing Today with our digital Investment Assistant.
        </p>
        
        <div className="openAccount-cta">
          <button className="openAccount-btn">Open an Account</button>
          <a href="#" className="openAccount-link">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;