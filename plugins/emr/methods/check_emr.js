'use strict';

const EmrModel = require('../schemas/emr');

module.exports = {
  name: 'check_emr',
  method: async (emr_id) => {
    try {
      const filter = {
        _id: emr_id,
        archive: false
      };
      const emr = await EmrModel.findOne(filter);
      if (!emr) throw new Error('EMR not found');
      return emr;
    } catch (e) {
      throw e;
    }
  }
};
