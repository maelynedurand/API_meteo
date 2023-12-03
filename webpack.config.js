const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/meteo.mjs', './src/getCoordonnees.mjs'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};