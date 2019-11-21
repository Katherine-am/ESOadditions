const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const InfluenzaScreeningSchema = new mongoose.Schema({
    fluSuspected: {type: Boolean},
    onsetTime: {type: Date},
    onsetDate: {type: Date},
    feverOverOneHundred: {type: Boolean},
    cough: {type: Boolean},
    soreThroat: {type: Boolean},
    runnyNose: {type: Boolean},
    nasalCongestion: {type: Boolean},
    otherPersonInHouseholdWithSymptoms: {type: Boolean},
    outsideUSAinPastTwoWeeks: {type: Boolean},
    hadFluVaccine: {type: Boolean},
    takingAntiviralMedicationForFlue: {type: Boolean}
})

const InfluenzaScreening = new mongoose.Schema('influenzaScreenings', InfluenzaScreeningSchema);

module.exports = {
    InfluenzaScreening
}