'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    _id: Joi.string().required()
  }),
  payload: Joi.object({
    user: Joi.string(),
    roles: Joi.array(),
    user_type: Joi.string(),
    archive: Joi.boolean()
  })
};
