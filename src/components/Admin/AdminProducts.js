import React from 'react';

const AdminProducts = () => {
  // Data produk contoh
  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150', // Gambar placeholder
      description: 'Deskripsi seputar produk 1',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      description: 'Deskripsi seputar produk 2',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      description: 'Deskripsi seputar produk 3',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Produk</h2>
      {products.map((product) => (
        <div key={product.id} style={styles.productCard}>
          <div style={styles.imageContainer}>
            <img src={product.image} alt="Produk" style={styles.image} />
          </div>
          <div style={styles.details}>
            <p style={styles.description}>{product.description}</p>
            <div style={styles.buttonGroup}>
              <button style={styles.button}>Sesuaikan Harga</button>
              <button style={styles.button}>Sesuaikan Stok</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  productCard: {
    display: 'flex',
    backgroundColor: '#e0e0e0',
    padding: '20px',
    marginBottom: '15px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    width: '150px',
    height: '150px',
    backgroundColor: '#ccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20px',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  details: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4A90E2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default AdminProducts;
