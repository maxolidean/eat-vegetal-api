require('./config/dotenv');
const { createServer } = require('restify');

const applyRoutes = require('./routes');
const { pre, use, on } = require('./middlewares');

const { API_PORT } = process.env;

const server = createServer({
  name: 'Restify'
});

applyRoutes(server);

server.pre(...pre);
server.use(...use);
server.on('restifyError', on.restifyError);
server.get('/status', (req, res) => res.send('Service is running!'));

// eslint-disable-next-line no-console
server.listen(API_PORT, () => console.log('Service is running!'));

process.on('uncaughtException', () => {
  process.exit(1);
});
process.on('unhandledRejection', () => {
  process.exit(1);
});

module.exports = server;
