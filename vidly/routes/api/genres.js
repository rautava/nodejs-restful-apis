const express = require('express');
const debug = require('debug')('api:genres');
const {
  Genre: { model, validate },
} = require('../../models');

const router = express.Router();

router.get('/', async (req, res) => {
  return await model
    .find((err, doc) => {
      if (err) {
        debug(err.message);
        res.status(400).send(err.message);
      }

      res.send(doc);
    })
    .sort('name');
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    debug(error);
    return res.status(400).send(error.details[0].message);
  }

  let data = new model({
    name: req.body.name,
  });

  return await data.save({}, (err, doc) => {
    if (err) {
      debug(err.message);
      return res.status(400).send(err.message);
    }

    return res.send(doc);
  });
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    debug(error);
    return res.status(400).send(error.details[0].message);
  }

  return await model.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
    {
      new: true,
    },
    (err, doc) => {
      if (err) {
        debug(err.message);
        return res.status(404).send(err.message);
      }

      return res.send(doc);
    }
  );
});

router.delete('/:id', async (req, res) => {
  return await model.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err) {
      debug(err.message);
      return res.status(404).send(err.message);
    }

    return res.send(doc);
  });
});

router.get('/:id', async (req, res) => {
  return await model.findById(req.params.id, (err, doc) => {
    if (err) {
      debug(err.message);
      return res.status(404).send(err.message);
    }

    return res.send(doc);
  });
});

module.exports = router;
