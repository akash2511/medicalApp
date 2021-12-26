'use strict';

const EmrModel = require('../schemas/emr');

module.exports = {
  name: 'update_prescription_id_in_emr',
  method: async (emr_id, prescription_id) => {
    try {
      const filter = {
        _id: emr_id,
        archive: false
      };
      const update = {
        $addToSet: {prescription_ids: prescription_id}
      };
      const options = { useFindAndModify: false, new: true};
      const emr = await EmrModel.findOneAndUpdate(filter, update, options);
      return emr;
    } catch (e) {
      throw e;
    }
  }
};
