import React from 'react';

const coreModules = [
  { 
    title: 'Distributed Systems', 
    description: 'Highly available, fault-tolerant architectures built for extreme scale and performance.' 
  },
  { 
    title: 'Quantum Analytics', 
    description: 'Probabilistic modeling and data synthesis using state-of-the-art computational engines.' 
  },
  { 
    title: 'Neural Interfaces', 
    description: 'Advanced UI/UX paradigms designed for seamless human-machine interaction.' 
  }
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Core Architecture</h2>
        <div className="cards">
          {coreModules.map((module, index) => (
            <div key={index} className="card">
              <div className="card-number" style={{
                fontSize: '0.8rem', 
                color: 'var(--accent-color)', 
                marginBottom: '10px',
                fontFamily: 'monospace'
              }}>
                [ 0{index + 1} ]
              </div>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
