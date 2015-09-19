'use strict';


var path = require('path');

const loaders = [
  {test: /\.css$/, loader: 'null'},
  {test: /\.mp4$/, loader: 'null'},
  {test: /\.svg$/, loader: 'null'},
  {test: /\.png$/, loader: 'null'},
  {test: /\.jpg$/, loader: 'null'},
  {test: /\.gif$/, loader: 'null'},
  {test: /\.(otf|eot|ttf|woff|woff2)/, loader: 'null'},

  // Loader for JSON, used in some tests
  {test: /\.json$/, loader: 'json'}
];

var webpackConfig = {
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: loaders.concat(process.env.COVERAGE ?
      [
        {test: /\.jsx?$/, loader: 'babel', include: [path.resolve('./test')]},
        {test: /\.js$/, loader: 'isparta', include: [path.resolve('./src')]}
      ] :
      [
        {
          test: /\.jsx?$/, loader: 'babel', include: [path.resolve('./src'), path.resolve('./test')]
        }
      ])
  },
  stats: {
    colors: true
  }
};


module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-core/browser-polyfill.js',
      'test/index.js'
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: {
        chunkModules: false,
        colors: true
      }
    },
    exclude: [],
    preprocessors: {
      'test/index.js': ['webpack']
    },
    reporters: ['progress'],
    coverageReporter: {
      dir: './coverage/',
      subdir: '.',
      reporters: [
        {type: 'html'},
        {type: 'lcovonly'},
        {type: 'text', file: 'text.txt'},
        {type: 'text-summary', file: 'text-summary.txt'}
      ]
    },
    captureTimeout: 90000,
    browserNoActivityTimeout: 60000,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
