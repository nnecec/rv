const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  entry: [
    `webpack-dev-server/client?http://localhost:8001`,
  ],
  output: {
    chunkFilename: 'js/[name].chunk.js'
  },
  devServer: {
    inline: true,
    hotOnly: true,
    port: 8001
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new Webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader?sourceMap=true']
      }
    ]
  }
});
