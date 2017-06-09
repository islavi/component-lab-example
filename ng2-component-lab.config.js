var getWebPackConfig = require('./webpack.config');

module.exports = {
  webpackConfig: getWebPackConfig,
  host: 'localhost',
  port: 6007,
  include: [],
  suites: {
    feature: './lab/ng2-lab-configuration.module.ts'
  }
};
