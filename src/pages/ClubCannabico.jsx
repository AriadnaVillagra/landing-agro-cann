// pages/ClubCannabico.js

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/ClubCannabico.module.css';

const ClubCannabico = () => {
  return (
    <>
      <Head>
        <title>Clubes Cannabicos</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.box1}>
          <Image src="/ComoTeAyudamosDeco1.svg" alt="Decoración 1" className={styles.deco1} width={50} height={50} />
          <h1>Clubes Cannabicos</h1>
        </div>
        <div className={styles.box2}>
          <Image src="/ClubesCannabicosCirculo.svg" alt="Círculo" className={styles.image} width={50} height={50}/>
          <Image src="/ClubesCannabicosCuadrado.svg" alt="Cuadrado" className={styles.image} width={50} height={50}/>
          <Image src="/ClubesCannabicosTriangulo.svg" alt="Triángulo" className={styles.image}width={50} height={50} />
          <p>
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
          <Image src="/ClubesCannabicosDeco1.svg" alt="Decoración 1" className={styles.deco1} width={50} height={50}/>
          <p>
            Los clubes de cultivo en Argentina están representados por estos derechos que otorga la Ley.
            Producimos cannabis para terceros, quienes a través del Registro, son socios y socias de nuestro
            club de cultivo.
          </p>
        </div>
        <div className={styles.box4}>
          <Image src="/ClubesCannabicosCosecha.svg" alt="Cosecha" className={styles.image} width={50} height={50} />
          <p>
            La Ley 27350 permite a los cultivadores solidarios, brindarles un servicio donde los socios cubren los costos del funcionamiento integral del Club.
            Como persona jurídica (ONG) una asociación civil puede emitir remuneraciones para personal que realiza tareas variadas dentro del cultivo.
            Para establecer los compromisos monetarios (cuota que paga el socio frente a costo de producción) se confeccionan contratos que rigen esta relación y establecen sus condiciones.
            Conociendo la Ley podés organizarte para producir cannabis para usuarios y usuarias registrados.  
          </p>
          <Image src="/ClubesCannabicosDeco2.svg" alt="Decoración 2" className={styles.deco2} width={50} height={50} />
        </div>
      </main>
    </>
  );
};

export default ClubCannabico;
