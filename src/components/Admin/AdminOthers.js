import React from 'react';

const AdminOthers = () => {
  const products = [
    { id: 1, name: 'Produk 1', imageUrl: 'https://via.placeholder.com/100', rating: 4.5 },
    { id: 2, name: 'Produk 2', imageUrl: 'https://via.placeholder.com/100', rating: 4.0 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Lainnya</h2>

      {/* Bagian rating rata-rata */}
      <div style={styles.ratingSection}>
        <div style={styles.ratingBox}>
          <p style={styles.ratingText}>Bintang Rating</p>
        </div>
        <div style={styles.averageRating}>
          <p>Periode rata-rata pemberian rating</p>
        </div>
      </div>

      {/* Bagian daftar produk dengan rating */}
      {products.map((product) => (
        <div key={product.id} style={styles.productRow}>
          <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
          <div style={styles.productDescription}>
            <p style={styles.productName}>{product.name}</p>
            <button style={styles.ratingButton}>Rating / Ulasan</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  ratingSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  ratingBox: {
    width: '100px',
    height: '100px',
    backgroundColor: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20px',
  },
  ratingText: {
    fontSize: '16px',
    textAlign: 'center',
  },
  averageRating: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: '10px',
    borderRadius: '5px',
  },
  productRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  productImage: {
    width: '100px',
    height: '100px',
    marginRight: '20px',
  },
  productDescription: {
    flex: 1,
  },
  productName: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  ratingButton: {
    padding: '10px 15px',
    backgroundColor: '#4A90E2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AdminOthers;
