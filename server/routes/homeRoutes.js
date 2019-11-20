const controller = require('../controllers/homeController');
const path = require("path");

module.exports = (app) => {
    app.post('/api/home/new', controller.newPatientMaster)

};