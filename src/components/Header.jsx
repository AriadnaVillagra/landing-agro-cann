// src/components/Header.jsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/header.module.css'; // Ajusta la ruta según la ubicación de tu archivo header.module.css
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className={styles.Header}>
      {/* Coloca los logos en un contenedor flex */}
      <div className={styles.logoContainer}>
        <Image src="/logo-final-white.png" className={styles.logo} width={200} height={200} />
        <Image src="/VectorFlecha.png" className={styles.logoFlecha} width={66} height={99} />
        {/* Agrega una separación entre las imágenes */}
      
        {/* Centra el título */}
        <div className={styles.centeredTitle}>
          <Image src="/TITULO.png" className={styles.logo} width={640} height={140} />
        </div>
      </div>
      <NavBar />
    </header>
    
  );
};

export default Header;
