const webpack = require('webpack');

/**
 * Fast source maps rebuild quickly during development, but only give a link
 * to the line where the error occurred. The stack trace will show the bundled
 * code, not the original code. Keep this on `false` for slower builds but
 * usable stack traces. Set to `true` if you want to speed up development.
 */


module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './client/index.js',
  ],

  output: {
    path: __dirname,
    filename: './public/bundle.js',
    // publicPath: '/public/',
    publicPath: '/',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  context: __dirname,
  devtool: 'cheap-module-eval-source-map',
  resolve: { extensions: ['.js', '.jsx', '.json', '*'] },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: 'babel-loader' },
        ],

      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.(jpg|png)$/,
      //   use: {
      //     loader: 'url-loader'
      //   }
      // }
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf)$/,
        use: [{
          loader: 'file-loader',
          options: { name: '[path][name].[ext]' }
        }
        ],

      }
    ],
  },
  plugins: [

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  node: { fs: 'empty' },
};

