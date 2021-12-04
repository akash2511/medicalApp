'use strict';

const Joi = require('joi');

module.exports = {
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
    hydartion_in_litres: Joi.string(),
    date: Joi.date().required()
  })
};
