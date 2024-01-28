const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@component'] = path.join(__dirname, 'src/*');
    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "tls": false,
        "net": false,
        "dns": false,
      },
    };
    return config;
  },
};
