const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: "ballast.proxy.rlwy.net",
  user: "root",
  password: "kjqPQNoJjvxkqeamNBhxTzmDHQBGOUsy",
  database: "railway",
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise(); 
