'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.array().items(Joi.object().keys({
    id: Joi.string().required(),
    answers: Joi.array().items(Joi.string())
  }))
};
