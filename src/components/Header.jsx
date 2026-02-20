// src/components/Header.jsx
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; 

const Header = ({ restaurantName }) => {
  return (
    <header className="header">
      <div className='header-content'>

      <div className="header-top-bar">
        <div className="restaurant-title">
          {restaurantName}
        </div>
                  
        <div className="social-icons"> 
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
        </div>
      </div>

        <div className="logo-container">
          <img src="/images/logo.png" alt="Logo del restaurante" />
        </div>
        
    </div>
      
    </header>
  );
};

export default Header;