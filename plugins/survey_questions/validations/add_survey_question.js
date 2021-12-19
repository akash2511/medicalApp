'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    survey_id: Joi.string().required(),
    title: Joi.string().required(),
    info: Joi.string(),
    mandatory: Joi.boolean(),
    type: Joi.string(),
    answers: Joi.array().items(Joi.object().keys({
      title: Joi.string(),
      weightage: Joi.number(),
      sub_question: Joi.string()
    })),
    weightage: Joi.number()
  })
};
