var path = require('path');
var isProd = (process.env.NODE_ENV === 'production');

var PATHS = {
  app: path.join(__dirname, '/src/js/'),
  build: path.join(__dirname, '/app/')
};

var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

function getPlugins() {
  var plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({         // Also generate a test.html 
      filename: 'index.html',
      template: './src/index.html'
    })
  ];

  if (isProd) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compress: {
          warnings: false
        }
      })
    );
  }

  return plugins;
}

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: './appt',
    filename: 'bundle-[hash:6].js'              //https://webpack.github.io/docs/long-term-caching.html
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.html$/,
      loader: "raw"
    }, {
      test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/],
      loader: 'file?name=fonts/[name].[ext]'
    }]
  },
  plugins: getPlugins()
};