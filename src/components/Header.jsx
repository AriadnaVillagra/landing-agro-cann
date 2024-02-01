// src/components/Header.jsx
import React from 'react';
import Image from 'next/image';
import styles from '@component/styles/Header.module.css'; // Usa la ruta correcta
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
          <Image src="/titulo2.png" className={styles.logo} width={900} height={200} />
        </div>
      </div>
      <NavBar />
    </header>
    
  );
};

export default Header;
