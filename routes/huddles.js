const Huddle = require('./../controllers/huddles')
const huddleRouter = require('express').Router()


huddleRouter.post('/', Huddle.createHuddle);



module.exports = huddleRouter