'use strict';
const Joi = require('joi');

module.exports = {
  params: Joi.object({
    dietId: Joi.string().required()
  })
}