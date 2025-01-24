import React from 'react';
import { useParams } from 'react-router-dom';

const shoes = [
  {
    id: 1,
    name: 'Nike Revolution',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/450ed1df-8e17-4d87-a244-85697874661c/NIKE+REVOLUTION+7.png',
    price: 'Rp 809.000',
    description:
      'The Nike Revolution provides lightweight comfort and a sleek design for your daily running needs. Made with breathable materials to keep your feet cool.',
    colour: 'Black/White',
    style: 'REV-001',
    origin: 'Indonesia',
  },
  {
    id: 2,
    name: 'Nike Downshifter',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e53419df-8536-4c14-8f0d-2e481b1fad2f/NIKE+DOWNSHIFTER+12.png',
    price: 'Rp 568.000',
    description:
      'The Nike Downshifter is designed for versatile wear with a lightweight upper and cushioned sole to provide comfort all day long.',
    colour: 'Blue/White',
    style: 'DS-002',
    origin: 'Vietnam',
  },
  {
    id: 3,
    name: 'Jordan Stay Loyal 3',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/be57f4b6-8f6a-4908-8668-cc3f6326be61/JORDAN+STAY+LOYAL+3.png',
    price: 'Rp 1.488.000',
    description:
      'The Jordan Stay Loyal 3 combines classic Jordan heritage with modern comfort. Featuring a durable upper and responsive cushioning.',
    colour: 'Red/Black',
    style: 'JSL3-003',
    origin: 'China',
  },
  {
    id: 4,
    name: 'Nike Air Max 90 Premium',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f2eca6a1-4ddb-48fa-90b5-60c88fe48bc6/NIKE+AIR+MAX+90+PRM.png',
    price: 'Rp 1.758.000',
    description:
      'The Nike Air Max 90 Premium offers a fresh take on a timeless icon with premium materials and unmatched comfort.',
    colour: 'White/Gold',
    style: 'AM90P-004',
    origin: 'Thailand',
  },
];

const ShoeDetails = () => {
  const { id } = useParams();
  const shoe = shoes.find((s) => s.id === parseInt(id, 10));

  if (!shoe) {
    return <h2 style={styles.notFound}>Shoe not found</h2>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.detailsWrapper}>
        <img src={shoe.imageUrl} alt={shoe.name} style={styles.image} />
        <div style={styles.info}>
          <h1 style={styles.title}>{shoe.name}</h1>
          <p style={styles.price}>{shoe.price}</p>
          <p style={styles.description}>{shoe.description}</p>
          <ul style={styles.detailsList}>
            <li>Colour Shown: {shoe.colour}</li>
            <li>Style: {shoe.style}</li>
            <li>Country/Region of Origin: {shoe.origin}</li>
          </ul>
          <div style={styles.actions}>
            <select style={styles.select}>
              <option value="40">Size 40</option>
              <option value="41">Size 41</option>
              <option value="42">Size 42</option>
            </select>
            <button style={styles.addToCartButton}>Add to Cart</button>
            <button style={styles.favoriteButton}>Favourite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  detailsWrapper: {
    display: 'flex',
    gap: '20px',
    flexDirection: 'row',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '300px',
    borderRadius: '10px',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '10px',
  },
  detailsList: {
    listStyle: 'none',
    padding: '0',
    fontSize: '14px',
    color: '#333',
    marginBottom: '20px',
  },
  actions: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  select: {
    padding: '5px',
    fontSize: '14px',
  },
  addToCartButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  favoriteButton: {
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    color: '#333',
    border: '1px solid #ddd',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  notFound: {
    textAlign: 'center',
    marginTop: '50px',
    fontSize: '20px',
    color: '#666',
  },
};

export default ShoeDetails;
