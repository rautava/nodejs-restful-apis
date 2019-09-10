module.exports = require('express')
  .Router()
  .use('/customers', require('./customers'))
  .use('/genres', require('./genres'));
