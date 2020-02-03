const restify = require('restify');

const routesV1 = require('./v1');

/**
 * @param {restify.Server} server
 * @returns {void}
 */
module.exports = server => {
  routesV1.applyRoutes(server, '/v1');
};
