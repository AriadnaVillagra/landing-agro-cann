// src/components/Header.jsx
import React from 'react';
import Image from 'next/image';
import NavBar from './NavBar';
import styles from '@component/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      {/* Coloca los logos en un contenedor flex */}
      <div className={styles.logoContainer}>
        <Image src="/logo-final-white.png" className={styles.logo} width={200} height={200} />
        <Image src="/flecha.svg" className={styles.logoFlecha} width={66} height={99} />

        {/* Nuevo contenedor para el título */}
        <div className={styles.centeredTitleContainer}>
          {/* Utiliza la etiqueta <picture> para proporcionar diferentes fuentes de imagen */}
          <picture>
            {/* Imagen más pequeña para pantallas más pequeñas */}
            <source srcSet="/titulo2.png" media="(max-width: 200px)" />
            {/* Imagen para pantallas grandes */}
            <img src="/titulo2.png" alt="Titulo" className={styles.centeredTitle} width={900} height={200} />
          </picture>

          {/* Ajusta el tamaño de HeaderDeco2 y colócalo debajo del título */}
          <Image src="/HeaderDeco2.svg" className={styles.deco2} width={122} height={11} />
        </div>
      </div>

      {/* Resto del contenido del header */}
      <NavBar />
      <Image src="/HeaderDeco3.svg" className={styles.deco3} width={213} height={45} />
      <Image src="/HeaderLogIn.svg" className={styles.login} width={132} height={132} />
    </header>
  );
};

export default Header;

