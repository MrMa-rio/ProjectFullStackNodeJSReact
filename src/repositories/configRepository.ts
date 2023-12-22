import mysql, { Connection } from 'mysql2';
require("dotenv").config();

const host = process.env.HOST as string
const user = process.env.USER as string
const password = process.env.PASSWORD as string
//=============================================

// Realizando a conexão com o banco MySQl
export const connection: Connection = mysql.createConnection({
  host: host,
  user: user,
  port: 3306,
  password: password,
  database: "db_restaurant"
});


