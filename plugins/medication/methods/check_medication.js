'use strict';

const MedicationModel = require('../schemas/medication');

module.exports = {
  name: 'check_medication',
  method: async (medication_id) => {
    try {
      const filter = {
        _id: medication_id,
        archive: false
      };
      const medication = await MedicationModel.findOne(filter);
      return medication;
    } catch (e) {
      throw e;
    }
  }
};
