'use strict';

const PatientsMedicationModel = require('../schemas/patients_medication');

module.exports = {
  name: 'create_patients_medication',
  method: async (medication_id, patient_id, functions) => {
    try {
      const medication = await functions.check_medication(medication_id);
      if(!medication) throw new Error('Medication not found');
      delete medication._id;
      const uploadObject = Object.assign({}, medication, {patient_id});
      const patients_medication = await PatientsMedicationModel.create(uploadObject);
      return patients_medication;
    } catch (e) {
      throw e;
    }
  }
};
