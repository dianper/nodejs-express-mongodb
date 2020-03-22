const express = require('express');
const bookController = require('../controllers/book.controller');
const bookMiddleware = require('../middlewares/book.middleware');

const routes = () => {
  const bookRouter = express.Router();

  bookRouter
    .route('/books')
    .post(bookController.post)
    .get(bookController.get);

  bookRouter.use('/books/:bookId', bookMiddleware);
  bookRouter
    .route('/books/:bookId')
    .get(bookController.getById)
    .patch(bookController.patch)
    .put(bookController.put)
    .delete(bookController.remove);

  return bookRouter;
};

module.exports = routes;
