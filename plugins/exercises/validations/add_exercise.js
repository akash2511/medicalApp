'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    activity_group: Joi.string().required(),
    name: Joi.string().required(),
    calories_burnt: Joi.object().keys({
      value: Joi.number().required(),
      duration_in_min: Joi.number().required()
    })
  })
};