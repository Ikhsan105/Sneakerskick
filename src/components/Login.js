import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundWrapper from './Login/BackgroundWrapper';
import Button from './Login/Button';
import InputField from './Login/InputField';
import Remember from './Login/Remember';
import Ikonlogin from './Login/Ikonlogin';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  // Kredensial admin dan user
  const adminCredentials = {
    "admin@example.com": "admin123",
  };

  const registeredUsers = {
    "rioga@email.com": "123",
    "ikhsan@email.com": "4",
    "subkhan@email.com": "789",
  };

  // Redirect jika sudah login
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      navigate('/admin/AdminDashboard');
    } else if (role === 'user') {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();

    if (!trimmedUsername || !password) {
      setError('Semua field harus diisi.');
      return;
    }

    // Cek login admin
    if (adminCredentials[trimmedUsername]) {
      if (adminCredentials[trimmedUsername] !== password) {
        setError('Password admin salah.');
        return;
      }
      onLogin('admin'); // Login sebagai admin
      navigate('/admin/AdminDashboard');
      return;
    }

    // Cek login user
    if (registeredUsers[trimmedUsername]) {
      if (registeredUsers[trimmedUsername] !== password) {
        setError('Password user salah.');
        return;
      }
      onLogin('user'); // Login sebagai user
      navigate('/');
      return;
    }

    setError('Email tidak terdaftar.');
  };

  return (
    <BackgroundWrapper>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ marginBottom: '20px', color: '#333', fontSize: '24px' }}>Login</h2>

        <InputField
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Wrapper untuk Password Input dan Tombol Show/Hide */}
        <div style={{ position: 'relative', width: '100%' }}>
          <InputField
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#007BFF',
              fontSize: '14px',
            }}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#ffdddd',
            color: '#d8000c',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '10px',
          }}>
            {error}
          </div>
        )}

        <Remember rememberMe={rememberMe} setRememberMe={setRememberMe} />

        <Button onClick={handleSubmit}>Masuk</Button>

        {/* Tambahkan Ikon Login Sosial */}
        <p style={{ margin: '20px 0', color: '#666', fontSize: '14px' }}>Or log in with</p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Ikonlogin
            platform="Google"
            iconUrl="https://img.icons8.com/color/48/000000/google-logo.png"
          />
          <Ikonlogin
            platform="Facebook"
            iconUrl="https://img.icons8.com/color/48/000000/facebook.png"
          />
          <Ikonlogin
            platform="Twitter"
            iconUrl="https://img.icons8.com/color/48/000000/twitter--v1.png"
          />
          <Ikonlogin
            platform="Apple"
            iconUrl="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
          />
        </div>
      </div>
    </BackgroundWrapper>
  );
}

export default Login;
