var express = require('express');
var router = express.Router();
// pullin gin controller
const flightsCtrl = require('../controllers/flights');

// setting up routes
/* GET flights listing. */
// http://localhost:3000/
router.get('/', flightsCtrl.index);


module.exports = router;
