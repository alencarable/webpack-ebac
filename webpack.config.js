/*import { resolve } from 'path';

export const entry = './src/index.js';
export const output = {
    filename: 'main.js',
    path: resolve(__dirname, 'dist'),
};
*/


// From Webpack webpage, not converted to ES module as above
const path = require('path');
const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|c|sc)ss$/, //regex to find these extensions at the end of a file
        use: [
          MiniCssExtract.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i, // i to ignore case sensitive
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.(jpeg|jpg|png|svg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpack({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtract({
      filename: 'style.css',
    })
  ]
};