//crear conexion con la base de datos

/*
1- importat dot env
2- importar mysql2
3- importar las 4 varibales de entorno creadas;
    host, user, password y name de la base de datos(schema)
    del file .env
4- crear y exportar el pool pool.promise

*/
require("dotenv").config();
const mysql = require("mysql2");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

module.exports = pool.promise();
