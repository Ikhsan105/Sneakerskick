import React from 'react';

function Ikonlogin({ platform, iconUrl }) {
  return (
    <button style={{
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      margin: '0 10px', // Memberi jarak antar ikon
    }}>
      <img
        src={iconUrl}
        alt={platform}
        style={{
          width: '24px',
          height: '24px',
        }}
      />
    </button>
  );
}

export default Ikonlogin;
