import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Import an icon for the dropdown
import '../styles/Navbar.scss';

const Navbar = ({ handleCategoryChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cooking-news">Cooking News</Link></li> {/* Add Cooking News Link */}
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
        </ul>

        {/* Modern dropdown button for categories */}
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            Categories <FaChevronDown className="dropdown-icon" />
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleCategoryChange('Vegetarian')}>Vegetarian</li>
              <li onClick={() => handleCategoryChange('Workout')}>Workout Meals</li>
              <li onClick={() => handleCategoryChange('Desserts')}>Desserts</li>
              {/* Add more categories here if needed */}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

