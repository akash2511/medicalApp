'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    patient_id: Joi.string().required(),
    medication_for: Joi.string().required(),
    drug_class: Joi.string().required(),
    type: Joi.string().required(),
    generic_name: Joi.string(),
    brand_name: Joi.string(),
    description: Joi.string(),
    breakfast: Joi.array().items(Joi.object().keys({
      diet_id: Joi.string(),
      servings: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string()
      })
    })),
    lunch: Joi.array().items(Joi.object().keys({
      diet_id: Joi.string(),
      servings: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string()
      })
    })),
    snack: Joi.array().items(Joi.object().keys({
      diet_id: Joi.string(),
      servings: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string()
      })
    })),
    dinner: Joi.array().items(Joi.object().keys({
      diet_id: Joi.string(),
      servings: Joi.object().keys({
        measurement: Joi.number(),
        unit_of_measurement: Joi.string()
      })
    })),
    supplement_ids: Joi.array().items(Joi.string()),
    exercises: Joi.array().items(Joi.string()),
    sleep_in_min: Joi.number()
  })
};
