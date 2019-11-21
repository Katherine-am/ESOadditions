const controller = require('../controllers/incidentController')
const path = require("path");

module.exports = app => {
    app.put('/api/incident/:id', controller.newIncident);
}