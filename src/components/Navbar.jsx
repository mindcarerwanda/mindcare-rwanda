import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#1c3d2f',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <span style={{ fontWeight: 'bold' }}>MindCare Rwanda</span>
      <div>
        <a href="#" style={{ color: 'white', marginRight: '1rem' }}>About Us</a>
        <a href="#" style={{ color: 'white', marginRight: '1rem' }}>Services</a>
        <a href="#" style={{ color: 'white' }}>Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;