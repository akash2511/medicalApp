'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const schema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true},
    form: { type: String, required: true },
    serving: {
      measurement: { type: Number, required: true },
      unit_of_measurement: { type: String, required: true }
    },
    calories: {
      measurement: { type: Number, required: true },
      unit_of_measurement: { type: String, required: true }
    },
    carbohydrates: {
      measurement: { type: Number, required: true },
      unit_of_measurement: { type: String, required: true }
    },
    protein: {
      measurement: { type: Number, required: true },
      unit_of_measurement: { type: String, required: true }
    },
    total_fat:{
      measurement: { type: Number, required: true },
      unit_of_measurement: { type: String, required: true }
    },
    vitamins: {
        vitaminA: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        vitaminB: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        vitaminB1: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        vitaminB2: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        vitaminB3: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        vitaminB5: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        vitaminB6: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        vitaminB7: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        vitaminB9: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        vitaminB12: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        vitaminC: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        vitaminD: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        vitaminE: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        vitaminK: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        choline: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
        carnitine: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
    },
    minerals: {
      calcium: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      chloride: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      chromium: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      copper: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      fluoride: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      iodine: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      iron: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      magnesium: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      manganese: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      molybdenum: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      phosphorus: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      potassium: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      selenium: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      iodium: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      sulphur: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
      zinc: {
        measurement: { type: Number, required: false },
        unit_of_measurement: { type: String, required: false }
      },
    },
    verified: { type: Boolean, default: false },
    archive: { type: Boolean, default: false }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);


module.exports = mongoose.model('Vitamins_and_Supplements', schema, 'vitamins_and_supplements');
