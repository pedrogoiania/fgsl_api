const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema

const comment = new mongoose.Schema({
    _event: { type: Schema.Types.ObjectId, ref: 'event', required: true },
    author: { type: String},
    rate: { type: Number, required: true },
    comment: {type: String },
    createAt: { type: Date, default: Date.now }
})

module.exports = restful.model('comment', comment)