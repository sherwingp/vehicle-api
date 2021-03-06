const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('root route'))

router.get('/vehicles', controllers.getMakeModels)

router.delete('/vehicles/:id', controllers.deleteVehicle)

module.exports = router;