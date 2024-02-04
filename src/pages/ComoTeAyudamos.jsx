// pages/ComoTeAyudamos.js

import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../styles/ComoTeAyudamos.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function ComoTeAyudamos() {
  return (
    <>
      <Head>
        <title>Como Te Ayudamos</title>
        <meta name="description" content="Servicios de Club Cannabico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-final-white.png" />
      </Head>
      <main className={`${styles.main} ${styles.comoTeAyudamosSection}`}>
        <div className={styles.recuadro1}>
          {/* Decoración izquierda */}
          <Image src="/ComoTeAyudamosDeco1.svg" alt="Decoración izquierda" className={styles.decoracionIzquierda} width={50} height={50} />

          <div className={styles.serviciosTitle}>
            <p>Servicios</p>
          </div>

          {/* Decoración derecha */}
          <Image src="/ComoTeAyudamosDeco2.svg" alt="Decoración derecha" className={styles.decoracionDerecha} width={50} height={50} />

          <p className={styles.teAyudamosText}>Te ayudamos con lo que necesitas</p>
        </div>
        <div className={styles.recuadro2}>
          <Image src="/ComoTeAyudamos.jpg" width={641} height={431} alt="Imagen de marihuana" />
        </div>
        <div className={styles.recuadro3}>
          <ul className={styles.recuadro3Text}>
            <li>Cultivo vegetativo</li>
            <li>Floración y Esquejes</li>
            <li>Secado</li>
            <li>Manipulación y Trimming</li>
            <li>Cuidado y reproducción</li>
            <li>Guardia y custodia</li>
          </ul>
        </div>
        <div className={styles.recuadro4}>
          <p className={styles.recuadro4Text}>
            Nuestro objetivo es colaborar con el acceso a la salud integral de las personas a las cuales se les indique como modalidad terapéutica, medicinal o paliativa del dolor, el uso de la planta de Cannabis y sus derivados, conforme la normativa vigente.
            Quien no puede acceder a un cultivo hogareño, tiene la posibilidad de acceder a cannabis de altísima calidad hecho por cultivadores con experiencia mediante protocolos estandarizados.
            Venimos a proponer una opción para quienes necesiten un material libre de agrotóxicos con un seguimiento diario de parámetros de cultivo.
            Tomamos como responsabilidad entregar un producto apto para uso medicinal.
          </p>
        </div>
      </main>
    </>
  );
}
