'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    medication_for: Joi.string().required(),
    drug_class: Joi.string().required(),
    type: Joi.string().required(),
    generic_name: Joi.string(),
    brand_name: Joi.string(),
    description: Joi.string(),
    diet_plan_id: Joi.string().required(),
    self_management_id: Joi.string().required()
  })
};