const express = require('express')
const path = require('path')

const bodyParser = require('body-parser')


const app = express()

const PORT = process.env.PORT || 5000

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

app.listen(PORT, () => console.log('Server started...'))