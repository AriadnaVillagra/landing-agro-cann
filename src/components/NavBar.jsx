// src/components/NavBar.jsx
import React from 'react';
import styles from '@component/styles/NavBar.module.css'; // Usa la ruta correcta

const NavBar = () => {
  const handleButtonClick = (route) => {
    window.location.href = route; // Redirigir a la ruta al hacer clic en el botón
  };

  return (
    <nav className={styles.Nav}>
      <ul className={styles['navbar-buttons']}>
        <li>
          <a className={styles['nav-button1']} onClick={() => handleButtonClick('/')}>Home</a>
        </li>
        <li>
          <a className={styles['nav-button2']} onClick={() => handleButtonClick('/ComoTeAyudamos')}>Como te ayudamos</a>
        </li>
        <li>
          <a className={styles['nav-button3']} onClick={() => handleButtonClick('/Reprocann')}>Reprocann</a>
        </li>
        <li>
          <a className={styles['nav-button4']} onClick={() => handleButtonClick('/ClubCannabico')}>Club Cannabico</a>
        </li>
        <li>
          <a className={styles['nav-button5']} onClick={() => handleButtonClick('/Nosotros')}>Nosotros</a>
        </li>
        <li>
          <a className={styles['nav-button6']} onClick={() => handleButtonClick('/Contacto')}>Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
