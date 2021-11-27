'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    id: Joi.string().required()
  }),
  payload: Joi.object({
    activity_group: Joi.string(),
    name: Joi.string(),
    calories_burnt: Joi.object().keys({
      value: Joi.number(),
      duration_in_min: Joi.string()
    })
  })
};