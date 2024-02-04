// ContactoForm.jsx

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Head from 'next/head';
import styles from '../styles/Contacto.module.css';

function ContactoForm() {
  const [state, handleSubmit] = useForm("moqgewyo");

  if (state.succeeded) {
    return (
      <div className={styles.successContainer}>
        <p>¡Gracias por tu mensaje!</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label htmlFor="name">Nombre:</label>
      <input
        id="name"
        type="text"
        name="name"
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />

      <label htmlFor="surname">Apellido:</label>
      <input
        id="surname"
        type="text"
        name="surname"
      />
      <ValidationError
        prefix="Surname"
        field="surname"
        errors={state.errors}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message">Mensaje:</label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

 {/* Nueva fila para preguntas y respuestas */}
 <div className={styles.questionRow}>
      {/* Pregunta sobre "reprocann" */}
      <div className={styles.question}>
        <label htmlFor="reprocann">
          ¿Tenés Reprocann?
        </label>
      </div>
      <div className={styles.answer}>
        <select id="reprocann" name="reprocann">
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Pregunta sobre la edad */}
      <div className={styles.question}>
        <label htmlFor="edad">
          ¿Sos mayor de edad?
        </label>
      </div>
      <div className={styles.answer}>
        <select id="edad" name="edad">
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>

      {/* Botón de envío */}
      <button type="submit" disabled={state.submitting}>
        Enviar
      </button>
      
     {/* Contenedor para mostrar mensajes */}
     {state.submitting && (
          <div className={styles.messageContainer}>
            <p>Enviando mensaje...</p>
          </div>
        )}

        {state.succeeded && (
          <div className={styles.successContainer}>
            <p>¡Gracias por tu mensaje!</p>
          </div>
        )}

        {state.errors && (
          <div className={styles.errorContainer}>
            <p>Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactoForm;
