'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async get() {
    const result = await this.service.user.get();
    this.ctx.body = result;
  }

  async signUp() {
    const result = await this.service.user.save();
    this.ctx.body = result;
  }
}

module.exports = UserController;
