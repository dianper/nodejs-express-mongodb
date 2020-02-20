const booksController = (Book) => {
  const post = (req, res) => {
    const book = new Book(req.body);

    book.save();

    res.status(201).json(book);
  };

  const get = (req, res) => {
    const query = {};

    if (req.query.title) {
      query.title = req.query.title;
    }

    Book.find(query, (err, books) => {
      if (err) {
        res.send(err);
      }

      return res.json(books);
    });
  };

  return { post, get };
};

module.exports = booksController;
