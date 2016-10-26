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
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss/,
        loader: 'style!css!sass'
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|woff(4)?)(\?[a-z0-9]+)?$/,
        loader: 'file?name=bundles/[hash].[ext]'
      },
      {
        test: /\.(html)$/,
        loader: 'raw'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html']
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
  ],
  devServer: {
    host: '127.0.0.1'
  }
};