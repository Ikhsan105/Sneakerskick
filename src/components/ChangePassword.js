import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePasswordChange = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      setErrorMessage('Semua field harus diisi.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('Password baru dan konfirmasi tidak cocok.');
      return;
    }

    // Tambahkan logika validasi password lama di sini jika diperlukan
    setErrorMessage('');
    setSuccessMessage('Password berhasil diubah.');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={styles.userInfo}>
          <h3 style={styles.username}>Udin109</h3>
          <Link to="/edit-profile" style={styles.editProfileLink}>
            ubah profil
          </Link>
        </div>
        <nav style={styles.nav}>
          <Link to="/profile" style={styles.navLink}>Profil</Link>
          <Link to="/address" style={styles.navLink}>Alamat</Link>
          <Link to="/change-password" style={{ ...styles.navLink, ...styles.active }}>Ubah Password</Link>
          <Link to="/order-history" style={styles.navLink}>History Pesanan</Link>
        </nav>
      </aside>

      <main style={styles.mainContent}>
        <h2 style={styles.title}>Ubah Password</h2>
        <div style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="oldPassword">Masukkan password lama</label>
            <div style={styles.inputContainer}>
              <input
                type="password"
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                style={styles.input}
              />
              <Link to="/forgot-password" style={styles.forgotLink}>lupa password?</Link>
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="newPassword">Masukkan password baru</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword">Ulangi password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
            />
          </div>

          {errorMessage && <p style={styles.error}>{errorMessage}</p>}
          {successMessage && <p style={styles.success}>{successMessage}</p>}

          <div style={styles.buttonGroup}>
            <button style={styles.cancelButton}>Tidak</button>
            <button style={styles.confirmButton} onClick={handlePasswordChange}>Ya</button>
          </div>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
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
  },
  editProfileLink: {
    fontSize: '0.9em',
    color: '#4A90E2',
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  navLink: {
    fontSize: '1em',
    color: '#333',
    textDecoration: 'none',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  active: {
    backgroundColor: '#f0f0f0',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f8f8f8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#e0e0e0',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginBottom: '5px',
  },
  forgotLink: {
    fontSize: '0.9em',
    color: '#4A90E2',
    textDecoration: 'none',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    color: '#333',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  confirmButton: {
    backgroundColor: '#4A90E2',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '0.9em',
    marginTop: '10px',
  },
  success: {
    color: 'green',
    fontSize: '0.9em',
    marginTop: '10px',
  },
};

export default ChangePassword;
