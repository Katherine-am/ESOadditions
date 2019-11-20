const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const AssessmentsSchema = new mongoose.Schema({
    initial: {type: String}
}, {timestamps: true})