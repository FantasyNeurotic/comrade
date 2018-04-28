'use strict';

const Service = require('egg').Service;
const uuid = require('uuid');

class UserService extends Service {
  async getByUserName(name) {
    const users = await this.ctx.model.User.find({ name });

    return users[0];
  }

  async save({ name, loginname, pass, email, avatar_url, active, extraData }) {
    const user = new this.ctx.model.User();
    user.name = name;
    user.loginname = loginname;
    user.pass = pass;
    user.email = email;
    user.avatar = avatar_url;
    user.extraData = extraData;
    user.active = active || false;
    user.accessToken = uuid.v4();
    return user.save();

  }
}

module.exports = UserService;
