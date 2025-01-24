import React from 'react';

function Remember({ rememberMe, setRememberMe }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'flex-start',
      marginBottom: '20px',
      fontSize: '14px',
      color: '#333'
    }}>
      <input 
        type="checkbox" 
        id="remember" 
        checked={rememberMe}
        onChange={() => setRememberMe(!rememberMe)}  // toggle untuk rememberMe
        style={{ marginRight: '8px' }} 
      />
      <label htmlFor="remember">Remember Me</label>
    </div>
  );
}

export default Remember;
