const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const schema = new mongoose.Schema({
  isGold: {
    type: Boolean,
    required: true,
    default: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  phone: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    default: '-',
  },
});

const model = mongoose.model('Customer', schema);

function validate(value) {
  const schema = {
    isGold: Joi.boolean(),
    name: Joi.string(),
    phone: Joi.string(),
  };

  return Joi.validate(value, schema);
}

module.exports = {
  model: model,
  validate: validate,
};
