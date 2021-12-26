'use strict';

const EmrModel = require('../schemas/emr');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { params, server } = request;
  const { patientId } = params
  try {

    const emr = await EmrModel.findOne({patient_id: patientId, archive: false});
    const prescriptions = await server.methods.check_prescription(emr.prescription_ids);
    prescriptions.sort((a, b)=> {
      new Date(a.created_at) - new Date(b.created_at)
    })
    const last_prescription = prescriptions[prescriptions.length - 1];
    const medication = await server.methods.check_medication(last_prescription.medication_id);
    const diet_ids = [];
    medication.breakfast.forEach(diet=>diet_ids.push(diet.diet_id));
    medication.lunch.forEach(diet=>diet_ids.push(diet.diet_id));
    medication.snack.forEach(diet=>diet_ids.push(diet.diet_id));
    medication.dinner.forEach(diet=>diet_ids.push(diet.diet_id));
    const diets = await server.methods.check_diet(diet_ids);
    const supplements = await server.methods.check_supplements(medication.supplement_ids);
    const exercises = await server.methods.check_exercise(medication.exercises)
    return {
      statusCode: 201,
      message: `Emr fetched successfully`,
      data: {
        emr,
        prescription: last_prescription,
        medication,
        diets,
        supplements,
        exercises
      }
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
