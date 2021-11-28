'use strict';

const PrescriptionModel = require('../schemas/prescription');

module.exports = {
  name: 'check_prescription',
  method: async (prescription_ids) => {
    try {
      const filter = {
        _id: { $in: prescription_ids },
        archive: false
      };
      const prescription = await PrescriptionModel.find(filter);
      return prescription;
    } catch (e) {
      throw e;
    }
  }
};
