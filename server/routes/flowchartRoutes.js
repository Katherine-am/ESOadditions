const controller = require('../controllers/flowchartController');
const path = require("path");

module.exports = app => {
    app.get("/api/:id/flow", controller.Flowchart);

    app.put("/api/:id/flow", controller.Flowchartedit);

}