'use strict';

const Joi = require('joi');

module.exports = {
  query: Joi.object({
    ids: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.string())
  })
};