import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const favoriteProducts = [
    {
      id: 1,
      name: 'Nike Air Max 90 Premium',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f2eca6a1-4ddb-48fa-90b5-60c88fe48bc6/NIKE+AIR+MAX+90+PRM.png',
      price: 'Rp 1.758.000',
    },
    {
      id: 2,
      name: 'Nike Air Force 1',
      imageUrl: 'https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/images/products/ec72198c497e85f5387b0486d00f40f4.webp',
      price: 'Rp 1.098.000',
    },
    {
      id: 3,
      name: 'Jordan Stay Loyal 3',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/be57f4b6-8f6a-4908-8668-cc3f6326be61/JORDAN+STAY+LOYAL+3.png',
      price: 'Rp 1.488.000',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your <span style={styles.highlight}>Favorites</span></h2>
      <div style={styles.grid}>
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <Link to={`/details/${product.id}`} key={product.id} style={styles.cardLink}>
              <div style={styles.card}>
                <img src={product.imageUrl} alt={product.name} style={styles.image} />
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.price}>{product.price}</p>
                <button style={styles.removeButton}>Remove from Favorites</button>
              </div>
            </Link>
          ))
        ) : (
          <p style={styles.noFavorites}>No favorites added yet.</p>
        )}
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
    marginBottom: '20px',
  },
  highlight: {
    color: '#4A90E2',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
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
    height: 'auto',
    borderRadius: '5px',
  },
  productName: {
    margin: '10px 0 5px',
    fontSize: '1.1em',
  },
  price: {
    color: '#4A90E2',
    fontSize: '1.1em',
    marginBottom: '10px',
  },
  removeButton: {
    padding: '8px 12px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  noFavorites: {
    textAlign: 'center',
    fontSize: '1.2em',
    color: '#555',
  },
};

export default Favorites;
