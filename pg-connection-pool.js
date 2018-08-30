"use strict"
const pg = require("pg");

// Constructing an object with pg.Pool and storing it the pool variable
// the pool object contains: PostgreSQL credentials
const pool = new pg.Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "ExpressShopDB",
  ssl: false
});

// Exporting the pool object so we can use it in our routing files
module.exports = pool;