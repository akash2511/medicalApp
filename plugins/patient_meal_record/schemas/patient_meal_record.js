'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const schema = new Schema(
  {
    patient_id: { type: String, required: true },
    breakfast: [
      {
        _id: false,
        id: { type: String, required: false },
        quantity: { type: Number, required: false }
      }
    ],
    lunch: [
      {
        _id: false,
        id: { type: String, required: false },
        quantity: { type: Number, required: false }
      }
    ],
    snack: [
      {
        _id: false,
        id: { type: String, required: false },
        quantity: { type: Number, required: false }
      }
    ],
    dinner: [
      {
        _id: false,
        id: { type: String, required: false },
        quantity: { type: Number, required: false }
      }
    ],
    hydartion_in_litres: { type: Number, required: false },
    date: { type: Date, required: true },
    archive: { type: Boolean, default: false }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('patient_meal_record', schema, 'patient_meal_record');
