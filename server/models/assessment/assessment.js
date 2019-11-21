const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ESOadditions', { useNewUrlParser: true });

const AssessmentsSchema = new mongoose.Schema({
    initial: { type: String }
}, { timestamps: true })

const Assessments = mongoose.model('assessments', AssessmentsSchema)

module.exports = {
    Assessments: Assessments,
    AssessmentsSchema: AssessmentsSchema
}