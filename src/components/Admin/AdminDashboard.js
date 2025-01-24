import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  // Fungsi untuk logout dan kembali ke halaman login
  const handleLogout = () => {
    onLogout(); // Memanggil fungsi logout dari App.js
    navigate('/login'); // Mengarahkan kembali ke halaman login
  };

  return (
    <div style={styles.container}>
      <AdminHeader onLogout={handleLogout} />
      <div style={styles.content}>
        <AdminSidebar />
        <div style={styles.main}>
          <h1 style={styles.title}>Dashboard</h1>
          <div style={styles.cardContainer}>
            <div style={styles.card}>Pesanan Baru</div>
            <div style={styles.card}>Proses Pemesanan</div>
            <div style={styles.card}>Siap Dikirim</div>
          </div>
          <div style={styles.analyticsContainer}>
            <div style={styles.analyticsCard}>Potensi Penjualan</div>
            <div style={styles.analyticsCard}>Produk Dilihat</div>
            <div style={styles.analyticsCard}>Pendapatan</div>
          </div>
          <div style={styles.chartContainer}>
            <canvas id="salesChart" style={styles.chart}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  content: {
    display: 'flex',
    flex: 1,
  },
  main: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },
  card: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  analyticsContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },
  analyticsCard: {
    flex: 1,
    backgroundColor: '#777',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  chartContainer: {
    backgroundColor: '#eaeaea',
    padding: '20px',
    borderRadius: '10px',
  },
  chart: {
    width: '100%',
    height: '200px',
  },
};

export default AdminDashboard;
