const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "./js/bundle.js",
    clean: {
      keep: /index.html/
    },
  },

  target: 'node',

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },

  devServer: {
    static: './public',
    port: 3000
  }
}
