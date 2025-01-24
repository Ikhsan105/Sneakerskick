import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Home/Header';

const BestCollection = ({ isLoggedIn, onLogout }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Nike Sports', category: 'Man', price: 'Rp.700.000,00', imageUrl: 'https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/images/products/8748d5f205e98be4f01347df9100a424.webp' },
    { id: 2, name: 'Nike Sports', category: 'Girls', price: 'Rp.200.000,00', imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4378c60c-c7d5-4ac4-9be2-c5128c2a1c67/WMNS+NIKE+AIR+MAX+EXCEE.png' },
    { id: 3, name: 'Nike Sports', category: 'Man', price: 'Rp.500.000,00', imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c3e02bce-8e15-46ce-b7ff-dc4c222f576a/AIR+MAX+90.png' },
    { id: 4, name: 'Nike Sports', category: 'Sports', price: 'Rp.800.000,00', imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2895d88d-c31c-4746-a070-117a66a0267c/AIR+MAX+90+DRIFT.png' },
  ];

  const categories = ['All', 'Man', 'Girls', 'Sports'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const handleBuyNow = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div>
      <Header isLoggedIn={true} onLogout={onLogout} />
      <div style={styles.container}>
        <h2 style={styles.title}>Best Collection</h2>
        <h3 style={styles.subtitle}>Our New Collection</h3>
        <div style={styles.buttonContainer}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                ...styles.categoryButton,
                backgroundColor: selectedCategory === category ? '#4A90E2' : '#fff',
                color: selectedCategory === category ? '#fff' : '#333',
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <div style={styles.grid}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={styles.card}>
              <img src={product.imageUrl} alt={product.name} style={styles.image} />
              <h4 style={styles.productName}>{product.name}</h4>
              <p style={styles.price}>{product.price}</p>
              <button style={styles.buyButton} onClick={() => handleBuyNow(product.id)}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.5em',
    marginBottom: '20px',
  },
  buttonContainer: {
    marginBottom: '20px',
    display: 'flex',
    gap: '10px',
  },
  categoryButton: {
    padding: '10px 20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '150px', // Batasi tinggi gambar
    objectFit: 'contain', // Pastikan gambar tetap proporsional
    borderRadius: '5px',
    marginBottom: '10px',
  },
  productName: {
    fontSize: '1.2em',
    margin: '10px 0',
  },
  price: {
    color: '#4A90E2',
    fontSize: '1.1em',
    marginBottom: '10px',
  },
  buyButton: {
    padding: '10px 15px',
    backgroundColor: '#4A90E2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  },
};

export default BestCollection;
