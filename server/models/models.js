const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOmakeover', { useNewUrlParser: true });

const PatientSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    // demographics: [
    //     {firstName: {type: String, required: true}},
    //     {middleName: {type: String}},
    //     {lastName: {type: String}},
    //     {SSN: {type: Number, min: 0, max: 9}},
    //     {DOB: {type: Date}},
    //     {age: {type: Number, min: 0, max: 130}},
    //     {weight: {type: Number}},
    //     {gender: {type: String}},
    //     {race: {type: String}},
    //     {ethnicity: {type: String}}
    // ],
    // contact: [
    //     {address: {type: String}},
    //     {aptSuiteRoom: {type: String}},
    //     {city: {type: String}},
    //     {state: {type: String}},
    //     {zipCode: {type: Number, max: 5}},
    //     {county: {type: String}},
    //     {phone: {type: String, max: 10}},
    //     {driverLicense: {type: String}},
    //     {driverLicenseState: {type: String}},
    //     {residentStatus: {type: String}},
    //     {physicianLastName: {type: String}},
    //     {physicianFirstName: {type: String}},
    //     {advanceDirective: {type: String}}
    // ],
    // history: {type: String},
    // allergies: {type: String},
    // medications: {type: String},
    // belongings: {type: String}
}, {timestamps: true})

const Patient = mongoose.model('patients', PatientSchema);

module.exports = {
    Patient
}