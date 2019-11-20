const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const DemographicsSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    middleName: {type: String},
    lastName: {type: String},
    SSN: {type: Number, min: 0, max: 9},
    DOB: {type: Date},
    age: {type: Number, min: 0, max: 130},
    weight: {type: Number},
    gender: {type: String},
    race: {type: String},
    ethnicity: {type: String}
}, {timestamps: true})

const Demographics = mongoose.model('demographicss', DemographicsSchema);

module.exports = {
    Demographics
}