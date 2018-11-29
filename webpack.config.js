const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');//responsavel por ler osarquivos css

//visivel fora do arquivo
module.exports = {
  entry: './ex/index.js',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  module: {
    //é quem vai carregar os arquivos
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("css-loader")
    }]
  }
}
