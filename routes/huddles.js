const Huddle = require('./../controllers/huddles')
const huddleRouter = require('express').Router()


huddleRouter.post('/', Huddle.createHuddle);
huddleRouter.get('/', Huddle.getHuddles);



module.exports = huddleRouter