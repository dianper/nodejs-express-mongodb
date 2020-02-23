# Books API
Simple RESTful API with Node.js, Express and MongoDB

[![CircleCI](https://circleci.com/gh/dianper/nodejs-express-mongodb.svg?style=shield)](https://circleci.com/gh/dianper/nodejs-express-mongodb)

## Requirements
- [Node / Npm](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/download-center/community)

## Install
- git clone https://github.com/dianper/nodejs-express-mongodb
- cd nodejs-express-mongodb
- npm install

## Run
```sh
npm start
# Running on port 3000
```

## Test
```sh
npm run test
# mocha tests/**/*Tests.js
```

## Endpoints
- /api/books
  - [GET] list all books
  - [POST] create a new book (title is required)
  
- /api/books/:bookId
  - [PUT] update a book
  - [PATCH] update a book (part of the resource)
  - [Delete] remove an existing book
