'use strict';

const PatientsMedicationModel = require('../schemas/patients_medication');

module.exports = {
  name: 'check_patients_medication',
  method: async (medication_id) => {
    try {
      const filter = {
        _id: medication_id,
        archive: false
      }
      const patients_medication = await PatientsMedicationModel.findOne(filter);
      return patients_medication;
    } catch (e) {
      throw e;
    }
  }
};
