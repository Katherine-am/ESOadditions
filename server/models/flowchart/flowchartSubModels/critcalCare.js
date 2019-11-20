const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const CriticalCareSchema = new mongoose.Schema({
    pericardiocentesis: [
        {time: {type: Date}},
        {date: {type: Date}},
        {reason: {type: String}},
        {volume: {type: String}},
        {ROSC: {type: Boolean}},
        {successful: {type: Boolean}},
        {comments: {type: String}},
        {general: [GeneralSchema]}
    ]
})

const CriticalCare = new mongoose.Schema('criticalCare', CriticalCareSchema)

module.exports = {
    CriticalCare
}