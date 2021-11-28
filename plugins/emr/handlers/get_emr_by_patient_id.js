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
    const diet_plan = await server.methods.check_diet_plan(medication.diet_plan_id);
    const diet_ids = diet_plan.diets.map(diet=>diet.diet_id);
    const supplement_ids = diet_plan.supplements;
    const diets = await server.methods.check_diet(diet_ids);
    const supplements = await server.methods.check_supplements(supplement_ids);
    const self_management = await server.methods.check_self_management(medication.self_management_id);
    const exercises = await server.methods.check_exercise(self_management.exercises)
    return {
      statusCode: 201,
      message: `Emr fetched successfully`,
      data: {
        emr,
        prescription,
        medication,
        diet_plan,
        diets,
        supplements,
        self_management,
        exercises
      }
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};