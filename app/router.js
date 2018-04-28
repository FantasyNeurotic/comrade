'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // github oauth
  app.passport.mount('github');
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.login.exc);
  router.get('/ios', controller.home.isIos);
  router.get('/users', controller.user.get);
  router.post('/signUp', controller.user.signUp);
};
