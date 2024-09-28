// src/components/AboutUs.js
import React from 'react';
import '../styles/AboutUs.scss'; // Create a new SCSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to Food Canvas! We are passionate about bringing you delicious and healthy recipes 
        that fit your lifestyle. Whether you're looking for vegetarian options, meals for your 
        workout regimen, or simply want to explore new flavors, we have something for everyone.
      </p>
      <p>
        Our mission is to inspire home cooks and food enthusiasts to try new recipes, discover 
        nutritious ingredients, and enjoy cooking at home. We believe that cooking should be fun, 
        accessible, and rewarding.
      </p>
      <p>
        Join us on this culinary journey, and let’s make cooking an enjoyable experience together!
      </p>
      <h2>Our Team</h2>
      <p>
        We are a team of food lovers, chefs, and nutritionists dedicated to creating a vibrant 
        community around cooking and healthy eating. 
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback, feel free to reach out to us at 
        <a href="mailto:contact@foodcanvas.com"> contact@foodcanvas.com</a>.
      </p>
    </div>
  );
};

export default AboutUs;
