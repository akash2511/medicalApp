'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    question_id: Joi.string().required(),
    answers: Joi.array().items(Joi.string())
  })
};
