const BookModel = require('../models/book.model');

const get = (req, res) => {
  const query = {};

  if (req.query.title) {
    query.title = req.query.title;
  }

  BookModel.find(query, (err, books) => {
    if (err) {
      return res.send(err);
    }

    return res.json(books);
  });
};

const getById = (req, res) => {
  return res.json(req.book);
};

const patch = (req, res) => {
  const { book } = req;

  // eslint-disable-next-line no-underscore-dangle
  if (req.body._id) {
    // eslint-disable-next-line no-underscore-dangle
    delete req.body._id;
  }

  Object.entries(req.body).forEach(item => {
    const key = item[0];
    const value = item[1];

    book[key] = value;
  });

  req.book.save(err => {
    if (err) {
      return res.send(err);
    }

    return res.json(book);
  });
};

const post = (req, res) => {
  if (!req.body.title) {
    res.status(400);
    return res.send('Title is required');
  }

  const book = new BookModel(req.body);
  book.save();
  res.status(201);
  return res.json(book);
};

const put = (req, res) => {
  const { book } = req;
  book.title = req.body.title;
  book.author = req.body.author;
  book.genre = req.body.genre;
  book.read = req.body.read;
  book.save(err => {
    if (err) {
      return res.send(err);
    }

    return res.json(book);
  });
};

const remove = (req, res) => {
  req.book.remove(err => {
    if (err) {
      res.send(err);
    }

    return res.sendStatus(204);
  });
};

module.exports = { get, getById, patch, post, put, remove };
