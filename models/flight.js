const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {type: String, enum: ['AUS', 'DEN', 'DFW', 'LAX', 'OAK', 'SAN', 'SFO', 'HNL']},
    arrival: Date,
});

// define a Schema
const flightSchema = new Schema({
    airline: { type: String, enum: ['American', 'Delta', 'Southwest', 'United'] },
    airport: { type: String, enum: ['AUS', 'DEN', 'DFW', 'LAX', 'SAN'] },
    flightNo: {type: Number, required: true, min:10, max:9999}, 
    depart: Date,
    destinations: [destinationSchema]
}, {
    timestamps: true
});

// compiled the schema into a model and exported it
module.exports = mongoose.model('Flight', flightSchema);

