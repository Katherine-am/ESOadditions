const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const VitalsSchema = new mongoose.Schema({
    pta: {type: String},
    time: {type: Date},
    avpu: {type: String},
    side: {type: String},
    position: {type: String},
    uto: {type: String},
    bloodPressure: [
        {systolic: {type: Number}},
        {diastolic: {type: Number}},
        {meanArterialPressure: {type: Number}},
        {method: {type: String}}
    ],
    pulse: [
        {rate: {type: Number}},
        {method: {type: String}},
        {rhythm: {type: String}},
        {strength: {type: String}}
    ],
    respiration: [
        {rate: {type: Number}},
        {quality: {type: String}},
        {rhythm: {type: String}}
    ],
    capnography: [
        {PCOsaturation: {type: Number}},
        {ventilation: {type: Number}},
        {carbon: {type: Number}}
    ],
    tempGlucose: [
        {temperature: {type: Number}},
        {tempMethod: {type: String}},
        {glucose: {type: Number}}
    ],
    scoring: [
        {glasgowComa: [
            {eyes: {type: Number}},
            {verbal: {type: Number}},
            {motor: {type: Number}},
            {qualifier: {type: Number}}
        ]},
        {revisedTrauma: [
            {glasgowComaScore: {type: Number}},
            {bloodPressure: {type: Number}},
            {respirationRate: {type: Number}}
        ]},
        {pediatricTrauma: [
            {airway: {type: Number}},
            {CNS: {type: Number}},
            {wounds: {type: Number}},
            {size: {type: Number}},
            {bp: {type: Number}},
            {skeletal: {type: Number}},
        ]}
    ],
    ECG: [
        {type: {type: String}},
        {rhythm: {type: String}},
        {interpretation: {type: String}},
        {notes: {type: String}},
        {MIsuspected: {type: Boolean}}
    ],
    painScales: {type: Number}
}, {timestamps: true})

const Vitals = new mongoose.model('vitals', VitalsSchema);

module.exports = {
    Vitals
}