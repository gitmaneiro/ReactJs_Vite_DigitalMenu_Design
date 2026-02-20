// src/components/MenuItem.jsx
import React from 'react';

const MenuItem = ({ name, description, price, image }) => {
  // Formato de moneda
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  }).format(price);

  return (
    <div className="menu-item">
      <div className="item-image">
        <img src={image} alt={name} />
      </div>
      <div className="item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="price">{formattedPrice}</div>
      </div>
    </div>
  );
};

export default MenuItem;