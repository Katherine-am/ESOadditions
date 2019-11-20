const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const NarrativeSchema = new mongoose.Schema({
    impression: [
        {primaryImpression: {type: String}},
        {secondaryImpression: {type: String}},
        {medicalTrauma: {type: String}}
    ],
    supportingSignsSymptoms: [
        {category: [
            
        ]}
    ]
}, {timestamps: true})