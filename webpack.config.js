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
    lesson10: './src/10/script.js',
    lesson11: './src/11/script.js',
    lesson12: './src/12/script.js',
    lesson13: './src/13/script.js',
    lesson14: './src/14/script.js',
    lesson15: './src/15/script.js',
    lesson16: './src/16/script.js',
    lesson17: './src/17/script.js',
    lesson18: './src/18/script.js',
    lesson19: './src/19/script.js',
    lesson20: './src/20/script.js',
    lesson22: './src/22/script.js',
    lesson24: './src/24/script.js',
    lesson25: './src/25/script.js',
    lesson26: './src/26/script.js',
    lesson27: './src/27/script.js',
    lesson28: './src/28/script.js',
    lesson29: './src/29/script.js'
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
    new HtmlWebpackPlugin({
      title: 'Lesson 11',
      hash: true,
      chunks: ['lesson11'],
      filename: 'lesson11.html',
      template: './src/11/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 12',
      hash: true,
      chunks: ['lesson12'],
      filename: 'lesson12.html',
      template: './src/12/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 13',
      hash: true,
      chunks: ['lesson13'],
      filename: 'lesson13.html',
      template: './src/13/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 14',
      hash: true,
      chunks: ['lesson14'],
      filename: 'lesson14.html',
      template: './src/14/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 15',
      hash: true,
      chunks: ['lesson15'],
      filename: 'lesson15.html',
      template: './src/15/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 16',
      hash: true,
      chunks: ['lesson16'],
      filename: 'lesson16.html',
      template: './src/16/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 17',
      hash: true,
      chunks: ['lesson17'],
      filename: 'lesson17.html',
      template: './src/17/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 18',
      hash: true,
      chunks: ['lesson18'],
      filename: 'lesson18.html',
      template: './src/18/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 19',
      hash: true,
      chunks: ['lesson19'],
      filename: 'lesson19.html',
      template: './src/19/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 20',
      hash: true,
      chunks: ['lesson20'],
      filename: 'lesson20.html',
      template: './src/20/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 22',
      hash: true,
      chunks: ['lesson22'],
      filename: 'lesson22.html',
      template: './src/22/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 24',
      hash: true,
      chunks: ['lesson24'],
      filename: 'lesson24.html',
      template: './src/24/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 25',
      hash: true,
      chunks: ['lesson25'],
      filename: 'lesson25.html',
      template: './src/25/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 26',
      hash: true,
      chunks: ['lesson26'],
      filename: 'lesson26.html',
      template: './src/26/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 27',
      hash: true,
      chunks: ['lesson27'],
      filename: 'lesson27.html',
      template: './src/27/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 28',
      hash: true,
      chunks: ['lesson28'],
      filename: 'lesson28.html',
      template: './src/28/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Lesson 29',
      hash: true,
      chunks: ['lesson29'],
      filename: 'lesson29.html',
      template: './src/29/index.html'
    }),
    styleScss
  ]
}
