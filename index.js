const express = require('express');
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello FWE students!')
})

app.listen(port, () => {
  console.log(`[Express]: Listening at http://localhost:${port}`)
})


const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'mysqldb',
  port: 3306,
  user: 'root',
  password: 'secret',
  database: 'fwemysqldb',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('[MySQL]: Sucessfully connected to DB!');
});