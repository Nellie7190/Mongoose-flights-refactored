const Flight = require('../models/flight');
module.exports = {
    index,
    show
}

// flights index
async function index(req, res) {
    const flights = await Flight.find({})
    res.render('flights/index', { flights });
}

// flights show
async function show(req, res) {
    const tickets = await Ticket.find({detail: detail._id})
    //  pass both the flight and tickets in the res.render call
    res.render("flights/show", { title: "Flight Detail", tickets });
  }