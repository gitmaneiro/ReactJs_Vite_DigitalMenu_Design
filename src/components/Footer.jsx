// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© 2020 - {currentYear} by ManeiroDev | El Asador Maturin</p> 
    </footer>
  );
};

export default Footer;