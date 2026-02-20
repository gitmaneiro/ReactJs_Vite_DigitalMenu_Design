// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = ({ categories }) => {
  // Inicializamos con la primera categoría disponible
  const [activeCategory, setActiveCategory] = useState(categories[0]?.slug || ''); 
  
  console.log(categories)
  // Función de scroll suave
  const scrollToSection = (slug, event) => {
    event.preventDefault(); 
    setActiveCategory(slug); 
    const targetElement = document.getElementById(slug);
    if (targetElement) {
      // Usamos 60px o el valor que mejor se adapte a la altura de tu navbar
      window.scrollTo({
        top: targetElement.offsetTop - 60, 
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      {/* Contenedor de la botonera con scroll horizontal */}
      <ul className="navbar-main-list"> 
        {categories.map((category, index) => (
          <li key={index}>
            <a 
              href={`#${category.slug}`} 
              onClick={(e) => scrollToSection(category.slug, e)}
              className={activeCategory === category.slug ? 'active' : ''}
            >
              {category.title}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Ícono de búsqueda al final de la barra */}
      <div className="search-icon">
        <FaSearch />
      </div>
    </nav>
  );
};

export default Navbar;