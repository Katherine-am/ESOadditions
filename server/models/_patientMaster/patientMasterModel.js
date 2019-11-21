  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });
  const VitalsModel = require('../vitals/vitals')
  const VitalsSchema = VitalsModel.VitalsSchema;
  const DemographicsModel = require('../_patientMaster/demographics')
  const DemographicsSchema = DemographicsModel.DemographicsSchema;
  const IncidentModel = require('../incident/incident')
  const IncidentSchema = IncidentModel.IncidentSchema;
  const FlowchartModel = require('../flowchart/flowchartMaster');
  const FlowchartSchema = FlowchartModel.FlowchartSchema;
  const AssessmentsModel = require('../assessment/assessment')
  const AssessmentsSchema = AssessmentsModel.AssessmentsSchema;
  const NarrativeModel = require('../narrative/narrative')
  const NarrativeSchema = NarrativeModel.NarrativeSchema

  const PatientSchema = new mongoose.Schema({
      name: { type: String },
      demographics: [DemographicsSchema],
      //   contact: [ContactSchema],
      //   history: { type: String },
      //   allergies: { type: String },
      //   medications: { type: String },
      //   belongings: { type: String },
      incident: [IncidentSchema],
      //   vitals: [VitalsSchema],
      flowchart: [FlowchartSchema],
      assessments: [AssessmentsSchema],
      narrative: [NarrativeSchema]
  }, { timestamps: true })

  const Patient = mongoose.model('patients', PatientSchema);

  module.exports = {
      Patient: Patient
  }