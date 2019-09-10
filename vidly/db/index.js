const debug = require('debug')('db');
const mongoose = require('mongoose');

const connection = mongoose
  .connect('mongodb://localhost/vidly', {
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then(() => {
    debug('Connected to the database.');
  })
  .catch(err => {
    debug(err);
  });

module.exports = connection;
