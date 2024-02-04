// src/components/NavBar.jsx
import React, { useState } from 'react';
import styles from '@component/styles/NavBar.module.css'; // Asegúrate de tener la ruta correcta

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = (route) => {
    window.location.href = route;
    closeMenu();
  };

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <nav className={styles.Nav}>
      {/* Hamburguesa para dispositivos más pequeños */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
        <div className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
        <div className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
      </div>

      {/* Lista de botones (puedes seguir usando tu estructura actual) */}
      <ul className={`${styles['navbar-buttons']} ${menuOpen ? styles.open : ''}`}>
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
