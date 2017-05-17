const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const styleScss = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: {
    app: './src/app.js', 
    lesson01: './src/01/script.js',
    lesson02: './src/02/script.js',
    lesson03: './src/03/script.js',
    lesson04: './src/04/script.js',
    lesson05: './src/05/script.js',
    lesson06: './src/06/script.js',
    lesson07: './src/07/script.js',
    lesson08: './src/08/script.js',
    lesson10: './src/10/script.js'
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
    new HtmlWebpackPlugin({
      title: 'Lesson 03',
      hash: true,
      chunks: ['lesson03'],
      filename: 'lesson03.html',
      template: './src/03/index.html' 
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 04',
      hash: true,
      chunks: ['lesson04'],
      filename: 'lesson04.html',
      template: './src/04/index.html' 
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 05',
      hash: true,
      chunks: ['lesson05'],
      filename: 'lesson05.html',
      template: './src/05/index.html' 
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 06',
      hash: true,
      chunks: ['lesson06'],
      filename: 'lesson06.html',
      template: './src/06/index.html' 
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 07',
      hash: true,
      chunks: ['lesson07'],
      filename: 'lesson07.html',
      template: './src/07/index.html' 
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 08',
      hash: true,
      chunks: ['lesson08'],
      filename: 'lesson08.html',
      template: './src/08/index.html' 
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 10',
      hash: true,
      chunks: ['lesson10'],
      filename: 'lesson10.html',
      template: './src/10/index.html' 
    }),
    styleScss
  ]
}
