import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '../styles/Nosotros.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Nosotros</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.tituloReprocann}>Personería Jurídica</h1>
          <p className={styles.paragraph}>
            IGJ Nº 1979147 Res 1037 del 30/08/2022 Registro Nro 1998 libro 3 Asociaciones Civiles
          </p>
          <p className={styles.paragraph}>
            CUIT 30-71777020-6
          </p>
          <p className={styles.paragraph}>
            Registro Nacional de Organizaciones de la Sociedad Civil
          </p>
          <p className={styles.paragraph}>
            Vinculadas con la Salud Registro Nº 1621
          </p>
          <p className={styles.paragraph}>
            (Legajo RL-2023-05909407-APN-DNRIEI#MS)
          </p>
        </div>
      </main>
    </>
  );
}
