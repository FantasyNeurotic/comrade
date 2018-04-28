'use strict';

const { Controller } = require('egg');

class LoginController extends Controller {
  async exc() {

    this.ctx.body = 'success';
  }
}

module.exports = LoginController;
