import React from 'react';

export const Header = () => (
  <header
    style={{
      width: '100%',
      height: '100px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#272727',
      color: 'white',
      padding: '20px 35px',
      boxSizing: 'border-box',
    }}
  >
    <div>
      <h1>Testing App Demo</h1>
    </div>
    <div>
      <button>Login</button>
    </div>
  </header>
);
