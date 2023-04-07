const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight
}

// flights index
async function index(req, res) {
    const flights = await Flight.find({})
    res.render('flights/index', { flights });
}

// flights show
async function show(req, res) {
    const flight = await Flight.findById(req.params.id)
    //  pass both the flight and tickets in the res.render call
    res.render("flights/show", { title: "Flight Detail", flight });
  }

// new flight path so we render it
function newFlight(req, res) {
    res.render('flights/new', {title: 'Add A Flight'});
}