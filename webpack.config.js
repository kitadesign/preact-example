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

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed'
              },
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  },

  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },

  devServer: {
    static: './public',
    port: 3000
  },
  devtool: 'source-map'
}
