var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(ts)$/,
        exclude: /(node_modules)/,
        loader: 'ts'
      },
      {
        test: /\.(html)$/,
        loader: 'html'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
  ]
};