const express = require('express');

const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/mydb');
const Book = require('./models/bookModel');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 4242;

bookRouter.route('/books')
    .get((req, res) => {
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
    });

    bookRouter.route('/books/:bookId')
    .get((req, res) => {
        Book.findById(req.params.bookId, (err, book) => {
            if (err) {
                res.send(err);
            }

            return res.json(book);
        });
    });

app.use('/api', bookRouter);
app.get('/', (req, res) => {
    res.send(`Welcome to my Node API..`);
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
