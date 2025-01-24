import React from 'react';

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} style={{
      width: '100%',
      padding: '12px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      borderRadius: '5px',
      border: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginBottom: '20px'
    }}>
      {children}
    </button>
  );
}

export default Button;
