const Article = require('../models/article')

exports.get_all_articles = (req, res) => {
  const isAuth = true

  Article.find({})
    .then(articles => {
      res.render('index', {articles, isAuth})
    })
    .catch(err => res.status(400).json({msg: 'Error', err}))
}

exports.get_article_byId = (req, res) => {
  const { id } = req.params

  Article.findById(id)
    .then(article => res.render('article', {article}))
    .catch(err => res.status(400).json({msg: 'Error', err}))
}

exports.open_add_articlePage = (req, res) => {
  res.render('add')
}

exports.article_delete = (req, res) => {
  const { id } = req.params
  Article.findByIdAndRemove(id)
    .then(() => res.redirect('/'))
    .catch(err => res.status(400).json({ msg: 'Error deleting...', err }))
}

exports.filter_article = (req, res) => {
  const { search } = req.query
  console.log(req.query)

  Article.find().where({ title: { $regex: search, $options: 'i' } })
    .then(articles => {
      res.render('filtered', {articles})
    })
    .catch(err => res.status(400).json({msg: 'Error', err}))
}

exports.add_article = (req, res) => {
  const { title, author, post } = req.body
  const newArticle = new Article({
    title,
    author,
    post
  })
  newArticle.save()
    .then(res.redirect('/'))
    .catch(() => res.status(400).json({msg: err}))
}