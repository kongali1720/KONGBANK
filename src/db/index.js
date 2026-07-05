const { Pool } = require("pg");

const pool = new Pool({
  user: "kong",
  host: "localhost",
  database: "kongbank",
  password: "kongpass",
  port: 5432,
});

module.exports = pool;
