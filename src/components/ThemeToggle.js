// ThemeToggle.js
import React from "react";
import { ReactComponent as Sun } from "../assets/DarkLightMode/Sun.svg";
import { ReactComponent as Moon } from "../assets/DarkLightMode/Moon.svg";
import { useTheme } from "../context/ThemeContext"; // Import the useTheme hook
import "../styles/DarkMode.scss";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme(); // Get the theme and toggleTheme function from context

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                checked={theme === 'dark'} // Check if the current theme is dark
                onChange={toggleTheme} // Toggle the theme on change
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default ThemeToggle;
