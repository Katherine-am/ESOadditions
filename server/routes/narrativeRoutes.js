 const controller = require('../controllers/narrativeController')
 const path = require('path')

 module.exports = app => {
     app.put('/api/narrative/:id/subjective', controller.newSubjectiveNarrative);
 }