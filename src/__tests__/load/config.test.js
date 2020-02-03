require('../../config/dotenv');
const loadtest = require('loadtest');

const config = {
  headers: {},
  concurrency: 50,
  maxRequests: 500,
  maxSeconds: 900,
  requestsPerSecond: 10,
  contentType: 'application/json',
  quiet: false
};

/**
 * @param {loadtest.LoadTestOptions} options
 * @returns {Promise<loadtest.LoadTestResult>}
 */
function loadTest(options) {
  return new Promise((resolve, reject) =>
    loadtest.loadTest({ ...config, ...options }, (err, res) => {
      if (err) {
        return reject(err);
      }

      return resolve(res);
    })
  );
}

module.exports = { config, loadTest };
