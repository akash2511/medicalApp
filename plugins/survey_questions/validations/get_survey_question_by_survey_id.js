'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    survey_id: Joi.string().required()
  })
};
