const express = require("express");
const app = express();
app.use(express.static(__dirname + '/angular/dist/angular'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const assessmentsRoute = require('./server/routes/assessmentsRoutes')(app);
const flowchartRoute = require('./server/routes/flowchartRoutes')(app);
const homeRoute = require('./server/routes/homeRoutes')(app);
const incidentRoute = require('./server/routes/incidentRoutes')(app);
const narrativeRoute = require('./server/routes/narrativeRoutes')(app);
const patientRoute = require('./server/routes/patientRoutes')(app);
const vitalsRoute = require('./server/routes/vitalsRoutes')(app);


app.listen(8000, () => {
    console.log("listening on port 8000")
})