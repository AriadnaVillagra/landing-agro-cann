import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Contacto.module.css';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
  
    // Agrega logs para rastrear el flujo del código
    console.log('Antes de construir el objeto de datos');
  
    const cuerpoCorreo = `
      Nombre: ${nombre}
      Apellido: ${apellido}
      Email: ${email}
      Mensaje: ${mensaje}
    `;
  
    const subject = `Consulta desde el formulario de contacto - ${email}`;
    const mailtoLink = `mailto:agro.cann.ig@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(cuerpoCorreo)}`;
  
    console.log('Antes de abrir el enlace de correo electrónico');
  
    // Intenta cambiar a window.open(mailtoLink) si window.location.href no funciona como esperas
    window.location.href = mailtoLink;
  
    console.log('Después de abrir el enlace de correo electrónico');
  };
  

  return (
    <>
      <Head>
        <title>Contacto</title>
      </Head>
      <main className={styles.main}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </label>
          <br />
          <label>
            Apellido:
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Mensaje:
            <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </main>
    </>
  );
}
