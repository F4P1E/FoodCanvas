// Footer.js
import React from 'react';
import '../styles/Footer.scss';
// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Food Canvas. All rights reserved.</p>
      </div>
      <div className="social-icons">
        {/* Add social media icons or links here if needed */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;