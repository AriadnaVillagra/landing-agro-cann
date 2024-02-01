// _app.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: '1' }}> {/* Este div se expandirá para ocupar todo el espacio restante */}
        <Component {...pageProps} />
      </div>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
}

export default App;
