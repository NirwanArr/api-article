const router = require('express').Router();

const article = require('../controller/articleController');

router.post('/create', article.createArticle);
router.get('/', article.getArticles);
router.get('/:id', article.findArticleById);
router.put('/update/:id', article.updateArticle);
router.delete('/delete/:id', article.deleteArticle);

module.exports = router;
