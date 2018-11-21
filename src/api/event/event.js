const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema

const event = new mongoose.Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    bio: { type: String, required: true },
    speaker: { type: String, required: true },
    asset: { type: String, default: 'https://fgslassets.pedrogyn.com.br/images/0c43d35e6231658dbebd3f25a3f283cf' },
    schedule: { type: Date, default: Date.now },
    room: {
        type: String, enum: [
            'Pátio do IFG',
            'Teatro do IFG',
            'Mini Auditório Demartin Bezerra',
            'Sala 1 (Cinemateca)',
            'Sala 2 (Auditório Julieta Passos)',
            'Sala 3 (Auditório Djalma Araújo)',
            'Sala 4 (S-306)',
            'LPIC (S-308)',
            'CTF (S-301)',
            'Laboratório 1 (S-401A)',
            'Laboratório 2 (S-401B)',
            'Laboratório 3 (S-401C)',
            'Laboratório 4 (S-309)',
            'Laboratório 5 (S-310)',
        ], required: true
    },
    createAt: { type: Date, default: Date.now }
})

module.exports = restful.model('event', event)