const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

module.exports = api;
