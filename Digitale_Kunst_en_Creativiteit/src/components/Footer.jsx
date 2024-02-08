import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'linear-gradient(to right, #B4D4FF, #176B87)', padding: '20px', textAlign: 'center' }}>
      <p style={{ color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span>&copy; 2024 Digitale Kunst en Creativiteit</span>
        <img src="https://imgur.com/yJaLPA0.jpg" alt="Logo" style={{ width: '50px', height: 'auto', margin: '0 5px' }} />
        <span>. Alle rechten voorbehouden.</span>
      </p>
    </footer>
  );
};

export default Footer;




