import React from 'react';
import Header from './Home/Header'; // Menggunakan header dengan ikon

const NewArrival = ({ isLoggedIn, onLogout }) => {
  const shoes = [
    {
      id: 1,
      name: 'Nike Revolution',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/450ed1df-8e17-4d87-a244-85697874661c/NIKE+REVOLUTION+7.png',
      price: 'Rp 809.000',
    },
    {
      id: 2,
      name: 'Nike Downshifter',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e53419df-8536-4c14-8f0d-2e481b1fad2f/NIKE+DOWNSHIFTER+12.png',
      price: 'Rp 568.000',
    },
    {
      id: 3,
      name: 'Jordan Stay Loyal 3',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/be57f4b6-8f6a-4908-8668-cc3f6326be61/JORDAN+STAY+LOYAL+3.png',
      price: 'Rp 1.488.000',
    },
    {
      id: 4,
      name: 'Nike Air Max 90 Premium',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f2eca6a1-4ddb-48fa-90b5-60c88fe48bc6/NIKE+AIR+MAX+90+PRM.png',
      price: 'Rp 1.758.000',
    },
    {
      id: 5,
      name: 'Nike Air Force 1',
      imageUrl: 'https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/images/products/a206ce1bc312325cce3d49d9b4609b98.webp',
      price: 'Rp 1.098.000',
    },
    {
      id: 6,
      name: 'Nike Air Max Plus',
      imageUrl: 'https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/images/products/b4fd1868b5142d47e422e3fb6936e620.webp',
      price: 'Rp 2.098.000',
    },
    {
      id: 7,
      name: 'Nike Pegasus Trail 3',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a92d526-48c9-4439-9c55-48d1c975a815/W+REACT+PEGASUS+TRAIL+4+GTX.png',
      price: 'Rp 1.888.000',
    },
  ];

  // Reorder the shoes array
  const reorderedShoes = [
    ...shoes.slice(0, 3),
    ...shoes.slice(3, 6),
    shoes[6],
  ];

  return (
    <div>
      {/* Header dengan ikon navigasi */}
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>
            New <span style={styles.highlight}>Arrival</span>
          </h2>
        </div>
        <div style={styles.grid}>
          {reorderedShoes.map((shoe) => (
            <div key={shoe.id} style={styles.card}>
              <img src={shoe.imageUrl} alt={shoe.name} style={styles.image} />
              <h3 style={styles.shoeName}>{shoe.name}</h3>
              <p style={styles.price}>{shoe.price}</p>
              <button style={styles.buyButton}>Buy Now</button>
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
  header: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.8em',
    fontWeight: 'bold',
  },
  highlight: {
    color: '#4A90E2',
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
    height: '150px',
    objectFit: 'contain',
    borderRadius: '5px',
  },
  shoeName: {
    margin: '10px 0 5px',
    fontSize: '1em',
  },
  price: {
    color: '#4A90E2',
    fontSize: '1.1em',
    marginBottom: '10px',
  },
  buyButton: {
    padding: '8px 12px',
    backgroundColor: '#4A90E2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
};

export default NewArrival;
