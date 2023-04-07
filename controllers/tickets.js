const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create: createTicket,
}

function newTicket(req, res) {
    let flightId = req.params.id
        res.render("tickets/new", {title: 'Add A Ticket', flightId});
}

async function createTicket(req, res) {
    let flightId = req.params.id;
    req.body.flight = flightId;
    console.log(req.body)
    try {
      console.log('hi')
      const ticket = await Ticket.create(req.body)
    } catch (err) {
      console.log(err)
    }
    res.redirect(`/flights/${flightId}`)
  }