const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema

const event = new mongoose.Schema({
    name: { type: String, required: true },
    subject: {type: String, required: true},
    speaker: { type: String, required: true },
    asset: { type: String },
    schedule: { type: String },
    room: { type: String, enum: ['Hall', 'Sala 01', 'Sala 02', 'Sala 03', 'Sala 04', 'Sala 05', 'Sala Extra'], required: true},
    createAt: { type: Date, default: Date.now }
})

module.exports = restful.model('event', event)