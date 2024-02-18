// pages/ClubCannabico.js

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/ClubCannabico.module.css';

const ClubCannabico = () => {
  return (
    <>
      <Head>
        <title>Club Cannabico</title>
        <meta name="description" content="Servicios de Club Cannabico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-final-white.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.box1}>
          <Image src="/ComoTeAyudamosDeco1.svg" alt="Decoración 1" className={styles.deco1} width={50} height={50} />
          <h1>Clubes Cannabicos</h1>
        </div>
        <div className={styles.box2}>
          <Image src="/ClubesCannabicosCirculo.svg" alt="Círculo" className={styles.circle} width={100} height={100}/>
          <Image src="/ClubesCannabicosCuadrado.svg" alt="Cuadrado" className={styles.square} width={70} height={70}/>
          <Image src="/ClubesCannabicosTriangulo.svg" alt="Triángulo" className={styles.triangle}width={70} height={70} />
          <p className={styles.description}>
            En Argentina el cultivo de cannabis para sí o para terceros existe desde hace años.
            La Ley 27.350 de Cannabis Medicinal y sus actualizaciones, toman como eje central la
            necesidad de las personas de abastecerse de cannabis como un derecho a la salud integral.
            Quienes no puedan llevar adelante un cultivo por sus propios medios, o aquellas personas
            que opten por una alternativa de mayor calidad y con procesos que son difíciles de conseguir
            en un domicilio, tienen la posibilidad de asociarse a través del REPROCANN a cultivadores solidarios
            u ONGs para obtener su cuota mensual de flores o derivados de cannabis.
          </p>
        </div>
        <div className={styles.box3}>
          <Image src="/ClubesCannabicosDeco1.svg" alt="Decoración 1" className={styles.decoration1} width={50} height={50}/>
          <Image src="/ClubesCannabicosDeco2.svg" alt="Decoración 2" className={styles.decoration2} width={50} height={50} />
          <p className={styles.description}>
            Los clubes de cultivo en Argentina están representados por estos derechos que otorga la Ley.
            Producimos cannabis para terceros, quienes a través del Registro, son socios y socias de nuestro
            club de cultivo.
          </p>
        </div>
        <div className={styles.box4}>
          <Image src="/ClubesCannabicosCosecha.svg" alt="Cosecha" className={styles.cosecha} width={240} height={240} />
          <p className={styles.description}>
            La Ley 27350 permite a los cultivadores solidarios, brindarles un servicio donde los socios cubren los costos del funcionamiento integral del Club.
            Como persona jurídica (ONG) una asociación civil puede emitir remuneraciones para personal que realiza tareas variadas dentro del cultivo.
            Para establecer los compromisos monetarios (cuota que paga el socio frente a costo de producción) se confeccionan contratos que rigen esta relación y establecen sus condiciones.
            Conociendo la Ley podés organizarte para producir cannabis para usuarios y usuarias registrados.  
          </p>
        
        </div>
      </div>
    </>
  );
};

export default ClubCannabico;
