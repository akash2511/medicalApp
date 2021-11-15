'use strict';
const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    name: Joi.string().required(),
    type: Joi.string().valid('breakfast', 'lunch', 'snack', 'dinner').required(),
    serving: Joi.string().required(),
    calories: Joi.number().required(),
    carbohydrates: Joi.number().required(),
    dietaryFiber: Joi.number().required(),
    sugars: Joi.number().required(),
    protein: Joi.number().required(),
    total_fat: Joi.number().required(),
    fats: Joi.object().keys({
        saturated: Joi.number().required(),
        polyunsaturated: Joi.number().required(),
        monounsaturated: Joi.number().required(),
        trans: Joi.number().required(),
        cholestrol: Joi.number().required(),
    }),
    vitamins: Joi.object().keys({
        vitaminA: Joi.number(),
        vitaminB: Joi.number(),
        vitaminC: Joi.number(),
        vitaminD: Joi.number(),
        vitaminE: Joi.number(),
        vitaminK: Joi.number(),
    }),
    minerals: Joi.object().keys({
      calcium: Joi.number(),
      chloride: Joi.number(),
      chromium: Joi.number(),
      copper: Joi.number(),
      fluoride: Joi.number(),
      iodine: Joi.number(),
      iron: Joi.number(),
      magnesium: Joi.number(),
      manganese: Joi.number(),
      molybdenum: Joi.number(),
      phosphorus: Joi.number(),
      potassium: Joi.number(),
      selenium: Joi.number(),
      iodium: Joi.number(),
      sulphur: Joi.number(),
      zinc: Joi.number(),
    })
  })
};
