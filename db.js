const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: "http://sql12.freesqldatabase.com/",
  user: "sql12786730",
  password: "qJ7hQeud6f",
  database: "sql12786730",
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise(); 
