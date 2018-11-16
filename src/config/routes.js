const express = require('express')
const auth = require('./auth')
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

module.exports = function (server) {

    const event = require('../api/event/eventService')
    const comment = require('../api/comment/commentService')

    const router = express.Router()
    server.use('/api', router)
    router.use(auth)

    const openApi = express.Router()
    server.use('/', openApi)
    openApi.post('/event', event.create)
    openApi.get('/event', event.getAll)
    openApi.post('/comment', comment.create)
    openApi.get('/comment', comment.getAll)
    openApi.get('/comment/:eventId', comment.getByEvent)

    /**
     * Rotas abertas
     */
}