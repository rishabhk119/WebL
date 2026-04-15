import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">ORACLE <span style={{opacity: 0.5}}>v4</span></div>
      <nav>
        <a href="#hero">Genesis</a>
        <a href="#services">Architecture</a>
        <a href="#contact">Terminal</a>
      </nav>
    </header>
  );
}

export default Header;
