'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    id: Joi.string().required()
  }),
  payload: Joi.object({
    survey_id: Joi.string(),
    title: Joi.string(),
    info: Joi.string(),
    mandatory: Joi.boolean(),
    type: Joi.string(),
    answers: Joi.array().items(Joi.object().keys({
      title: Joi.string(),
      weightage: Joi.number(),
      sub_question: Joi.string()
    })),
    score_category: Joi.string(),
    weightage: Joi.number(),
    main: Joi.boolean(),
    order: Joi.number()
  })
};
