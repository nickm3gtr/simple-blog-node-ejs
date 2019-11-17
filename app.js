const express = require('express')
const path = require('path')

const bodyParser = require('body-parser')


const app = express()

// Load View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

// Set static dir
app.use(express.static(path.join(__dirname, 'public')))

const db = require('./config/database')
// run mongoDB
db.database()

app.use('/', require('./routes/articles'))

app.listen(5000, () => console.log('Server started...'))