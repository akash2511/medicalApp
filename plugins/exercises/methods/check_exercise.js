'use strict';

const ExercisesModel = require('../schemas/exercises');

module.exports = {
  name: 'check_exercise',
  method: async (exercise_ids) => {
    try {
      const filter = {
        _id: {$in: exercise_ids},
        archive: false
      };
      const exercises = await ExercisesModel.find(filter);
      return exercises;
    } catch (e) {
      throw e;
    }
  }
};
