import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const adminCredentials = {
    "admin@email.com": "admin123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminCredentials[username] === password) {
      onLogin();
      navigate('/admin/dashboard'); // Redirect ke dashboard admin
    } else {
      setError('Email atau password salah.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Admin Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Email"
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#4A90E2',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Login
      </button>
    </form>
  );
};

export default LoginAdmin;
