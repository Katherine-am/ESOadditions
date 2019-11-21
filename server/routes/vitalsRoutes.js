const controller = require('../controllers/vitalsController')
const path = require('path')

module.exports = app => {
    app.get("/api/:id", controller.Vitals);

    app.put("/api/:id", controller.Vitalsedit);

}