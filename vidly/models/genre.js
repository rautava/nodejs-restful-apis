const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
});

const model = mongoose.model('Genre', schema);

function validate(value) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
  };

  return Joi.validate(value, schema);
}

module.exports = {
  model: model,
  validate: validate,
};
