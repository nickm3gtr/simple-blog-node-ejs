const mongoose = require('mongoose')

// DATABASE
const uri = "mongodb+srv://nick:nick123@cluster0-z3vvh.mongodb.net/articles?retryWrites=true&w=majority";

const db = {
  database: () => {
    mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));
  }
}


module.exports = db