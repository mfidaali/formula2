var path = require('path');
var webpack = require('webpack');

var debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname,

  devtool: process.env.NODE_ENV === 'development' ? 'eval' : 'source-map',

  entry: {
      calcium:          './app/assets/js/formula_calcium',
      bmi:              './app/assets/js/formula_bmi',
      korperoberflache: './app/assets/js/formula_korperoberflache',
      qtzeit:           './app/assets/js/formula_qtzeit',
      bicarbonate:      './app/assets/js/formula_bicarbonate',
      anionenluecke:    './app/assets/js/formula_anionenluecke'
      
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
