const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Todo List 2',
    })
  ],
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpg|jpeg|svg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|ttf|otf|eot)$/i,
            type: 'asset/resource',
        }
    ]
  },
};


