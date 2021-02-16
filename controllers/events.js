let Event = require('./../models/event')
let Huddle = require('./../models/huddle')
var mongoose = require('mongoose')

exports.createEvent = async function(req,res) {
    //Req should give 
    //event name/ address / interests /huddles
    const newEvent = new Event(
        {
            eventCount : 1,
            eventName : req.body.name,
            eventAddress: req.body.address,
            interests : ["Test"],
            huddles : [mongoose.Types.ObjectId(req.body.huddleId)]



    })
    
    const savedEvent = await newEvent.save()
    const huddle = await Huddle.findById(mongoose.Types.ObjectId(req.body.huddleId))
    let eventForHuddle = JSON.parse(JSON.stringify(newEvent))
    delete eventForHuddle.huddles

    huddle.event = eventForHuddle
    await huddle.save()
    
  
    res.json(savedEvent)

}

exports.getEvents = async function(req,res) {
  const events = await Event.find({}).populate(['huddles'])
  res.json(events)

}