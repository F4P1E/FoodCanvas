import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../styles/AboutUs.scss';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <img
        src="https://i.pinimg.com/originals/bd/96/b0/bd96b09a1ecec85753243e4373e1ca66.jpg" // Replace with actual image URL
        alt="About Us"
        className="about-image"
      />
      <p className="about-text">
        Welcome to our platform! We are dedicated to helping you find the best recipes from around the world. 
        Our goal is to create a community where food lovers can share, discover, and enjoy the art of cooking.
        Whether you're a seasoned chef or a kitchen beginner, we have something for everyone.
      </p>
      {/* Link the button to the Contact page */}
      <Link to="/contact">
        <button className="about-cta-button">Learn More</button>
      </Link>
    </div>
  );
};

export default About;
