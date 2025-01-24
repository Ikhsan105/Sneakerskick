import React from 'react';
import Header from './Home/Header';
import Footer from './Home/Footer';
import Counter from './Home/Counter';
import BestCollectionCarousel from './Home/BestCollectionCarousel';

const Home = ({ isLoggedIn, onLogout }) => {
  return (
    <div style={styles.pageContainer}>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <main style={styles.mainContent}>
        <Counter />
        <section style={styles.bestCollectionSection}>
          <h2 style={styles.bestCollectionTitle}>Best Collection</h2>
          <BestCollectionCarousel />
        </section>
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: '1',
    textAlign: 'center',
    padding: '20px',
  },
  bestCollectionSection: {
    marginTop: '40px',
    textAlign: 'center',
  },
  bestCollectionTitle: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
};

export default Home;
