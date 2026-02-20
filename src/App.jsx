// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import Footer from "./components/Footer";
import menuData from './data/menuData.json'; // Importa los datos
import './App.css'

function App() {
  const categories = menuData.map(section => ({
    title: section.category,
    slug: section.slug
  }));

  return (
    <div className="app-container">
      <Header restaurantName="" />
      <Navbar categories={categories} />
      <main>
        {menuData.map((section, index) => (
          <MenuSection 
            key={index}
            title={section.category}
            slug={section.slug} // ¡Asegúrate de pasar el slug aquí!
            items={section.items}
          />
        ))}
      </main>
      <Footer /> {/* Asumiendo que crearás un componente Footer */}
    </div>
  );
}

export default App;
