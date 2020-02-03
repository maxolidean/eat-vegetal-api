const { api } = require('../../config.test');

const { PATH_BASE } = require('./const.test');

describe('GET', () => {
  it('should get a example', () => api.get(PATH_BASE).expect(200));
});
