const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });
const GeneralModel = require('./otherFlowchartSubs/general')
const GeneralSchema = GeneralModel.GeneralSchema;
const TubeModel = require('./otherFlowchartSubs/tube')
const TubeSchema = TubeModel.TubeSchema;
const AirwaySchema = new mongoose.Schema({
    OPA: [
        { time: { type: Date } },
        { date: { type: Date } },
        { successful: { type: Boolean } },
        { comments: { type: String } },
        // { general: [GeneralSchema] }
    ],
    orogastricTube: [
        { time: { type: Date } },
        { date: { type: Date } },
        { size: { type: Number } },
        { placedAt: { type: Number } },
        { successful: { type: Boolean } },
        { comments: { type: String } },
        // { general: [GeneralSchema] }
    ],
    iGEL: [
        { time: { type: Date } },
        { date: { type: Date } },
        { size: { type: Number } },
        { placedAt: { type: Number } },
        { assisstingDevice: { type: String } },
        { stopTime: { type: Date } },
        { stopDate: { type: Date } },
        { placementVerification: { type: String } },
        { complications: { type: String } },
        { comment: { type: String } },
        { successful: { type: Boolean } },
        // { general: [GeneralSchema] }
    ],
    flutterValve: [
        { time: { type: Date } },
        { date: { type: Date } },
        { comment: { type: String } },
        { successful: { type: Boolean } },
        // { general: [GeneralSchema] }
    ],
    surgicalCricothyroidotomy: [
        { time: { type: Date } },
        { date: { type: Date } },
        { size: { type: Number } },
        { placedAt: { type: Number } },
        { placementVerification: { type: String } },
        { complications: { type: String } },
        { comment: { type: String } },
        // { general: [GeneralSchema] }
    ],
    orotrachealIntubation: [
        { tube: [TubeSchema] },
        // { general: [GeneralSchema] }
    ],
    magillForcep: [
        { time: { type: Date } },
        { date: { type: Date } },
        { comments: { type: String } },
        // { general: [GeneralSchema] }
    ],
    oxygen: [
        { time: { type: Date } },
        { date: { type: Date } },
        { device: { type: String } },
        { flowRate: { type: Number } },
        { comments: { type: String } },
        // { general: [GeneralSchema] }
    ],
    needleCricothyroidotomy: [
        { time: { type: Date } },
        { date: { type: Date } },
        { comments: { type: String } },
        // { general: [GeneralSchema] }
    ],
    suction: [
        { time: { type: Date } },
        { date: { type: Date } },
        { content: { type: String } },
        { amount: { type: Number } },
        { comments: { type: String } },
        // { general: [GeneralSchema] }
    ]
})

const Airway = mongoose.model('airway', AirwaySchema);

module.exports = {
    Airway: Airway,
    AirwaySchema: AirwaySchema
}