const booksController = Book => {
  const post = (req, res) => {
    const book = new Book(req.body);
    if (!req.body.title) {
      res.status(400);
      return res.send('Title is required');
    }

    book.save();
    res.status(201);
    return res.json(book);
  };

  const get = (req, res) => {
    const query = {};

    if (req.query.title) {
      query.title = req.query.title;
    }

    Book.find(query, (err, books) => {
      if (err) {
        return res.send(err);
      }

      return res.json(books);
    });
  };

  return { post, get };
};

module.exports = booksController;
