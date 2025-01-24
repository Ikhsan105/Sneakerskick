import React from 'react';

const AdminHeader = ({ onLogout }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Admin Panel</h1>
      <button
        style={styles.logoutButton}
        onClick={onLogout} // Memanggil fungsi logout
      >
        Logout
      </button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#4A90E2',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: '8px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default AdminHeader;
