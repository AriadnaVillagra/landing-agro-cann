import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Reprocann.module.css'

const inter = Inter({ subsets: ['latin'] })

const handleRegulationClick = () =>
  window.open('https://www.boletinoficial.gob.ar/detalleAviso/primera/237208/20201112', '_blank'); // Abre la URL en una nueva pestaña

const handleRegulationClick2 = () =>
  window.open('https://www.argentina.gob.ar/normativa/nacional/ley-27350-273801', '_blank');

export default function Reprocann() {
  return (
    <>
      <Head>
        <title>Reprocann</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.tituloReprocann}>REPROCANN:</h1>
          <p className={styles.paragraph}>
            EL REPROCANN ES UNA POLÍTICA DEL ESTADO ARGENTINO PUESTA EN MARCHA EN 2021 A TRAVÉS DE LA NUEVA REGLAMENTACIÓN
            <a className={styles.link} onClick={handleRegulationClick}> (REG 883/2020) </a>
            DE LA LEY DE CANNABIS MEDICINAL <a className={styles.link} onClick={handleRegulationClick2}>(27350)</a> SANCIONADA EN 2017.
            RECONOCE EL DERECHO A LA SALUD INTEGRAL, AL AUTOCULTIVO, AL CULTIVO SOLIDARIO, AL TRANSPORTE CONTROLADO y
            permite los proyectos de investigación médica y científica sobre cannabis EN TODAS LAS PROVINCIAS DEL TERRITORIO NACIONAL.
            Es la primera regulación que amplía derechos sobre la planta de cannabis en la historia argentina.</p>
        </div>
      </main>
    </>
  )
}