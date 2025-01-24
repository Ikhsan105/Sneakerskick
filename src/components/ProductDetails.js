import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  // Data produk (seharusnya diambil dari API atau state global)
  const products = [
    { id: 1, name: 'Nike Sports', category: 'Man', price: 'Rp.700.000,00', description: 'A perfect shoe for every man.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Nike Sports', category: 'Girls', price: 'Rp.200.000,00', description: 'Stylish shoes for girls.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Nike Sports', category: 'Man', price: 'Rp.500.000,00', description: 'Comfortable and durable.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Nike Sports', category: 'Sports', price: 'Rp.800.000,00', description: 'Shoes built for performance.', imageUrl: 'https://via.placeholder.com/150' },
  ];

  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={styles.container}>
      <img src={product.imageUrl} alt={product.name} style={styles.image} />
      <h1 style={styles.title}>{product.name}</h1>
      <p style={styles.price}>{product.price}</p>
      <p style={styles.description}>{product.description}</p>
      <Link to="/best-collection" style={styles.backLink}>Back to Collection</Link>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  price: {
    fontSize: '1.5em',
    color: '#4A90E2',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1em',
    marginBottom: '20px',
  },
  backLink: {
    textDecoration: 'none',
    color: '#4A90E2',
    fontSize: '1em',
  },
};

export default ProductDetails;
