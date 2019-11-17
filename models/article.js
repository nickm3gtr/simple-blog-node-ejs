const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: String,
  author: String,
  post: String,
  date: {
    type: Date,
    default: Date.now
  }
})

const Article = module.exports = mongoose.model('article', articleSchema)