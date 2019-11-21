const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const NarrativeSchema = new mongoose.Schema({
    impression: [
        { primaryImpression: { type: String } },
        { secondaryImpression: { type: String } },
        { medicalTrauma: { type: String } }
    ],
    supportingSignsSymptoms: [{
        category: { type: String }
    }],
    patientComplaint: [
        { chiefComplaint: { type: String } },
        { secondaryComplaint: { type: String } },
        { finalPatientAcuity: { type: String } }
    ],
    injuries: [
        { wasInjured: { type: Boolean } },
        { primaryInjury: { type: String } },
        { injuryDetails: { type: String } },
        { placeOfInjury: { type: String } },
        { dateOfInjury: { type: Date } }
    ],
    factorsAffectingCare: [
        { barriersToCare: { type: String } },
        { alcoholDrugs: { type: String } },
        { isPregnant: { type: Boolean } }
    ],
    narrative: { type: String }
}, { timestamps: true })


const Narrative = mongoose.model('narrative', NarrativeSchema);

module.exports = {
    Narrative: Narrative,
    NarrativeSchema: NarrativeSchema
}