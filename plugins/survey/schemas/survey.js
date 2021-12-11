'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;
const survey_type = ['general', 'covid', 'diabetes']
const schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    type: { type: String, enum: survey_type, required: false },
    frequency_in_days: { type: Number, default: 0 },
    archive: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('survey', schema, 'survey');
