'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;

const schema = new Schema(
  {
    type: { type: String, required: true },
    diet: [
      {
        diet_id: { type: String, required: true },
        servings: {
          measurement: { type: Number, required: true },
          unit_of_measurement: { type: String, required: true }
        },
      }
    ],
    supplements: [{ type: String, required: true }],
    archive: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('diet_plan', schema, 'diet_plan');
