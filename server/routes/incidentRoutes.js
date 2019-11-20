const controller = require('../controllers/incidentController')
const path = require("path");

module.exports = app => {
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./angular/dist/angular/index.html"))
    })
}