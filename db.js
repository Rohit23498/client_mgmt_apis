const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Gup$hup.i0@25",
  database: "whatsappbot",
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise(); 