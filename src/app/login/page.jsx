'use client';
import React, { useState } from 'react';
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can implement authentication logic here
    // For simplicity, we're just logging the credentials for now
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>       <h2 className='heading'>Book your Table!</h2>
    <div className="login-container">

      <form className="login-form">
        <label htmlFor="username"> <h4> Username: </h4> </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password"> <h4> Password: </h4> </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
