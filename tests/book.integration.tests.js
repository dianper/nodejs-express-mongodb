process.env.NODE_ENV = 'test';

require('should');

const request = require('supertest');
const { mongoose } = require('../config/db.config');
const app = require('../app.js');

const Book = mongoose.model('Book');
const agent = request.agent(app);

describe('Book Crud', () => {
  afterEach(done => {
    Book.deleteMany({}).exec();
    done();
  });

  after(done => {
    mongoose.connection.close();
    app.server.close(done());
  });

  it('should allow a Book to be posted and return read and _id', done => {
    const bookPost = {
      title: 'NewBook',
      author: 'Diego',
      genre: 'War'
    };

    agent
      .post('/api/books')
      .send(bookPost)
      .expect(200)
      .end((err, results) => {
        results.body.should.have.property('_id');
        done();
      });
  });
});
