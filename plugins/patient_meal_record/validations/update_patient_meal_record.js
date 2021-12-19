'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    id: Joi.string().required()
  }),
  payload: Joi.object({
    breakfast: Joi.array().items(Joi.object().keys({
      id: Joi.string(),
      quantity: Joi.number()
    })),
    lunch: Joi.array().items(Joi.object().keys({
      id: Joi.string(),
      quantity: Joi.number()
    })),
    snack: Joi.array().items(Joi.object().keys({
      id: Joi.string(),
      quantity: Joi.number()
    })),
    dinner: Joi.array().items(Joi.object().keys({
      id: Joi.string(),
      quantity: Joi.number()
    })),
    supplements: Joi.string(),
    hydartion_in_litres: Joi.number()
  })
};
