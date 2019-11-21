const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const AdvancedAirwaySchema = new mongoose.Schema({
    indications:[],
    monitoringDevices:[], 
    rescueDevices: [],
    reasonsForFailedIntubation: [],
    mallampati: {type: Number},
    airwayGrading: {type: Number}
})

const AdvancedAirway = new mongoose.Schema('advancedAirways', AdvancedAirwaySchema);

module.exports = {
    AdvancedAirway
}