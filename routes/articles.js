const express = require('express')
const router = express.Router()

const ArticleController = require('../controllers/ArticleController')

router.get('/', ArticleController.get_all_articles)

// Get article by id
router.get('/article/:id', ArticleController.get_article_byId)

router.get('/add', ArticleController.open_add_articlePage)

router.get('/article/delete/:id', ArticleController.article_delete)

router.get('/filtered', ArticleController.filter_article)

router.post('/add', ArticleController.add_article)



module.exports = router