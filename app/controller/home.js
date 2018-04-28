'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;

    if (ctx.isAuthenticated()) {
      ctx.body = `<div>
        <h2>${ctx.path}</h2>
        <hr>
        Logined user: <img src="${ctx.user.avatar}"> ${ctx.user.loginname} / ${ctx.user._id} | <a href="/logout">Logout</a>
        <hr>
        <a href="/">Home</a> | <a href="/user">User</a>
      </div>`;
    } else {
      ctx.session.returnTo = ctx.path;
      ctx.body = `
        <div>
          <h2>${ctx.path}</h2>
          <hr>
          Login with
          <a href="/passport/weibo">Weibo</a> | <a href="/passport/github">Github</a> |
          <a href="/passport/bitbucket">Bitbucket</a> | <a href="/passport/twitter">Twitter</a>
          <hr>
          <a href="/">Home</a> | <a href="/user">User</a>
        </div>
      `;
    }
  }

  async isIos() {
    this.ctx.body = `isIOS: ${this.ctx.isIOS}`;
  }
}

module.exports = HomeController;
