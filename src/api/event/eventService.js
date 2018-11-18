const _ = require('lodash')
const jwt = require('jsonwebtoken')

const event = require('./event')
event.updateOptions({ new: true, runValidators: true })

const env = require('../../.env')

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ status: 'error', errors })
}

const create = (req, res, next) => {

    event.create(req.body, (err, obj) => {
        if (err) {
            return sendErrorsFromDB(res, err)
        } else {
            return res.send({ status: 'success', data: obj })
        }
    })
}
const update = (req, res, next) => {

    let _id = req.params.id;
    let document = req.body

    event.findByIdAndUpdate({ _id }, document, { new: true }, (err, obj) => {
        if (err) {
            sendErrorsFromDB(res, err)
        } else {
            return res.send({ status: 'ok', data: obj })
        }
    })
}
const remove = (req, res, next) => {

    let _id = req.params.id;
    
    event.deleteOne({ _id }, (err, obj) => {
        if (err) {
            sendErrorsFromDB(res, err)
        } else {
            return res.send({ status: 'ok', data: obj })
        }
    })
}


const getAll = (req, res, next) => {
    event.find()
        .exec((err, obj) => {
            if (err) {
                sendErrorsFromDB(res, err)
            } else {
                return res.send(obj)
            }
        })
}

module.exports = { create, getAll, update, remove }