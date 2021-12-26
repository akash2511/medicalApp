'use strict';

const PatientsMedicationModel = require('../schemas/patients_medication');

module.exports = {
  name: 'create_patients_medication',
  method: async (medication_id, patient_id, functions) => {
    try {
      const medication = await functions.check_medication(medication_id);
      if(!medication) throw new Error('Medication not found');
      const {medication_for, drug_class, type, generic_name, brand_name, description, breakfast, lunch, snack, dinner, supplement_ids, exercises, sleep_in_min} = medication;
      const uploadObject = {
        patient_id,
        medication_for, 
        drug_class, 
        type, 
        generic_name, 
        brand_name, 
        description, 
        breakfast, 
        lunch, 
        snack, 
        dinner, 
        supplement_ids, 
        exercises, 
        sleep_in_min
      };
      const patients_medication = await PatientsMedicationModel.create(uploadObject);
      return patients_medication;
    } catch (e) {
      throw e;
    }
  }
};
