import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/images/Food Canvas.jpeg'; // Ensure this path is correct
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Food Canvas Logo" className="header-logo" />
        <h1 className="header-title">Food Canvas</h1>
        <ThemeToggle /> {/* Include the ThemeToggle button here */}
      </div>
    </header>
  );
};

export default Header;
