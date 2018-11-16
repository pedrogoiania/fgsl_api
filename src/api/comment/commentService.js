const _ = require('lodash')
const jwt = require('jsonwebtoken')

const comment = require('./comment')
comment.updateOptions({ new: true, runValidators: true })

const env = require('../../.env')

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ status: 'error', errors })
}

const create = (req, res, next) => {

    comment.create(req.body, (err, obj) => {
        if (err) {
            return sendErrorsFromDB(res, err)
        } else {
            return res.send({ status: 'success', data: obj })
        }
    })
}

const getAll = (req, res, next) => {
    comment.find((err, obj) => {
        if (err) {
            sendErrorsFromDB(res, err)
        } else {
            return res.send(obj)
        }
    })
}

const getByEvent = (req, res, next) => {
    comment.find({_event: req.params.eventId}, (err, obj) => {
        if (err) {
            sendErrorsFromDB(res, err)
        } else {
            return res.send(obj)
        }
    })
}

module.exports = { create, getAll, getByEvent }