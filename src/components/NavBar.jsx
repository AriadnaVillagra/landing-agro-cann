// src/components/NavBar.jsx
import React from 'react';
import styles from '../styles/navbar.module.css';

const NavBar = () => {
  const handleButtonClick = (route) => {
    window.location.href = route; // Redirigir a la ruta al hacer clic en el botón
  };

  return (
    <div className={styles.Nav}>
      <div className={styles['navbar-buttons']}>
        <ul>
          <a className={styles['nav-button1']} onClick={() => handleButtonClick('/')}>Home</a>
        </ul>
        <ul>
          <a className={styles['nav-button2']} onClick={() => handleButtonClick('/ComoTeAyudamos')}>Como te ayudamos</a>
        </ul>
        <ul>
          <a className={styles['nav-button3']} onClick={() => handleButtonClick('/Reprocann')}>Reprocann</a>
        </ul>
        <ul>
          <a className={styles['nav-button4']} onClick={() => handleButtonClick('/ClubCannabico')}>Club Cannabico</a>
        </ul>
        <ul>
          <a className={styles['nav-button5']} onClick={() => handleButtonClick('/Nosotros')}>Nosotros</a>
        </ul>
        <ul>
          <a className={styles['nav-button6']} onClick={() => handleButtonClick('/Contacto')}>Contacto</a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;