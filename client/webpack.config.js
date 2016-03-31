var path = require('path');
var settings = require('./settings');

module.exports = {
    entry: settings.paths.src.js,
    output: {
      path: settings.paths.dist,
      filename: 'app.js'
    },
    module: {
        loaders: [
           { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
};
