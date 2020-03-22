process.env.NODE_ENV = 'test';

require('should');

const sinon = require('sinon');
const booksController = require('../controllers/book.controller');

describe('Books Controller', () => {
  describe('Post', () => {
    it('should not allow an empty title on post', () => {
      const req = {
        body: {
          author: 'Diego'
        }
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy()
      };

      booksController.post(req, res);

      res.status
        .calledWith(400)
        .should.equal(true, `Bad Status ${res.status.args[0][0]}`);
      res.send.calledWith('Title is required').should.equal(true);
    });
  });
});
