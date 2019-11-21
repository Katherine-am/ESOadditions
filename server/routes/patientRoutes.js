const controller = require('../controllers/patientController')
const path = require('path')

module.exports = app => {
    app.put('/api/demographics/:id', controller.addDemographics);
}