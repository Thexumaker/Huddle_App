var Message = require('./../models/messages');
var mongoose = require('mongoose');
const User = require('../models/user');


exports.createMessage =  async function (req, res, next) {
    newmessage =  new Message({
        messageSender: mongoose.Types.ObjectId(req.body.id),
        message: req.body.message,
        huddle: 'Dick',
        date: new Date()
    })
    const user = await User.findById(req.body.id)
    console.log(user)
    const savedMessage = await newmessage.save()
    user.messages = user.messages.concat(mongoose.Types.ObjectId(savedMessage._id))
    await user.save()
    console.log(savedMessage._id)
    res.json(savedMessage)
        }


