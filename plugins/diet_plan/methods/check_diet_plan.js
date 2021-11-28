'use strict';

const DietPlanModel = require('../schemas/diet_plan');

module.exports = {
  name: 'check_diet_plan',
  method: async (diet_plan_id) => {
    try {
      const filter = {
        _id: diet_plan_id,
        archive: false
      };
      const diet_plan = await DietPlanModel.findOne(filter);
      return diet_plan;
    } catch (e) {
      throw e;
    }
  }
};
