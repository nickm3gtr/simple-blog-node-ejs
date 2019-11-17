const mongoose = require('mongoose')

// DATABASE
const uri = process.env.DATABASE

const db = {
  database: () => {
    mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));
  }
}


module.exports = db