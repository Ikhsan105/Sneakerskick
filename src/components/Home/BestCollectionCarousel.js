import React from 'react';

const BestCollectionCarousel = () => {
  const products = [
    {
      id: 1,
      name: 'Nike Air Max',
      imageUrl: 'https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/images/products/a0aa699cf34ba11650610eab2e424060.webp',
      price: 'Rp.700.000,00',
    },
    {
      id: 2,
      name: 'Adidas UltraBoost',
      imageUrl: 'https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/images/products/11498d2f7d8fba76e83b631ba3993932.webp',
      price: 'Rp.200.000,00',
    },
    {
      id: 3,
      name: 'Puma Running Shoes',
      imageUrl: 'https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/images/products/e9bb77ba081bba9ffe0a68475297e9fb.webp',
      price: 'Rp.500.000,00',
    },
    {
      id: 4,
      name: 'Reebok Classic',
      imageUrl: 'https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/images/products/d5062ac7544e4958dc7e72b147831620.webp',
      price: 'Rp.800.000,00',
    },
  ];

  return (
    <div style={styles.carouselContainer}>
      <div style={styles.carousel}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.imageUrl} alt={product.name} style={styles.image} />
            <h4 style={styles.productName}>{product.name}</h4>
            <p style={styles.price}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    overflowX: 'auto',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0',
  },
  carousel: {
    display: 'flex',
    gap: '15px',
  },
  card: {
    minWidth: '200px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '150px', // Batasi tinggi gambar untuk proporsional
    objectFit: 'contain', // Menjaga aspek rasio gambar
    borderRadius: '5px',
    marginBottom: '10px',
  },
  productName: {
    fontSize: '1em',
    margin: '5px 0',
  },
  price: {
    fontSize: '1.1em',
    color: '#4A90E2',
  },
};

export default BestCollectionCarousel;
