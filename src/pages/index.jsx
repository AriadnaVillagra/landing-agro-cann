import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Agro Cann</title>
      </Head>
      
      <main className={styles.main}>
      <h1 className={styles.visuallyHidden}>AgroCann</h1> {/* Tu encabezado h1 con el nombre de la empresa */}
        {/* Resto del contenido de tu página */}
      </main>
     
    </>
  )
}
