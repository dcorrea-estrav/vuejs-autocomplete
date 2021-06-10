
require('es6-promise').polyfill();
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {

  entry: __dirname + '/../src/js/main.js',

  output: {
    path: __dirname + '/../build',
    publicPath: '/build/',
    filename: 'build.js',
    chunkFilename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]

};
