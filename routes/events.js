const Event = require('./../controllers/events')
const eventRouter = require('express').Router()


eventRouter.post('/', Event.createEvent)
eventRouter.get('/', Event.getEvents)

module.exports = eventRouter