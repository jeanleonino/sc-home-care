var settings = require('./settings');

module.exports = {
    entry: settings.paths.src.js,
    output: {
      path: settings.paths.dist,
      filename: 'app.js'
    },
    resolve: {
      root: settings.paths.src.root,
      extensions: ['', '.js']
    },
    module: {
      preLoaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'standard'}
      ],
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}
      ]
    },
    standard: {
      parser: 'babel-eslint'
    }
};
