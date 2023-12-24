const { Pool } = require('pg');

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'payment',
  password: 'paymentpass123',
  port: 5432,
});

module.exports = pool;
