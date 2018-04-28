'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1521021797946_7457';

  // add your config here
  config.middleware = [ 'errorHandler' ];
  config.errorHandler = {
    match: '/api',
  };
  config.security = {
    ignore: '/api/',
    csrf: {
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1/testdb',
    options: {},
  };

  config.passportGithub = {
    key: '70824a2970e18085864c',
    secret: 'f15bee09cfc69889a8b36c753109c57018cdb70e',
    callbackURL: '/passport/github/callback',
  };

  return config;
};
