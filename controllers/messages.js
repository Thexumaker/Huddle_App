var Message = require('./../models/messages');
var mongoose = require('mongoose');
const User = require('../models/user');
const Huddle = require('../models/huddle');


exports.createMessage =  async function (req, res, next) {
    newmessage =  new Message({
        messageSender: mongoose.Types.ObjectId(req.body.id),
        huddleId: mongoose.Types.ObjectId(req.body.huddleID),
        message: req.body.message,
        date: new Date()
    })
    const user = await User.findById(req.body.id)
    const huddle = await Huddle.findById(req.body.huddleID)
    const savedMessage = await newmessage.save()
    user.messages = user.messages.concat(mongoose.Types.ObjectId(savedMessage._id))
    huddle.messages = huddle.messages.concat(mongoose.Types.ObjectId(savedMessage._id))
    await user.save()
    await huddle.save()
    res.json(savedMessage)
        }
exports.viewMessage = async function(req,res,next) {
    const user = await User.findById(req.params.id).populate(['messages','Huddles'])
    res.json(user.messages)


}

