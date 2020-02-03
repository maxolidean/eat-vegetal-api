/**
 * @param {Promise<any>} promise
 * @param {number} timeout
 * @returns {Promise<any>}
 */
function promiseTimeout(promise, timeout) {
  const error = new Error(`Timeout of ${timeout}ms exceeded`);

  error.name = 'TimeoutError';

  const timeoutPromise = new Promise((resolve, reject) =>
    setTimeout(reject, timeout, error)
  );

  return Promise.race([timeoutPromise, promise]);
}

module.exports = { promiseTimeout };
