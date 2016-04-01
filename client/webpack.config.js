var settings = require('./settings');

module.exports = {
    entry: settings.paths.src.js,
    output: {
      path: settings.paths.dist,
      filename: 'app.js'
    },
    module: {
      preLoaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'standard'}
      ],
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
      ]
    },
    standard: {
      parser: 'babel-eslint'
    }
};
