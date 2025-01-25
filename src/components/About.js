import React from 'react';

const About = () => {
  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <h1 style={styles.logo}>Sneakerkick</h1>
      </header>
      <main style={styles.mainContent}>
        <section style={styles.section}>
          <h2 style={styles.title}>Tentang Kami</h2>
          <p style={styles.text}> 
            Selamat datang di Sneakerskick! Kami adalah platform e-commerce yang didedikasikan untuk memberikan yang terbaik
            sepatu sneakers terbaik dari merek-merek ternama dengan harga terjangkau. Apakah Anda sedang mencari yang terbaru
            terbaru atau rilis edisi terbatas, kami siap membantu Anda.
          </p>

          <h3 style={styles.subtitle}>Misi Kami</h3>
          <p style={styles.text}>
           Misi kami adalah menyediakan sepatu sneaker berkualitas tinggi 
           yang mencerminkan tren terkini bagi para penggemar sneaker. 
           Kami percaya bahwa kami menawarkan berbagai macam pilihan yang sesuai dengan setiap selera dan gaya.
          </p>

          <h3 style={styles.subtitle}>Visi Kami</h3>
          <p style={styles.text}>  
            Menjadi platform e-commerce sepatu terpercaya yang menyediakan produk berkualitas dengan harga terjangkau,
            serta memberikan pengalaman belanja yang mudah, nyaman, dan memuaskan bagi pelanggan di seluruh Indonesia.
          </p>

          <h3 style={styles.subtitle}>Contact Kami</h3>
          <p style={styles.text}>
            Punya pertanyaan? Silahkan contact@sneakerskick.com atau telepon kami 
            08983579823.
          </p>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>© 2024 Sneakerskick. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    color: '#333',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  logo: {
    fontSize: '2em',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: '1',
    padding: '20px',
  },
  section: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  text: {
    fontSize: '1em',
    lineHeight: '1.6',
    marginTop: '10px',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
};

export default About;
