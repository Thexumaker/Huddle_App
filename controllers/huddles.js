let User = require('./../models/user')
let Huddle = require('./../models/huddle')

var mongoose = require('mongoose')

exports.createHuddle = async function(req,res) {
  const newHuddle = new Huddle({
    interests: [req.body.interests],
    members: [mongoose.Types.ObjectId(req.body.id)],
    messages: [],
    memberCount:1

  })
  const savedHuddle = await newHuddle.save()
  console.log(savedHuddle._id)
  const user = await User.findById(mongoose.Types.ObjectId(req.body.id))
  user.Huddles = user.Huddles.concat(mongoose.Types.ObjectId(savedHuddle._id))
  await user.save()
  res.json(savedHuddle)

}
exports.getHuddles = async function(req,res) {
  const huddles = await Huddle.find({}).populate(['members','messages'])
  res.json(huddles)
    

}

exports.getMessages = async function(req,res) {
  const huddles = await Huddle.findById(req.params.huddleID).populate(['messages'])
  res.json(huddles)
      
  
}

