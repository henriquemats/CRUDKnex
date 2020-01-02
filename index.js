const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const db = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'cadastro'
  }
})

const pessoas = require('./routes/pessoas')

const app = express()
const port = process.env.PORT || 3333

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

const dependencies = {
  db
}

app.get('/', (req, res) => res.render('home'))
app.use('/pessoas', pessoas(dependencies))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

db && app.listen(port, () => console.log('CRUD listening on port: ' + port))