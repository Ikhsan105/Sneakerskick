import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: 'Udin109',
    name: 'Saepudin',
    email: 'udin@gmail.com',
    phone: '089799789',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Profil berhasil diperbarui!');
    // Simpan data ke server di sini jika diperlukan
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={styles.userInfo}>
          <p style={styles.username}>{profileData.username}</p>
          <NavLink to="/edit-profile" style={styles.editLink}>
            Ubah profil
          </NavLink>
        </div>
        <nav style={styles.nav}>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({
              ...styles.navItem,
              backgroundColor: isActive ? '#f0f0f0' : 'transparent',
            })}
          >
            Profil
          </NavLink>
          <NavLink
            to="/address"
            style={({ isActive }) => ({
              ...styles.navItem,
              backgroundColor: isActive ? '#f0f0f0' : 'transparent',
            })}
          >
            Alamat
          </NavLink>
          <NavLink
            to="/change-password"
            style={({ isActive }) => ({
              ...styles.navItem,
              backgroundColor: isActive ? '#f0f0f0' : 'transparent',
            })}
          >
            Ubah Password
          </NavLink>
          <NavLink
            to="/order-history"
            style={({ isActive }) => ({
              ...styles.navItem,
              backgroundColor: isActive ? '#f0f0f0' : 'transparent',
            })}
          >
            History Pesanan
          </NavLink>
        </nav>
      </aside>
      <main style={styles.mainContent}>
        <h1 style={styles.title}>Profil Saya</h1>
        <form style={styles.form} onSubmit={handleSave}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="username">
              Username
            </label>
            <input
              style={styles.input}
              type="text"
              id="username"
              value={profileData.username}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">
              Nama
            </label>
            <input
              style={styles.input}
              type="text"
              id="name"
              value={profileData.name}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">
              Email
            </label>
            <input
              style={styles.input}
              type="email"
              id="email"
              value={profileData.email}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="phone">
              Nomor Telepon
            </label>
            <input
              style={styles.input}
              type="tel"
              id="phone"
              value={profileData.phone}
              onChange={handleInputChange}
            />
          </div>
          <button style={styles.saveButton} type="submit">
            Simpan
          </button>
        </form>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f8f8f8',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRight: '1px solid #ddd',
  },
  userInfo: {
    marginBottom: '20px',
  },
  username: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#333',
  },
  editLink: {
    fontSize: '0.9em',
    color: '#4A90E2',
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  navItem: {
    fontSize: '1em',
    color: '#333',
    textDecoration: 'none',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
    cursor: 'pointer',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
  },
  title: {
    fontSize: '1.5em',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'grid',
    gap: '15px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontSize: '0.9em',
    color: '#555',
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
  },
  saveButton: {
    padding: '10px 20px',
    backgroundColor: '#4A90E2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  },
};

export default Profile;
