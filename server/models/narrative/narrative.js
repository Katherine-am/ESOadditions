const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const NarrativeSchema = new mongoose.Schema({
    impression: [
        {primaryImpression: {type: String}},
        {secondaryImpression: {type: String}},
        {medicalTrauma: {type: String}}
    ],
    supportingSignsSymptoms: [
        {category: {type: String} [
            {signSymptom: {type: String}}
        ]}
    ],
    patientComplaint: [
        {chiefComplaint: {type: String}},
        {secondaryComplaint: {type: String}},
        {finalPatientAcuity: {type: String}}
    ],
    injuries: [
        {wasInjured: {type: Boolean}},
        {primaryInjury: {type: String}},
        {injuryDetails: {type: String}},
        {placeOfInjury: {type: String}},
        {dateOfInjury: {type: Date}}
    ],
    factorsAffectingCare: [
        {barriersToCare: {type: String}},
        {alcoholDrugs: {type: String}},
        {isPregnant: {type: Boolean}}
    ],
    narrative: {type: String}
}, {timestamps: true})