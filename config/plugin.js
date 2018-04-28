'use strict';

const path = require('path');

exports.ua = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-ua'),
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
// {app_root}/config/plugin.js
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.passport = {
  enable: true,
  package: 'egg-passport',
};

exports.passportGithub = {
  enable: true,
  package: 'egg-passport-github',
};

exports.passportLocal = {
  enable: true,
  package: 'egg-passport-local',
};
