import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Sneakerskick. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '20px 0',
    backgroundColor: '#f8f8f8',
    color: '#777',
    fontSize: '0.9em',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
