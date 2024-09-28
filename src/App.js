import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; // Import the Navbar
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import SearchBar from './components/SearchBar';
import logo from './assets/images/Food Canvas.jpeg';
import './styles/App.scss';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Header />
      <Navbar /> {/* Add the Navbar here */}
      <div className="app-header">
        <img src={logo} alt="Food Canvas Logo" className="logo" />
        <SearchBar onSearch={handleSearch} />
      </div>
      <Routes>
        <Route path="/" element={<RecipeList searchQuery={searchQuery} />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<AboutUs />} /> {/* Add About Us route */}
        <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
        <Route path="/login" element={<Login />} /> {/* Add Login route */}
        <Route path="/register" element={<Register />} /> {/* Add Register route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
