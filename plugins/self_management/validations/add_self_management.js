'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    type: Joi.string().required(),
    exercises: Joi.array().items(Joi.string()),
    sleep_in_min: Joi.string().required()
  })
};
