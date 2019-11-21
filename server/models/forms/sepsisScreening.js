const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const SepsisScreeningSchema = new mongoose.Schema({
    timePerformed: {type: Date},
    datePerformed: {type: Date},
    infectionSuspectedOrDocumented: {type: Boolean},
    etco2LessThan25mmHg: {type: Boolean},
    lactateLevelGreaterThan4mmolL: {type: Boolean},
    systolicBloodPressureLessThan100mmHg: {type: Boolean},
    respRateGreaterOrEqualTo22BreathPerMin: {type: Boolean},
    glasgowComaScaleLessThan15: {type: Boolean}
})

const SepsisScreening = new mongoose.Schema('sepsisScreenings', SepsisScreeningSchema);

module.exports = {
    SepsisScreening
}