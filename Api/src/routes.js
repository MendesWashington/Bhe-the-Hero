const express = require('express');
const router = express.Router();
const ongsController = require('./controllers/ongsController');
const incidantController = require('./controllers/incidentController');
const profileController = require ('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

router.post('/session', sessionController.create);
router.get('/profile',profileController.index);

router.get('/ongs', ongsController.index);
router.post('/ongs', ongsController.create);

router.get('/incidents', incidantController.index);
router.post('/incidents', incidantController.create);
router.delete('/incidents/:id', incidantController.delete);

module.exports = router;


