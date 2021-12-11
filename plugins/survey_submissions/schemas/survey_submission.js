'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;
const schema = new Schema(
  {
    profile_id: { type: String, required: true },
    question_id: { type: String, required: true },
    answers: { type: [String], required: false },
    archive: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('survey_submission', schema, 'survey_submission');
