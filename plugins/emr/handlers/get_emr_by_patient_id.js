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
    const medication = await server.methods.check_patients_medication(last_prescription.medication_id);
    const diet_ids = [];
    if(medication.breakfast.length>0) medication.breakfast.forEach(diet=>diet_ids.push(diet.diet_id));
    if(medication.lunch.length>0) medication.lunch.forEach(diet=>diet_ids.push(diet.diet_id));
    if(medication.snack.length>0) medication.snack.forEach(diet=>diet_ids.push(diet.diet_id));
    if(medication.dinner.length>0) medication.dinner.forEach(diet=>diet_ids.push(diet.diet_id));
    const diets = diet_ids.length > 0? await server.methods.check_diet(diet_ids): [];
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
