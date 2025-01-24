import React from 'react';
import { Link } from 'react-router-dom';

const Address = () => {
  const addresses = [
    {
      id: 1,
      name: 'Ikhsan Nur Purwanto',
      phone: '+62 895 3771 42854',
      address:
        'Jl. Anggrek S No.134-126, Perumnas Ngringo, Ngringo (jalan anggrek 5 123), Jaten, Kab. Karanganyar, Jawa Tengah, ID, 57731',
      isPrimary: true,
    },
    {
      id: 2,
      name: 'iksan02',
      phone: '+62 895 3771 42854',
      address:
        'Jl. Anggrek S No.134-126, Perumnas Ngringo, Ngringo, Jaten, Kab. Karanganyar, Jawa Tengah, ID, 57731',
      isPrimary: false,
    },
    {
      id: 3,
      name: 'Alip',
      phone: '+62 895 2498 2547',
      address:
        'RT.4/RW.4, Kelurahan Cimlekar, Cibinong No Rumah 05, Cibinong, Kab. Bogor, Jawa Barat, ID, 16911',
      isPrimary: false,
    },
  ];

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
          <Link to="/profile" style={styles.navLink}>
            Profil
          </Link>
          <Link to="/address" style={{ ...styles.navLink, ...styles.active }}>
            Alamat
          </Link>
          <Link to="/change-password" style={styles.navLink}>
            Ubah Password
          </Link>
          <Link to="/order-history" style={styles.navLink}>
            History Pesanan
          </Link>
        </nav>
      </aside>

      <main style={styles.mainContent}>
        <div style={styles.header}>
          <h2 style={styles.title}>Alamat Saya</h2>
          <button style={styles.addButton}>Tambah alamat baru</button>
        </div>
        <div style={styles.addressList}>
          {addresses.map((address) => (
            <div key={address.id} style={styles.addressCard}>
              <h3 style={styles.name}>{address.name} ({address.phone})</h3>
              <p style={styles.addressText}>{address.address}</p>
              <div style={styles.actions}>
                <button style={styles.actionButton}>Ubah</button>
                {!address.isPrimary && (
                  <button style={styles.actionButton}>Hapus</button>
                )}
                <button
                  style={{
                    ...styles.actionButton,
                    backgroundColor: address.isPrimary ? '#e0e0e0' : '#4A90E2',
                    color: address.isPrimary ? '#333' : '#fff',
                  }}
                >
                  {address.isPrimary ? 'Utama' : 'Atur sebagai utama'}
                </button>
              </div>
            </div>
          ))}
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
    overflowY: 'auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4A90E2',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  addressList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  addressCard: {
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: '1em',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  addressText: {
    fontSize: '0.9em',
    marginBottom: '10px',
  },
  actions: {
    display: 'flex',
    gap: '10px',
  },
  actionButton: {
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
};

export default Address;
