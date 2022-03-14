const path = require('path');

module.exports = {

  mode: 'production',

  watch: true,

  entry: './src/app/Router.js',

  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },

  module: {
    rules: [

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }

    ]
  }

};
