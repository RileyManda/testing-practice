const webpackTestConfig = require('./webpack.test.config.js');

module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!your-webpack-related-module)',
    'webpack.test.config.js',
  ],
  webpack: webpackTestConfig,
};
