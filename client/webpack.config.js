var path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/app.js'),
    output: {
      path: __dirname,
      filename: './dist/app.js'
    },
    module: {
        loaders: []
    }
};
