const BookModel = require('../models/book.model');

const middleware = (req, res, next) => {
  BookModel.findById(req.params.bookId, (err, book) => {
    if (err) {
      res.send(err);
    }

    if (book) {
      req.book = book;
      return next();
    }

    return res.sendStatus(404);
  });
};

module.exports = middleware;
