import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

  const handleLogout = () => {
    onLogout(); // Hapus status login
    navigate('/login'); // Arahkan langsung ke halaman login
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Sneakerskick</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/new-arrival" style={styles.navLink}>New Arrival</Link>
        <Link to="/best-collection" style={styles.navLink}>Best Collection</Link>
        <Link to="/about" style={styles.navLink}>About</Link>
      </nav>
      <div style={styles.iconSection}>
        {isLoggedIn ? (
          <>
            <Link to="/favourites" style={styles.icon}>❤️</Link>
            <Link to="/cart" style={styles.icon}>🛒</Link>
            <Link to="/profile" style={styles.icon}>👤</Link>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </>
        ) : (
          <Link to="/login" style={styles.loginLink}>Login</Link>
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#333',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '1em',
    transition: 'color 0.3s',
  },
  iconSection: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  icon: {
    fontSize: '1.5em',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  logoutButton: {
    backgroundColor: '#FF4D4D',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  },
  loginLink: {
    fontSize: '1em',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Header;
