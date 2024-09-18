import  path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();

export default {
  // Entry point of your app
  entry: './src/index.ts',

  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true,
    module: true,
  },
  experiments: {
    outputModule: true,
    topLevelAwait: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // Add .ts and .tsx extensions to resolve TypeScript files
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Matches both .ts and .tsx files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
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