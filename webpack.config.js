const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';
const DEBUG = ENV !== 'production';

const devEntries = ['react-hot-loader/patch', 'webpack-hot-middleware/client'];
const sassLoaders = ['style-loader', 'css-loader', 'sass-loader'];

const plugins = [
  new CopyWebpackPlugin([
    { from: 'assets/images/**', to: '.', context: './src' },
  ]),
].concat(DEBUG ?
  new webpack.HotModuleReplacementPlugin() :
  new ExtractTextPlugin('app.css')
);

module.exports = {
  mode: ENV,
  target: 'web',
  entry: (DEBUG ? devEntries : []).concat([
    './src',
    './src/styles/index.sass',
  ]),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader'],
      },
      {
        test: /\.sass$/,
        use: DEBUG ? sassLoaders : ExtractTextPlugin.extract(
          sassLoaders.filter(f => (f !== 'style-loader'))
        ),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets/fonts/',
          },
        }],
      },
    ],
  },
  devtool: DEBUG ? 'cheap-module-eval-source-map' : undefined,
  plugins,
};
