require('./config/dotenv');
const { createServer } = require('restify');
const applyRoutes = require('./routes');
const { pre, use, on } = require('./middlewares');
const { API_PORT } = process.env;

const server = createServer({
  name: 'eat-vegetal-api'
});

applyRoutes(server);

server.pre(...pre);
server.use(...use);
server.on('restifyError', on.restifyError);
server.get('/status', (req, res) => res.send('EAT-VEGETAL-API Service is up & running on port ' + API_PORT + '.\n >>>>> Eating more vegetables in your daily life makes you happier. <<<<<'));

// eslint-disable-next-line no-console
server.listen(API_PORT, () => console.log('EAT-VEGETAL-API Service is up & running on port ' + API_PORT + '.\n >>>>> Eating more vegetables in your daily life makes you happier. <<<<<'));

process.on('uncaughtException', (e) => {
  console.log(e);
  process.exit(1);
});

process.on('unhandledRejection', (r) => {
  console.log(r);
  process.exit(1);
});

module.exports = server;
