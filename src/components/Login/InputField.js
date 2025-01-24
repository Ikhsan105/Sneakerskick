import React from 'react';

function InputField({ type, placeholder, value, onChange, showPasswordToggle, showPassword, setShowPassword }) {
  return (
    <div style={{ width: '100%', marginBottom: '15px', position: 'relative' }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
          boxSizing: 'border-box'
        }}
        required
      />
      {showPasswordToggle && (
        <span 
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            fontSize: '16px',
            color: '#888'
          }}>
          {showPassword ? '🙈' : '👁️'}
        </span>
      )}
    </div>
  );
}

export default InputField;
