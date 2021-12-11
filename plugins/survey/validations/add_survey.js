'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    type: Joi.string(),
    frequency_in_days: Joi.number(),
  })
};