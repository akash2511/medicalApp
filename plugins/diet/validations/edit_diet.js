'use strict';
const Joi = require('joi');

module.exports = {
  params: Joi.object({
    dietId: Joi.string().required()
  }),
  payload: Joi.object({
    name: Joi.string(),
    type: Joi.string().valid('breakfast', 'lunch', 'snack', 'dinner'),
    serving: Joi.string(),
    calories: Joi.number(),
    carbohydrates: Joi.number(),
    dietaryFiber: Joi.number(),
    sugars: Joi.number(),
    protein: Joi.number(),
    total_fat: Joi.number(),
    fats: Joi.object().keys({
        saturated: Joi.number(),
        polyunsaturated: Joi.number(),
        monounsaturated: Joi.number(),
        trans: Joi.number(),
        cholestrol: Joi.number(),
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
