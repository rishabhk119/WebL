import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="footer-left">
        &copy; {currentYear} ORACLE SYSTEMS. ALL RIGHTS RESERVED.
      </div>
      <div className="socials">
        <a href="#github">[ GITHUB ]</a>
        <a href="#twitter">[ TWITTER ]</a>
        <a href="#linkedin">[ LINKEDIN ]</a>
      </div>
    </footer>
  );
}

export default Footer;
