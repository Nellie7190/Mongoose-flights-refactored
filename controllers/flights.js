const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    index,
    show,
    new: newFlight,
    create: createFlight,
    delete: deleteFlight
}

// flights index
async function index(req, res) {
    const flights = await Flight.find({})
    res.render('flights/index', {title: 'All Flights', flights });
}

// flights show
async function show(req, res) {
    const flight = await Flight.findById(req.params.id)
    const tickets = await Ticket.find({flight: flight._id})
    //  pass both the flight and tickets in the res.render call
    res.render("flights/show", { title: "Flight Detail", flight, tickets });
  }

// new flight path so we render form
function newFlight(req, res) {
    res.render('flights/new', {title: 'Add A Flight'});
}

// flight controller for posting new from form
function createFlight(req, res) { 
    const flight = new Flight(req.body);
    flight.save()
    res.redirect('/flights');
}

// deleting specific flight
async function deleteFlight(req, res) {
    const deletedFlight = await Flight.findByIdAndDelete(req.params.id)
    res.redirect('/flights');
}