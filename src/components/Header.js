import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/images/Food Canvas.jpeg'; // Update the path to your logo

const Header = () => {
  return (
    <header className='header'>
    <div className="header-content">
        <h1 className='header-title'>Food Canvas</h1>
      <img src={logo} alt="Food Canvas Logo" />
    </div>
    </header>
  );
};

export default Header;
