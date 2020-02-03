/* NODE_ENV = development | production | test */
const dotenv = require('dotenv');

const { NODE_ENV } = process.env;
const path = `.env${NODE_ENV ? `.${NODE_ENV}` : ''}`;

process.env.NODE_ENV = NODE_ENV || 'development';

module.exports = dotenv.config({ path });
