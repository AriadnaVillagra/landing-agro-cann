import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerStyle}>
      <div className={styles.footerContent}>
        <div className={styles.row}>
          <div className={styles.logoSection}>
            <Image src='/Logo4x.png' className={styles.footerLogo} width={300} height={300} alt="Logo" />
          </div>

        </div>
        <column className={styles.column}>
          <div className={styles.columnContent}>
          <div>
              <a href="https://www.instagram.com/agro.cann.ig/" target="_blank" rel="noopener noreferrer" className={styles.contactInfo}>
                INSTAGRAM
              </a>
              <a href="https://www.instagram.com/agro.cann.ig/" target="_blank" rel="noopener noreferrer">
                <Image src='/instagram.png' className={styles.instagramLogo} width={30} height={30} alt="Instagram Logo" />
              </a>
            </div>
            <div>
            <p className={styles.contactInfo}>FAQS</p>
            </div>
            <p className={styles.contactInfo}>CONTACTANOS</p>
            <div>
              <a href="mailto:agro.cann.ig@gmail.com" className={styles.contactEmail}>
                agrocannig@gmail.com
              </a>
              <a href="mailto:agro.cann.ig@gmail.com">
                <Image src='/email.png' className={styles.emailLogo} width={60} height={60} alt="Email Logo" />
              </a>
            </div>
          </div>
        </column>
      </div>
    </footer>
  );
};

export default Footer;
