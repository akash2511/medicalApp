'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    path: Joi.string().required()
  })
};
