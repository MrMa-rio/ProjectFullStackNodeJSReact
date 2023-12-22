var mysql = require('mysql2')
var express = require('express')
const { getDataFuncionarios } = require('./bd')
require("dotenv").config();
const port = process.env.PORT
const host = process.env.HOST
const user = process.env.USER
const password = process.env.PASSWORD
//=============================================

// Realizando a conexão com o banco MySQl
const con = mysql.createConnection({
  host: host,
  user: user,
  port: 3306,
  password: password,
  database: "bd_folha"
});

con.connect((err) => {
  if (err) {
    console.log("Erro ao conectar no Banco de dados")
    console.log(`O erro foi esse: ${err}`)
  }
  console.log("Conectado")
});
//=============================================


const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: "Funcionando!!"
  })
})

app.get('/api/funcionarios', async (req, res) => {

  try {
    const meuArray = []
    console.log(req.url)
    await getDataFuncionarios(meuArray)
    res.json(meuArray)
  } catch (error) {
    console.error('Erro na consulta ao banco de dados:', error)
    res.status(500).send('Erro interno do servidor')
  }

})

app.listen(port)
console.log("API Funcionando!")





