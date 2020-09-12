const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//responsavel por ler osarquivos css

//visivel fora do arquivo
module.exports = {
  entry: './ex-commonJS/index.js',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  module: {
    //é quem vai carregar os arquivos
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  }
}
