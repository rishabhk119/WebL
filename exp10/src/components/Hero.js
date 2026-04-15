import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-glow"></div>
      <div className="container">
        <h1>Synthesize The <br /><span style={{color: 'var(--accent-color)'}}>Next Reality</span></h1>
        <p>
          Accelerating development through component-based architecture and 
          probabilistic decision engines. Experience the future of SPAs.
        </p>
        <a href="#contact" className="btn-primary">Initialize Contact</a>
      </div>
    </section>
  );
}

export default Hero;
