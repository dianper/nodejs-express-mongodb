const mongoose = require('mongoose');

const connect = () => {
  let dbName;
  if (process.env.NODE_ENV === 'test') {
    dbName = 'mydb-test';
  } else {
    dbName = 'mydb-prod';
  }

  mongoose
    .connect(`mongodb://localhost:27017/${dbName}`)
    .then(() => {
      console.log('MongoDB is connected.');
    })
    .catch(err => {
      console.warn('MongoDB connection unsuccessful.', err);
      process.exit();
    });
};

connect();

exports.mongoose = mongoose;
