const controller = require('../controllers/homeController');
const path = require("path");

module.exports = (app) => {
    app.post('/api/home/new', controller.newPatientMaster)
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./angular/dist/angular/index.html"))
    })
};