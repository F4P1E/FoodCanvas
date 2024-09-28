import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { KindeProvider, useKindeAuth } from "@kinde-oss/kinde-auth-react";

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import CookingNews from './components/CookingNews'; // Import the CookingNews component
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import SearchBar from './components/SearchBar';
import logo from './assets/images/Food Canvas.jpeg';
import './styles/App.scss';

// ProtectedRoute component to check authentication
const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useKindeAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <KindeProvider
      clientId="10d366f2a32043dd84407fcf74b419d2"
      domain="https://foodcanvas.kinde.com"
      redirectUri="http://localhost:3000"
      logoutUri="http://localhost:3000"
    >
      <Router>
        <Header />
        <Navbar />
        <div className="app-header">
          <img src={logo} alt="Food Canvas Logo" className="logo" />
          <SearchBar onSearch={handleSearch} />
        </div>
        <Routes>
          <Route path="/" element={<RecipeList searchQuery={searchQuery} />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/cooking-news" element={<CookingNews />} /> {/* Add Cooking News route */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        </Routes>
        <Footer />
      </Router>
    </KindeProvider>
  );
};

export default App;
