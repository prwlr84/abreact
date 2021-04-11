const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
  devServer: { historyApiFallback: true },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(png|jpe?g|gif|cur)$/i,
        exclude: /node_modules/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
};
