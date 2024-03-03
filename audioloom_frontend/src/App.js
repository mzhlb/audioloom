import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage'; // Ensure you have this component
import SearchPage from './SearchPage/SearchPage'; // Ensure you have this component
import ProfilePage from './ProfilePage/ProfilePage' // Ensure you have this component
import './App.css'; // For styling

function App() {
  return (
    <Router>
      <div className="navigation">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/search" className="nav-link">Search</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
