const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const FlowchartSchema = new mongoose.Schema({
    airway: [AirwaySchema],
    criticalCare: [CriticalCareSchema],
    defibCardio: [DefibCardioSchema],
    IVtherapy: [IVtherapySchema],
    medication: [MedicationSchema],
    other: [OtherSchema]
}, {timestamps: true})

const FlowChart = new mongoose.model('flowchart', FlowchartSchema)

module.exports = [
    FlowChart
]