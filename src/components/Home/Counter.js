import React from 'react';

const Counter = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textSection}>
        <h2 style={styles.heading}>
          Best In Style <br /> Collection <br /> For You
        </h2>
        <button style={styles.button}>Buy Now</button>
      </div>
      <div style={styles.imageSection}>
        {/* Ganti dengan path gambar yang benar */}
        <img src={`${process.env.PUBLIC_URL}/3.jpeg`} alt="gambar" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px 20px',
    minHeight: '100vh',
  },
  textSection: {
    flex: '1',
    fontSize: '1.2em',
    color: '#333',
    paddingRight: '20px',
    lineHeight: '1.2em',
  },
  heading: {
    fontSize: '3em',
    fontWeight: 'bold',
    margin: 0,
    lineHeight: '1.2em',
    marginLeft: '20px', // Mengatur margin kiri agar lebih fleksibel
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginLeft: '20px',
  },
  imageSection: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20px',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
};

export default Counter;
