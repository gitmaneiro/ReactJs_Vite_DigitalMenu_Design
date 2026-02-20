// src/components/CarouselSection.jsx
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const CarouselSection = ({ items }) => {
  // Opciones de Splide para este carrusel
  const options = {
    type: 'loop',       // Carousel infinito
    perPage: 1,         // Muestra solo un elemento a la vez
    autoplay: true,     // Reproducción automática
    interval: 5000,     // 5 segundos de intervalo
    speed: 800,
    arrows: false,      // Ocultamos las flechas
    pagination: true,   // Usamos la paginación de puntos
    pauseOnHover: true,
  };

  // Función de formato de precio (reutilizada)
  const formatPrice = (price) => new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  }).format(price);


  return (
    <div className="carousel-container">
      <Splide options={options} aria-label="Carrusel de Entradas">
        
        {items.map((item, index) => (
          <SplideSlide key={index}>
            <div className="carousel-item">
              <div className="carousel-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="price-tag">
                    <span className="price">{formatPrice(item.price)}</span>
                </div>
              </div>
              <div className="carousel-image">
                <img src={item.image} alt={item.name} />
              </div>
            </div>
          </SplideSlide>
        ))}

      </Splide>
    </div>
  );
};

export default CarouselSection;