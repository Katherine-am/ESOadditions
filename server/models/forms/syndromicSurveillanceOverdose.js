const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const SyndromicSurveillanceOverdoseSchema = new mongoose.Schema({
    timePerformed: {type: Date},
    timePerformedDate: {type: Date},
    onsetTime: {type: Date},
    onsetTimeDate: {type: Date},
    sourceOfSubstance: {type: String},
    methodOfConsumption: {type: String},
    estimatedTimeConsumption: {type: Date},
    estimatedDateConsumption: {type: Date},
    overdoseReason: {type: String},
    reasonNaloxoneNarcanNotAdministered: {type: String},
    NaloxoneNarcanLeftWithSomeone: {type: Boolean},
    rehab: {type: String}
})

const SyndromicSurveillanceOverdose = new mongoose.Schema('syndromicSurveillanceOverdoses', SyndromicSurveillanceOverdoseSchema);

module.exports = {
    SyndromicSurveillanceOverdose
}