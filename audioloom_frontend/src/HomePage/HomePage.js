import React from 'react';
import LoginPage from '../LoginPage/LoginPage';
import './HomePage.css'; // Make sure to create this CSS file in the same directory

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="app-name">AudioLoom</h1>
      <LoginPage />
    </div>
  );
};

export default HomePage;
