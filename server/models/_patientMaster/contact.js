const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const ContactSchema = new mongoose.Schema({
    address: {type: String},
    aptSuiteRoom: {type: String},
    city: {type: String},
    state: {type: String},
    zipCode: {type: Number, max: 5},
    county: {type: String},
    phone: {type: String, max: 10},
    driverLicense: {type: String},
    driverLicenseState: {type: String},
    residentStatus: {type: String},
    physicianLastName: {type: String},
    physicianFirstName: {type: String},
    advanceDirective: {type: String}
}, {timestamps: true})

const Contact = mongoose.model('contacts', ContactSchema);

module.exports = {
    Contact
}