'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const schema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true},
    serving: { type: String, required: true },
    form: { type: String, required: true },
    calories: { type: Number, required: true },
    carbohydrates: { type: Number, required: true },
    protein: { type: Number, required: true },
    total_fat:{ type: Number, required: true },
    vitamins: {
        vitaminA: { type: Number, required: false },
        vitaminB: { type: Number, required: false },
        vitaminB1: { type: Number, required: false },
        vitaminB2: { type: Number, required: false },
        vitaminB3: { type: Number, required: false },
        vitaminB5: { type: Number, required: false },
        vitaminB6: { type: Number, required: false }, 
        vitaminB7: { type: Number, required: false },
        vitaminB9: { type: Number, required: false },
        vitaminB12: { type: Number, required: false },
        vitaminC: { type: Number, required: false },
        vitaminD: { type: Number, required: false },
        vitaminE: { type: Number, required: false },
        vitaminK: { type: Number, required: false },
        choline: { type: Number, required: false },
        carnitine: { type: Number, required: false },
    },
    minerals: {
      calcium: { type: Number, required: false },
      chloride: { type: Number, required: false },
      chromium: { type: Number, required: false },
      copper: { type: Number, required: false },
      fluoride: { type: Number, required: false },
      iodine: { type: Number, required: false },
      iron: { type: Number, required: false },
      magnesium: { type: Number, required: false },
      manganese: { type: Number, required: false },
      molybdenum: { type: Number, required: false },
      phosphorus: { type: Number, required: false },
      potassium: { type: Number, required: false },
      selenium: { type: Number, required: false },
      iodium: { type: Number, required: false },
      sulphur: { type: Number, required: false },
      zinc: { type: Number, required: false },
    },
    verified: { type: Boolean, default: false },
    archive: { type: Boolean, default: false }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);


module.exports = mongoose.model('Vitamins_and_Supplements', schema, 'vitamins_and_supplements');
