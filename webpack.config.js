const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const styleScss = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: {
    app: './src/app.js', 
    lesson01: './src/01/script.js',
    lesson02: './src/02/script.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.scss$/, 
        use: styleScss.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist' 
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    //stats: 'errors-only'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vanilla JS learning project',
      hash: true,
      chunks: ['app'],
      template: './src/index.html' // Load a custom template (ejs by default see the FAQ for details)
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 01',
      hash: true,
      chunks: ['lesson01'],
      filename: 'lesson01.html',
      template: './src/01/index.html' 
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 02',
      hash: true,
      chunks: ['lesson02'],
      filename: 'lesson02.html',
      template: './src/02/index.html' 
    }),
    styleScss
  ]
}
