import React from 'react';

function BackgroundWrapper({ children }) {
  return (
    <div style={{
      backgroundImage: 'url("/BCK.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {children}
    </div>
  );
}

export default BackgroundWrapper;
