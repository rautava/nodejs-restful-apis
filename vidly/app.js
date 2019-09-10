const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes');
require('./db');

const app = express();

if (app.get('env') === 'development') {
  app.use(morgan('dev'));
}

app.use(helmet());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
