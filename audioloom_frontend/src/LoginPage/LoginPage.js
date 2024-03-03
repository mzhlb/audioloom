import React, { useState } from 'react';
import './LoginPage.css'; // Ensure this CSS file is in the same directory

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle your login logic here
    console.log(username, password);
  };

  const handleCreateAccount = () => {
    // Handle your create account logic here
    // For example, navigate to a registration page or show a registration modal
    console.log('Navigate to create account page');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
        <button type="button" className="create-account-btn" onClick={handleCreateAccount}>Create Account</button>
      </form>
    </div>
  );
};

export default LoginPage;
