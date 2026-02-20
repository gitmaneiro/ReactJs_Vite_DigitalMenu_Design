// src/components/MenuSection.jsx
import React from 'react';
import MenuItem from './MenuItem';
import CarouselSection from "./CarouselSection.jsx";

const MenuSection = ({ title, slug, items }) => {
  
  // Lógica para mostrar el carrusel solo en la primera sección (Entradas)
  const isCarousel = slug === 'entradas';

  return (
    <section id={slug}>
      <div className="section-title">
         {/* Solo mostramos el título si NO es la sección de carrusel (que ya tiene su propio encabezado) */}
         {!isCarousel && <h3>{title}</h3>} 
      </div>
      
      {isCarousel ? (
          // Si es 'entradas', renderizamos el carrusel
        <CarouselSection items={items} />
      ) : (
        // Renderizado normal de la sección
        items.map((item, index) => (
          <MenuItem 
            key={index} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
            image={item.image}
          />
        ))
      )}
    </section>
  );
};

export default MenuSection;