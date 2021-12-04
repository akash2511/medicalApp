'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { Schema } = mongoose;
const smoke_drink_enum = ['occasionally', 'regularly', 'no']
const schema = new Schema(
  {
    first_name: { type: String, required: true },
    middle_name: { type: String, required: false },
    last_name: { type: String, required: true },
    profile_pic: { type: String, required: false },
    dob: { type: String, required: true },
    emr: { type: Array, required: false },
    doctor_id: { type: String, required: false },
    height: [{
      _id: false,
      measurement: { type: Number, required: false },
      unit_of_measurement: { type: String, required: false },
      date: { type: Date, required: false },
    }],
    weight: [{
      _id: false,
      measurement: { type: Number, required: false },
      unit_of_measurement: { type: String, required: false },
      date: { type: Date, required: false },
    }],
    do_you_smoke: { type: String, enum: smoke_drink_enum, required: false },
    do_you_drink: { type: String, enum: smoke_drink_enum, required: false },
    archive: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('profile', schema, 'profile');
