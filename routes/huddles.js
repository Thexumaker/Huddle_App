const Huddle = require('./../controllers/huddles')
const huddleRouter = require('express').Router()


huddleRouter.post('/', Huddle.createHuddle)
huddleRouter.get('/', Huddle.getHuddles)
huddleRouter.get('/:huddleID', Huddle.getMessages)


module.exports = huddleRouter