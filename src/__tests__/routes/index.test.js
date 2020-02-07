/* eslint-disable global-require, mocha/no-setup-in-describe */
context('Routes v1', () => {
  require('./v1/example/index.test');
  require('./v1/vegetables/index.test');
  require('./v1/upload/index.test');
});
