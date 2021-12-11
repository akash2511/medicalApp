'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    profile_id: Joi.string().required(),
    question_id: Joi.string().required()
  })
};
