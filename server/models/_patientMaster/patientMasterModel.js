  
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const PatientSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    demographics: [DemographicsSchema],
    contact: [ContactSchema],
    history: {type: String},
    allergies: {type: String},
    medications: {type: String},
    belongings: {type: String},
    incident: [IncidentSchema],
    vitals: [VitalsSchema],
    flowchart: [FlowchartSchema],
    assessments: [AssessmentsSchema],
    narrative: [NarrativeSchema]
}, {timestamps: true})

const Patient = mongoose.model('patients', PatientSchema);

module.exports = {
    Patient
}