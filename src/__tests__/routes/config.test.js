require('../../config/dotenv');
const request = require('supertest');

const { API_URL } = process.env;
const api = request.agent(API_URL);

module.exports = { api };
