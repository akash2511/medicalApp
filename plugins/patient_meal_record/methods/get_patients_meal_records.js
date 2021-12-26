'use strict';

const MealRecordModel = require('../schemas/patient_meal_record');

module.exports = {
  name: 'get_patients_meal_records',
  method: async (patient_id) => {
    try {
      const filter = {
        patient_id,
        archive: false
      }
      const patient_meal_records = await MealRecordModel.find(filter);
      patient_meal_records.sort((a,b) => a.date - b.date);
      return patient_meal_records;
    } catch (e) {
      throw e;
    }
  }
};
