'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const schema = new Schema(
  {
    patient_id: { type: String, required: true},
    medication_for: { type: String, required: true },
    drug_class: { type: String, required: true },
    type: { type: String, required: true },
    generic_name: { type: String, required: false },
    brand_name: { type: String, required: false },
    description: { type: String, required: false },
    breakfast: [
      {
        _id: false,
        diet_id: { type: String, required: false },
        servings: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
      }
    ],
    lunch: [
      {
        _id: false,
        diet_id: { type: String, required: false },
        servings: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
      }
    ],
    snack: [
      {
        _id: false,
        diet_id: { type: String, required: false },
        servings: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
      }
    ],
    dinner: [
      {
        _id: false,
        diet_id: { type: String, required: false },
        servings: {
          measurement: { type: Number, required: false },
          unit_of_measurement: { type: String, required: false }
        },
      }
    ],
    supplement_ids: { type: [String], required: false },
    exercises: { type: [String], required: false },
    sleep_in_min: { type: Number, required: false },
    archive: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('patients_medication', schema, 'patients_medication');
