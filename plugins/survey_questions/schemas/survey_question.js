'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;
const question_type = ['BOOLEAN', 'TEXT', 'SINGLE_CHOICE', 'MULTIPLE_CHOICE', 'SCALE'];
const schema = new Schema(
  {
    survey_id: { type: String, required: true },
    title: { type: String, required: true },
    info: { type: String, required: false },
    mandatory: { type: Boolean, default: false },
    type: { type: String, enum: question_type, required: false },
    answers: [
      {
        title: { type: String, required: false },
        weightage: { type: Number,  default: 0 },
        sub_question: { type: String, required: false }
      }
    ],
    weightage: { type: Number, default: 0 },
    archive: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('survey_question', schema, 'survey_question');
