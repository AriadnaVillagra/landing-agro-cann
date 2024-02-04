// _app.jsx
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div style={{ flex: '1' }}>
        <Component {...pageProps} />
      </div>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default App;
