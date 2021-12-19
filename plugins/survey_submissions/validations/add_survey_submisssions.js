'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.array().items(Joi.object().keys({
    question_id: Joi.string().required(),
    answers: Joi.array().items(Joi.string())
  }))
};
