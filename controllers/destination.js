const Flight = require('../models/flight');

module.exports = {
    create,
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id)
    flight.destinations.push(req.body);
    flight.save()
    res.redirect(`/flights/${flight._id}`);
 }