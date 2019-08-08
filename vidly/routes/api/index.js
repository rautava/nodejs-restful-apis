module.exports = require('express')
  .Router()
  .use('/genres', require('./genres'));
