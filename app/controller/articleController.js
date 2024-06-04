const { Op } = require('sequelize');

const ApiError = require('../../utils/apiError');
const { Article } = require('../models');
const Sequelize = require('sequelize');

const createArticle = async (req, res, next) => {
  try {
    const { author, title, body } = req.body;

    const newArticle = await Article.create({
      author,
      title,
      body,
    });

    res.status(201).json({
      status: 'success',
      data: newArticle,
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const findArticleById = async (req, res, next) => {
  try {
    const article = await Article.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!article) {
      return res.status(404).json({
        status: 'error',
        message: 'Article not found.',
      });
    }

    res.status(200).json({
      status: 'success',
      data: article,
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const getArticles = async (req, res, next) => {
  try {
    const { title, body, query, author } = req.query;
    const filterConditions = {};

    if (query) {
      const searchCondition = {
        [Op.or]: [
          { title: { [Op.iLike]: `%${query}%` } },
          { body: { [Op.iLike]: `%${query}%` } },
        ],
      };
      Object.assign(filterConditions, searchCondition);
    }

    if (author) {
      filterConditions.author = { [Op.iLike]: `%${author}%` };
    }

    const articles = await Article.findAll({
      where: filterConditions,
      order: [['createdAt', 'DESC']],
    });

    if (articles.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'No articles found matching your criteria.',
      });
    }

    res.status(200).json({
      status: 'success',
      data: articles,
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const updateArticle = async (req, res, next) => {
  const { author, title, body } = req.body;

  try {
    const [updatedRowCount, [updatedArticle]] = await Article.update(
      {
        author,
        body,
        title,
      },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
      }
    );

    if (updatedRowCount === 0) {
      return next(new ApiError('Article not found.', 404));
    }

    res.status(200).json({
      status: 'Success',
      data: {
        ...updatedArticle.toJSON(),
      },
      message: 'The data has been successfully updated.',
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    const article = await Article.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!article) {
      next(new ApiError('Article not found.', 404));
    }

    await article.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: 'Success',
      message: 'Article deletion successful.',
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  createArticle,
  getArticles,
  findArticleById,
  updateArticle,
  deleteArticle,
};
