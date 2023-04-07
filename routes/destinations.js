var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controllers/destination')

// router.get('/:id/destinations', destinationsCtrl.showdestinations);

// POST /flights/destinations
// http://localhost:3000/flights/destinations
router.post('/flights/:id/destinations', destinationsCtrl.create);
//router.delete('/destinations/:id', destinationsCtrl.delete);

module.exports = router;