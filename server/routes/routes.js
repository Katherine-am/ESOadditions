const controller = require('../controllers/controller.js');
const path = require("path");

module.exports = (app) => {
    app.get('/incident', controller.patient);
    // app.get('pcr/:id/patient', controller.patient);
    // app.get('pcr/:id/vitals', controller.vitals);
    // app.get('pcr/:id/flowchart', controller.flowchart);
    // app.get('pcr/:id/assessment', controller.assessment);
    // app.get('pcr/:id/narrative', controller.narrative);
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./angular/dist/angular/index.html"))
    })};