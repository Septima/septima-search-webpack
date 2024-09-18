const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of your app
  entry: './src/index.js',

  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },

  // Mode: 'development' or 'production'
  mode: 'development',

  // Optional: Enable source maps for easier debugging
  devtool: 'source-map',

  // Webpack dev server (optional)
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Use 'static' instead of 'contentBase'
    },
    port: 9000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Specify the HTML template
    }),
  ],
};