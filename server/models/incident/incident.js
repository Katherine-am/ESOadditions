const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });


const IncidentSchema = new mongoose.Schema({
    incidentNumber: {type: Number},
    runNumber: {type: Number},
    runType: {type: String},
    priority: {type: String},
    shift: {type: String},
    unit: {type: String},
    vehicle: {type: String},
    EMDcardNumber: {type: String},
    requestBy: {type: String},
    locationType: {type: String},
    locationName: {type: String},
    address: {type: String},
    aptSuiteRoom: {type: String},
    zone: {type: String},
    massCasualty: {type: String},
    destination: [
        {chartNumber: {type: Number}}, 
        {patientNumber: {type: Number}},
        {traumaRegistry: {type: String}},
        {requestForReview: {type: String}}
    ],
    times: [
        {dispatchDelays: {type: String}},
        {responseDelays: {type: String}},
        {sceneDelays: {type: String}},
        {transportDelays: {type: String}},
        {turnAroundDelays: {type: String}}
    ],
    mileage: {type: String},
    additionalFactors: [
        {additionalAgencies: {type: String}},
        {additionalResponders: {type: String}},
        {additionalComments: {type: String}}
    ]
}, {timestamps: true})

const Incident = mongoose.model('incidents', IncidentSchema);

module.exports = {
    Incident
}