var path = require('path');

module.exports = {
  paths: {
    src: {
      js: path.join(__dirname, './src/app.js'),
      css: path.join(__dirname, './src/css/app.css'),
      html: path.join(__dirname, './src/index.html')
    },
    watch: {
      js: path.join(__dirname, './src/**/*.js'),
      css: path.join(__dirname, './src/css/**/*.css'),
      html: path.join(__dirname, './src/index.html')
    },
    dist: path.join(__dirname, './dist'),
    package: path.join(__dirname, '../package.json')
  }
};
