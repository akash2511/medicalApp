'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    type: Joi.string().required(),
    exercise: Joi.array().items(Joi.string()),
    sleep: Joi.string().required()
  })
};
