const { loadTest } = require('../../config.test');

const { URL_BASE } = require('./const.test');

describe('GET', () => {
  it('should get a example', () =>
    loadTest({
      url: URL_BASE,
      method: 'GET'
    }));
});
