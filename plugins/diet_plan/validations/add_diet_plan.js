'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    type: Joi.string().required(),
    diets: Joi.array().items(Joi.object().keys({
      diet_id: Joi.string().required(),
      servings: Joi.object().keys({
        measurement: Joi.number().required(),
        unit_of_measurement: Joi.string().required()
      }),
    })),
    supplements: Joi.array().items(Joi.string())
  })
};
