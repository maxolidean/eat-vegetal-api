const { plugins } = require('restify');

const { actual } = require('./cors');

const use = [
  actual,
  plugins.throttle({
    burst: 100,
    rate: 50,
    ip: true,
    overrides: {
      '192.168.1.1': {
        rate: 0,
        burst: 0
      }
    }
  }),
  plugins.queryParser(),
  plugins.bodyParser()
];

module.exports = use;
