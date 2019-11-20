const controller = require('../controllers/assessmentsController');
const path = require("path");

module.exports = app => {
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./angular/dist/angular/index.html"))
    })
}