var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var env = process.env.NODE_ENV || 'production';


var embedFileSize = 65536;
var assetsLoaders = [
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')
  },
  {test: /\.json$/, loader: 'json'},
  {test: /\.mp4$/, loader: 'url?limit=' + embedFileSize + '&mimetype=video/mp4'},
  {test: /\.svg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml'},
  {test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'},
  {test: /\.jpg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'},
  {test: /\.gif$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'},
  {
    test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url?limit=' + embedFileSize
  }
];

var entry = [
  './src/index.js'
];

var htmlWebpackPlugin =     new HtmlWebpackPlugin({
      title: 'Dominion Card Spoilers',
      filename: 'index.html',
      // template: 'index.template.html',
      favicon: path.join(__dirname, 'assets', 'images', 'favicon.png')
    });

var production = {
  devtool: 'source-map',
  entry: entry,
  output: {filename: 'bundle.js', path: path.resolve('dist')},
  plugins: [
    htmlWebpackPlugin,
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + env + '"'
      }
    })
  ],

  module: {
    loaders: assetsLoaders.concat([
      {test: /\.jsx?$/, loader: 'babel', include: [path.resolve('src')]}
    ])
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true}
};


var development = {
  devtool: 'eval',

  entry: entry.concat([
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server'
  ]),
  output: {filename: 'bundle.js', path: path.resolve('./dist')},
  plugins: [
    htmlWebpackPlugin,
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + env + '"'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: assetsLoaders.concat([
      {test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: [path.resolve('src')]}
    ]),
    preLoaders: [
      {test: /\.jsx?$/, loaders: ['eslint'], include: [path.resolve('src')]}
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true},
  eslint: {configFile: '.eslintrc'},
  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: {
      // Do not show list of hundreds of files included in a bundle
      chunkModules: false,
      colors: true
    }
  }
};


module.exports = env === 'production' ? production : development;
