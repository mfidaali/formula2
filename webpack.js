var path = require('path');
var webpack = require('webpack');

var debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname,

  devtool: process.env.NODE_ENV === 'development' ? 'eval' : 'source-map',

  entry: {
    calcium: './app/assets/js/formula_calcium'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].build.js'
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true,
      mangle: false
    }),
  ]
};
