const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/mydb');
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);
app.get('/', (req, res) => {
  res.send('Welcome to my Node API..');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
