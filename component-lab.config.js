var getWebPackConfig = require('./webpack.config');

module.exports = {
  webpackConfig: getWebPackConfig,
  host: 'localhost',
  port: 8090,
  include: [],
  suites: {
    feature: './lab/lab-configuration.module.ts'
  }
};
