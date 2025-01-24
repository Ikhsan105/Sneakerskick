import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <nav style={styles.nav}>
        <Link to="/admin/dashboard" style={styles.link}>
          <div style={styles.iconContainer}>
            🏠
          </div>
          <span style={styles.text}>Dashboard</span>
        </Link>
        <Link to="/admin/orders" style={styles.link}>
          <div style={styles.iconContainer}>
            📋
          </div>
          <span style={styles.text}>Pesanan</span>
        </Link>
        <Link to="/admin/products" style={styles.link}>
          <div style={styles.iconContainer}>
            📦
          </div>
          <span style={styles.text}>Produk</span>
        </Link>
        <Link to="/admin/others" style={styles.link}>
          <div style={styles.iconContainer}>
            💬
          </div>
          <span style={styles.text}>Lainnya</span>
        </Link>
      </nav>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    backgroundColor: '#e0e0e0',
    padding: '10px',
    height: '100vh',
    borderRight: '1px solid #ccc',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '10px',
    borderRadius: '5px',
    color: '#333',
    backgroundColor: '#f5f5f5',
    transition: 'background-color 0.3s',
    border: '1px solid #ccc',
  },
  linkHover: {
    backgroundColor: '#ddd',
  },
  iconContainer: {
    fontSize: '20px',
    marginRight: '10px',
  },
  text: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default AdminSidebar;
