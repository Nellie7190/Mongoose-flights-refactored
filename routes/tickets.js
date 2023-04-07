const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// GET tickets onto flights/show page
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

// POST tickets to flights/show page from form
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;