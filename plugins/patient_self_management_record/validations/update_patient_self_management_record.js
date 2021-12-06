'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    id: Joi.string().required()
  }),
  payload: Joi.object({
    exercise: Joi.array().items(Joi.object().keys({
      id: Joi.string(),
      duration_in_min: Joi.number()
    })),
    sleep_in_min: Joi.number()
  })
};
