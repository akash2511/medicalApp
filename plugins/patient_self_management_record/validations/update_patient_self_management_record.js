'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    exercise: Joi.array().items(Joi.object().keys({
      id: Joi.string(),
      duration_in_min: Joi.number()
    })),
    sleep_in_min: Joi.number(),
    date: Joi.date().required()
  })
};
