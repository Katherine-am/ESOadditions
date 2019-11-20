const controller = require('../controllers/narrativeController')
const path = require('path')

module.exports = app => {
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./angular/dist/angular/index.html"))
    })
}