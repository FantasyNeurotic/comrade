'use strict';

module.exports = app => {
  app.passport.verify(async (ctx, user) => {
    // 调用 service 注册新用户
    const existsUser = await ctx.service.user.getByUserName(user.name);
    if (existsUser) {
      return existsUser;
    }
    console.log(user.profile._raw);
    const newUser = await ctx.service.user.save({
      name: user.name,
      loginname: user.displayName,
      pass: user.accessToken,
      email: user.profile.email,
      avatar_url: user.photo,
      active: true,
      extraData: user.profile._raw,
    });
    return newUser;
  });
};
