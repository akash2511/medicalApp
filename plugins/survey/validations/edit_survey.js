'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    id: Joi.string().required()
  }),
  payload: Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    type: Joi.string(),
    frequency_in_days: Joi.number(),
  })
};