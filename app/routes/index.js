const router = require('express').Router();
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../../docs/swagger.json');

const Article = require('./articleRouter');

router.use('/api-docs', swaggerUI.serve);
router.use('/api-docs', swaggerUI.setup(swaggerDocument));

router.use('/api/v1/articles', Article);

module.exports = router;
