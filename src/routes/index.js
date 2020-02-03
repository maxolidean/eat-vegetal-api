const routesV1 = require('./v1');

module.exports = server => {
  routesV1.applyRoutes(server, '/v1');
};
