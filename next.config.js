const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@component'] = path.join(__dirname, 'src');
    config.resolve.alias['~component'] = path.join(__dirname, 'src'); // Modificación aquí
    config.resolve.alias['@component/styles'] = path.join(__dirname, 'src/styles'); // Añadido para alias de estilos
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "fs": false,
      "tls": false,
      "net": false,
      "dns": false,
    };
    return config;
  },
};