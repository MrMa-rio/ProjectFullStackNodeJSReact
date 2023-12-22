var mysql = require('mysql2')
require("dotenv").config();

const port = process.env.PORT
const host = process.env.HOST
const user = process.env.USER
const password = process.env.PASSWORD
//=============================================

// Realizando a conexão com o banco MySQl
const connection = mysql.createConnection({
  host: host,
  user: user,
  port: 3306,
  password: password,
  database: "bd_folha"
});

connection.connect()

const getDataDB = async (array, sql) => {

  const resultados = await new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
  //connection.end();

  array.push(...resultados)
}
const getDataFuncionarios = async (array) => {
  return await getDataDB(array, "SELECT * from tb_funcionario")
}

module.exports = { getDataFuncionarios }



