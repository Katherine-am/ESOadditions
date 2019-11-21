const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });
const AirwayModel = require('./flowchartSubModels/airway')
const AirwaySchema = AirwayModel.AirwaySchema;
const CriticalCareModel = require('./flowchartSubModels/critcalCare')
const CriticalCareSchema = CriticalCareModel.CriticalCareSchema;
// const DefibCardioModel = require('./flowchartSubModels/defibCardio')
// const DefibCardioSchema = DefibCardioModel.DefibCardioSchema
// const IVtherapyModel = require('./flowchartSubModels/IVtherapy')
// const IVtherapySchema = IVtherapyModel.IVtherapySchema;
// const MedicationModel = require('./flowchartSubModels/medication')
// const MedicationSchema = MedicationModel.MedicationSchema
// const OtherModel = require('./flowchartSubModels/other')
// const OtherSchema = OtherModel.OtherSchema;

const FlowchartSchema = new mongoose.Schema({
    airway: [AirwaySchema],
    criticalCare: [CriticalCareSchema],
    // defibCardio: [DefibCardioSchema],
    // IVtherapy: [IVtherapySchema],
    // medication: [MedicationSchema],
    // other: [OtherSchema]
}, { timestamps: true })

const FlowChart = mongoose.model('flowchart', FlowchartSchema)

module.exports = {
    FlowChart: FlowChart,
    FlowchartSchema: FlowchartSchema
}